// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

//! Types and functions related to Inter Procedure Call(IPC).
//!
//! This module includes utilities to send messages to the JS layer of the webview.

use std::{
  collections::HashMap,
  sync::{Arc, Mutex},
};

use futures_util::Future;
use serde::{de::DeserializeOwned, Deserialize, Serialize};
use serde_json::Value as JsonValue;
pub use serialize_to_javascript::Options as SerializeOptions;
use tauri_macros::default_runtime;

use crate::{
  command::{CommandArg, CommandItem},
  Runtime, StateManager, Window,
};

/// A closure that is run every time Tauri receives a message it doesn't explicitly handle.
pub type InvokeHandler<R> = dyn Fn(Invoke<R>) -> bool + Send + Sync + 'static;

/// A closure that is responsible for respond a JS message.
pub type InvokeResponder<R> =
  dyn Fn(Window<R>, &InvokeResponse, CallbackFn, CallbackFn) + Send + Sync + 'static;
type OwnedInvokeResponder<R> =
  dyn Fn(Window<R>, InvokeResponse, CallbackFn, CallbackFn) + Send + Sync + 'static;

const CHANNEL_PREFIX: &str = "__CHANNEL__:";
pub(crate) const FETCH_CHANNEL_DATA_COMMAND: &str = "__tauriFetchChannelData__";

#[derive(Default)]
pub(crate) struct ChannelDataCache(pub(crate) Mutex<HashMap<u32, InvokeBody>>);

/// An IPC channel.
#[default_runtime(crate::Wry, wry)]
pub struct Channel<R: Runtime> {
  id: CallbackFn,
  window: Window<R>,
}

impl<R: Runtime> Clone for Channel<R> {
  fn clone(&self) -> Self {
    Self {
      id: self.id,
      window: self.window.clone(),
    }
  }
}

impl Serialize for Channel {
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
    S: serde::Serializer,
  {
    serializer.serialize_str(&format!("{CHANNEL_PREFIX}{}", self.id.0))
  }
}

impl<R: Runtime> Channel<R> {
  /// Sends the given data through the  channel.
  pub fn send<T: IpcResponse>(&self, data: T) -> crate::Result<()> {
    use crate::Manager;

    let body = data.body()?;
    let data_id = rand::random();
    self
      .window
      .state::<ChannelDataCache>()
      .0
      .lock()
      .unwrap()
      .insert(data_id, body);
    self.window.eval(&format!(
        "__TAURI_INVOKE__('{FETCH_CHANNEL_DATA_COMMAND}', {{ id: {data_id} }}).then(window['_' + {}])",
        self.id.0
      ))
  }
}

impl<'de, R: Runtime> CommandArg<'de, R> for Channel<R> {
  /// Grabs the [`Window`] from the [`CommandItem`] and returns the associated [`Channel`].
  fn from_command(command: CommandItem<'de, R>) -> Result<Self, InvokeError> {
    let name = command.name;
    let arg = command.key;
    let window = command.message.window();
    let value: String =
      Deserialize::deserialize(command).map_err(|e| crate::Error::InvalidArgs(name, arg, e))?;
    if let Some(callback_id) = value
      .split_once(CHANNEL_PREFIX)
      .and_then(|(_prefix, id)| id.parse().ok())
    {
      return Ok(Channel {
        id: CallbackFn(callback_id),
        window,
      });
    }
    Err(InvokeError::from_anyhow(anyhow::anyhow!(
      "invalid channel value `{value}`, expected a string in the `{CHANNEL_PREFIX}ID` format"
    )))
  }
}

/// Possible values of an IPC payload.
#[derive(Debug, Clone)]
pub enum InvokeBody {
  /// Json payload.
  Json(JsonValue),
  /// Bytes payload.
  Raw(Vec<u8>),
}

impl Default for InvokeBody {
  fn default() -> Self {
    Self::Json(Default::default())
  }
}

impl From<JsonValue> for InvokeBody {
  fn from(value: JsonValue) -> Self {
    Self::Json(value)
  }
}

impl From<Vec<u8>> for InvokeBody {
  fn from(value: Vec<u8>) -> Self {
    Self::Raw(value)
  }
}

impl IpcResponse for InvokeBody {
  fn body(self) -> crate::Result<InvokeBody> {
    Ok(self)
  }
}

impl InvokeBody {
  #[allow(dead_code)]
  pub(crate) fn into_json(self) -> JsonValue {
    match self {
      Self::Json(v) => v,
      Self::Raw(v) => {
        JsonValue::Array(v.into_iter().map(|n| JsonValue::Number(n.into())).collect())
      }
    }
  }

  /// Attempts to deserialize the invoke body.
  pub fn deserialize<T: DeserializeOwned>(self) -> serde_json::Result<T> {
    match self {
      InvokeBody::Json(v) => serde_json::from_value(v),
      InvokeBody::Raw(v) => serde_json::from_slice(&v),
    }
  }
}

/// The IPC request.
#[derive(Debug)]
pub struct Request<'a> {
  body: &'a InvokeBody,
}

impl<'a> Request<'a> {
  /// The request body.
  pub fn body(&self) -> &InvokeBody {
    self.body
  }
}

impl<'a, R: Runtime> CommandArg<'a, R> for Request<'a> {
  /// Returns the invoke [`Request`].
  fn from_command(command: CommandItem<'a, R>) -> Result<Self, InvokeError> {
    Ok(Self {
      body: &command.message.payload,
    })
  }
}

/// Marks a type as a response to an IPC call.
pub trait IpcResponse {
  /// Resolve the IPC response body.
  fn body(self) -> crate::Result<InvokeBody>;
}

impl<T: Serialize> IpcResponse for T {
  fn body(self) -> crate::Result<InvokeBody> {
    serde_json::to_value(self)
      .map(Into::into)
      .map_err(Into::into)
  }
}

/// The IPC request.
pub struct Response {
  body: InvokeBody,
}

impl IpcResponse for Response {
  fn body(self) -> crate::Result<InvokeBody> {
    Ok(self.body)
  }
}

impl Response {
  /// Defines a response with the given body.
  pub fn new(body: impl Into<InvokeBody>) -> Self {
    Self { body: body.into() }
  }
}

/// The message and resolver given to a custom command.
#[default_runtime(crate::Wry, wry)]
pub struct Invoke<R: Runtime> {
  /// The message passed.
  pub message: InvokeMessage<R>,

  /// The resolver of the message.
  pub resolver: InvokeResolver<R>,
}

/// Error response from an [`InvokeMessage`].
#[derive(Debug)]
pub struct InvokeError(pub JsonValue);

impl InvokeError {
  /// Create an [`InvokeError`] as a string of the [`std::error::Error`] message.
  #[inline(always)]
  pub fn from_error<E: std::error::Error>(error: E) -> Self {
    Self(JsonValue::String(error.to_string()))
  }

  /// Create an [`InvokeError`] as a string of the [`anyhow::Error`] message.
  #[inline(always)]
  pub fn from_anyhow(error: anyhow::Error) -> Self {
    Self(JsonValue::String(format!("{error:#}")))
  }
}

impl<T: Serialize> From<T> for InvokeError {
  #[inline]
  fn from(value: T) -> Self {
    serde_json::to_value(value)
      .map(Self)
      .unwrap_or_else(Self::from_error)
  }
}

impl From<crate::Error> for InvokeError {
  #[inline(always)]
  fn from(error: crate::Error) -> Self {
    Self(JsonValue::String(error.to_string()))
  }
}

/// Response from a [`InvokeMessage`] passed to the [`InvokeResolver`].
#[derive(Debug)]
pub enum InvokeResponse {
  /// Resolve the promise.
  Ok(InvokeBody),
  /// Reject the promise.
  Err(InvokeError),
}

impl<T: IpcResponse, E: Into<InvokeError>> From<Result<T, E>> for InvokeResponse {
  #[inline]
  fn from(result: Result<T, E>) -> Self {
    match result {
      Ok(ok) => match ok.body() {
        Ok(value) => Self::Ok(value),
        Err(err) => Self::Err(InvokeError::from_error(err)),
      },
      Err(err) => Self::Err(err.into()),
    }
  }
}

impl From<InvokeError> for InvokeResponse {
  fn from(error: InvokeError) -> Self {
    Self::Err(error)
  }
}

/// Resolver of a invoke message.
#[default_runtime(crate::Wry, wry)]
pub struct InvokeResolver<R: Runtime> {
  window: Window<R>,
  responder: Arc<OwnedInvokeResponder<R>>,
  pub(crate) callback: CallbackFn,
  pub(crate) error: CallbackFn,
}

impl<R: Runtime> Clone for InvokeResolver<R> {
  fn clone(&self) -> Self {
    Self {
      window: self.window.clone(),
      responder: self.responder.clone(),
      callback: self.callback,
      error: self.error,
    }
  }
}

impl<R: Runtime> InvokeResolver<R> {
  pub(crate) fn new(
    window: Window<R>,
    responder: Arc<OwnedInvokeResponder<R>>,
    callback: CallbackFn,
    error: CallbackFn,
  ) -> Self {
    Self {
      window,
      responder,
      callback,
      error,
    }
  }

  /// Reply to the invoke promise with an async task.
  pub fn respond_async<T, F>(self, task: F)
  where
    T: IpcResponse,
    F: Future<Output = Result<T, InvokeError>> + Send + 'static,
  {
    crate::async_runtime::spawn(async move {
      Self::return_task(self.window, self.responder, task, self.callback, self.error).await;
    });
  }

  /// Reply to the invoke promise with an async task which is already serialized.
  pub fn respond_async_serialized<F>(self, task: F)
  where
    F: Future<Output = Result<InvokeBody, InvokeError>> + Send + 'static,
  {
    crate::async_runtime::spawn(async move {
      let response = match task.await {
        Ok(ok) => InvokeResponse::Ok(ok),
        Err(err) => InvokeResponse::Err(err),
      };
      Self::return_result(
        self.window,
        self.responder,
        response,
        self.callback,
        self.error,
      )
    });
  }

  /// Reply to the invoke promise with a serializable value.
  pub fn respond<T: IpcResponse>(self, value: Result<T, InvokeError>) {
    Self::return_result(
      self.window,
      self.responder,
      value.into(),
      self.callback,
      self.error,
    )
  }

  /// Resolve the invoke promise with a value.
  pub fn resolve<T: IpcResponse>(self, value: T) {
    self.respond(Ok(value))
  }

  /// Reject the invoke promise with a value.
  pub fn reject<T: Serialize>(self, value: T) {
    Self::return_result(
      self.window,
      self.responder,
      Result::<(), _>::Err(value).into(),
      self.callback,
      self.error,
    )
  }

  /// Reject the invoke promise with an [`InvokeError`].
  pub fn invoke_error(self, error: InvokeError) {
    Self::return_result(
      self.window,
      self.responder,
      error.into(),
      self.callback,
      self.error,
    )
  }

  /// Asynchronously executes the given task
  /// and evaluates its Result to the JS promise described by the `success_callback` and `error_callback` function names.
  ///
  /// If the Result `is_ok()`, the callback will be the `success_callback` function name and the argument will be the Ok value.
  /// If the Result `is_err()`, the callback will be the `error_callback` function name and the argument will be the Err value.
  pub async fn return_task<T, F>(
    window: Window<R>,
    responder: Arc<OwnedInvokeResponder<R>>,
    task: F,
    success_callback: CallbackFn,
    error_callback: CallbackFn,
  ) where
    T: IpcResponse,
    F: Future<Output = Result<T, InvokeError>> + Send + 'static,
  {
    let result = task.await;
    Self::return_closure(
      window,
      responder,
      || result,
      success_callback,
      error_callback,
    )
  }

  pub(crate) fn return_closure<T: IpcResponse, F: FnOnce() -> Result<T, InvokeError>>(
    window: Window<R>,
    responder: Arc<OwnedInvokeResponder<R>>,
    f: F,
    success_callback: CallbackFn,
    error_callback: CallbackFn,
  ) {
    Self::return_result(
      window,
      responder,
      f().into(),
      success_callback,
      error_callback,
    )
  }

  pub(crate) fn return_result(
    window: Window<R>,
    responder: Arc<OwnedInvokeResponder<R>>,
    response: InvokeResponse,
    success_callback: CallbackFn,
    error_callback: CallbackFn,
  ) {
    (responder)(window, response, success_callback, error_callback);
  }
}

/// An invoke message.
#[default_runtime(crate::Wry, wry)]
#[derive(Debug)]
pub struct InvokeMessage<R: Runtime> {
  /// The window that received the invoke message.
  pub(crate) window: Window<R>,
  /// Application managed state.
  pub(crate) state: Arc<StateManager>,
  /// The IPC command.
  pub(crate) command: String,
  /// The JSON argument passed on the invoke message.
  pub(crate) payload: InvokeBody,
}

impl<R: Runtime> Clone for InvokeMessage<R> {
  fn clone(&self) -> Self {
    Self {
      window: self.window.clone(),
      state: self.state.clone(),
      command: self.command.clone(),
      payload: self.payload.clone(),
    }
  }
}

impl<R: Runtime> InvokeMessage<R> {
  /// Create an new [`InvokeMessage`] from a payload send to a window.
  pub(crate) fn new(
    window: Window<R>,
    state: Arc<StateManager>,
    command: String,
    payload: InvokeBody,
  ) -> Self {
    Self {
      window,
      state,
      command,
      payload,
    }
  }

  /// The invoke command.
  #[inline(always)]
  pub fn command(&self) -> &str {
    &self.command
  }

  /// The window that received the invoke.
  #[inline(always)]
  pub fn window(&self) -> Window<R> {
    self.window.clone()
  }

  /// A reference to window that received the invoke.
  #[inline(always)]
  pub fn window_ref(&self) -> &Window<R> {
    &self.window
  }

  /// A reference to the payload the invoke received.
  #[inline(always)]
  pub fn payload(&self) -> &InvokeBody {
    &self.payload
  }

  /// The state manager associated with the application
  #[inline(always)]
  pub fn state(&self) -> Arc<StateManager> {
    self.state.clone()
  }

  /// A reference to the state manager associated with application.
  #[inline(always)]
  pub fn state_ref(&self) -> &StateManager {
    &self.state
  }
}

/// The `Callback` type is the return value of the `transformCallback` JavaScript function.
#[derive(Debug, Clone, Copy, Eq, PartialEq, Hash, Serialize, Deserialize)]
pub struct CallbackFn(pub usize);
