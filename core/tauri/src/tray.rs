// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

//! Tray icon types and utility functions

use crate::app::{GlobalMenuEventListener, GlobalTrayIconEventListener};
use crate::menu::MenuEvent;
use crate::{menu::ContextMenu, runtime::tray as tray_icon};
use crate::{run_main_thread, AppHandle, Icon, Manager, Runtime};
use std::path::{Path, PathBuf};
pub use tray_icon::{ClickType, Rectangle, TrayIconEvent};

// TODO(muda-migration): figure out js events

/// Attributes to use when creating a tray icon.
#[derive(Default)]
pub struct TrayIconAttributes<R: Runtime> {
  /// Tray icon tooltip
  ///
  /// ## Platform-specific:
  ///
  /// - **Linux:** Unsupported.
  tooltip: Option<String>,

  /// Tray menu
  ///
  /// ## Platform-specific:
  ///
  /// - **Linux**: once a menu is set, it cannot be removed.
  menu: Option<Box<dyn crate::runtime::menu::ContextMenu>>,

  /// Set a handler for menu events
  on_menu_event: Option<GlobalMenuEventListener<AppHandle<R>>>,

  /// Set a handler for tray icon events
  on_tray_event: Option<GlobalTrayIconEventListener<TrayIcon<R>>>,

  /// Tray icon
  ///
  /// ## Platform-specific:
  ///
  /// - **Linux:** Sometimes the icon won't be visible unless a menu is set.
  ///     Setting an empty [`Menu`](crate::menu::Menu) is enough.
  icon: Option<Icon>,

  /// Tray icon temp dir path. **Linux only**.
  temp_dir_path: Option<PathBuf>,

  /// Use the icon as a [template](https://developer.apple.com/documentation/appkit/nsimage/1520017-template?language=objc). **macOS only**.
  icon_is_template: bool,

  /// Whether to show the tray menu on left click or not, default is `true`. **macOS only**.
  menu_on_left_click: bool,

  /// Tray icon title.
  ///
  /// ## Platform-specific
  ///
  /// - **Linux:** The title will not be shown unless there is an icon
  /// as well.  The title is useful for numerical and other frequently
  /// updated information.  In general, it shouldn't be shown unless a
  /// user requests it as it can take up a significant amount of space
  /// on the user's panel.  This may not be shown in all visualizations.
  /// - **Windows:** Unsupported.
  title: Option<String>,
}

impl<R: Runtime> From<TrayIconAttributes<R>> for tray_icon::TrayIconAttributes {
  fn from(value: TrayIconAttributes<R>) -> Self {
    Self {
      tooltip: value.tooltip,
      menu: value.menu,
      icon: value.icon.and_then(|i| {
        i.try_into()
          .ok()
          .and_then(|i: crate::runtime::Icon| i.try_into().ok())
      }),
      temp_dir_path: value.temp_dir_path,
      icon_is_template: value.icon_is_template,
      menu_on_left_click: value.menu_on_left_click,
      title: value.title,
    }
  }
}

/// [`TrayIcon`] builder struct and associated methods.
#[derive(Default)]
pub struct TrayIconBuilder<R: Runtime> {
  on_menu_event: Option<GlobalMenuEventListener<AppHandle<R>>>,
  on_tray_event: Option<GlobalTrayIconEventListener<TrayIcon<R>>>,
  inner: tray_icon::TrayIconBuilder,
}

impl<R: Runtime> TrayIconBuilder<R> {
  /// Creates a new [`TrayIconBuilder`] with default [`TrayIconAttributes`].
  ///
  /// See [`TrayIcon::new`] for more info.
  pub fn new() -> Self {
    Self {
      inner: tray_icon::TrayIconBuilder::new(),
      on_menu_event: None,
      on_tray_event: None,
    }
  }

  /// Sets the unique id to build the tray icon with.
  pub fn with_id(id: u32) -> Self {
    let mut builder = Self::new();
    builder.inner = builder.inner.with_id(id);
    builder
  }

  /// Set the a menu for this tray icon.
  ///
  /// ## Platform-specific:
  ///
  /// - **Linux**: once a menu is set, it cannot be removed or replaced but you can change its content.
  pub fn menu<M: ContextMenu>(mut self, menu: &M) -> Self {
    self.inner = self.inner.with_menu(menu.inner_owned());
    self
  }

  /// Set an icon for this tray icon.
  ///
  /// ## Platform-specific:
  ///
  /// - **Linux:** Sometimes the icon won't be visible unless a menu is set.
  /// Setting an empty [`Menu`](crate::menu::Menu) is enough.
  pub fn icon(mut self, icon: Icon) -> Self {
    let icon = icon
      .try_into()
      .ok()
      .and_then(|i: crate::runtime::Icon| i.try_into().ok());
    if let Some(icon) = icon {
      self.inner = self.inner.with_icon(icon);
    }
    self
  }

  /// Set a tooltip for this tray icon.
  ///
  /// ## Platform-specific:
  ///
  /// - **Linux:** Unsupported.
  pub fn tooltip<S: AsRef<str>>(mut self, s: S) -> Self {
    self.inner = self.inner.with_tooltip(s);
    self
  }

  /// Set the tray icon title.
  ///
  /// ## Platform-specific
  ///
  /// - **Linux:** The title will not be shown unless there is an icon
  /// as well.  The title is useful for numerical and other frequently
  /// updated information.  In general, it shouldn't be shown unless a
  /// user requests it as it can take up a significant amount of space
  /// on the user's panel.  This may not be shown in all visualizations.
  /// - **Windows:** Unsupported.
  pub fn title<S: AsRef<str>>(mut self, title: S) -> Self {
    self.inner = self.inner.with_title(title);
    self
  }

  /// Set tray icon temp dir path. **Linux only**.
  ///
  /// On Linux, we need to write the icon to the disk and usually it will
  /// be `$XDG_RUNTIME_DIR/tray-icon` or `$TEMP/tray-icon`.
  pub fn temp_dir_path<P: AsRef<Path>>(mut self, s: P) -> Self {
    self.inner = self.inner.with_temp_dir_path(s);
    self
  }

  /// Use the icon as a [template](https://developer.apple.com/documentation/appkit/nsimage/1520017-template?language=objc). **macOS only**.
  pub fn icon_as_template(mut self, is_template: bool) -> Self {
    self.inner = self.inner.with_icon_as_template(is_template);
    self
  }

  /// Whether to show the tray menu on left click or not, default is `true`. **macOS only**.
  pub fn menu_on_left_click(mut self, enable: bool) -> Self {
    self.inner = self.inner.with_menu_on_left_click(enable);
    self
  }

  /// Set a handler for menu events.
  ///
  /// Note that this handler is called for any menu event,
  /// whether it is coming from this window, another window or from the tray icon menu.
  pub fn on_menu_event<
    F: Fn(&AppHandle<R>, MenuEvent) -> crate::Result<()> + Sync + Send + 'static,
  >(
    mut self,
    f: F,
  ) -> Self {
    self.on_menu_event.replace(Box::new(f));
    self
  }

  /// Set a handler for this tray icon events.
  pub fn on_tray_event<
    F: Fn(&TrayIcon<R>, TrayIconEvent) -> crate::Result<()> + Sync + Send + 'static,
  >(
    mut self,
    f: F,
  ) -> Self {
    self.on_tray_event.replace(Box::new(f));
    self
  }

  /// Access the unique id that will be assigned to the tray icon
  /// this builder will create.
  pub fn id(&self) -> u32 {
    self.inner.id()
  }

  /// Builds and adds a new [`TrayIcon`] to the system tray.
  pub fn build<M: Manager<R>>(self, manager: &M) -> crate::Result<TrayIcon<R>> {
    let id = self.id();
    let inner = self.inner.build()?;
    let icon = TrayIcon {
      id,
      inner,
      app_handle: manager.app_handle(),
    };

    icon.register(&icon.app_handle, self.on_menu_event, self.on_tray_event);

    Ok(icon)
  }
}

/// Tray icon struct and associated methods.
///
/// This type is reference-counted and the icon is removed when the last instance is dropped.
pub struct TrayIcon<R: Runtime> {
  id: u32,
  inner: tray_icon::TrayIcon,
  app_handle: AppHandle<R>,
}

impl<R: Runtime> Clone for TrayIcon<R> {
  fn clone(&self) -> Self {
    Self {
      id: self.id,
      inner: self.inner.clone(),
      app_handle: self.app_handle.clone(),
    }
  }
}

/// # Safety
///
/// We make sure it always runs on the main thread.
unsafe impl<R: Runtime> Sync for TrayIcon<R> {}
unsafe impl<R: Runtime> Send for TrayIcon<R> {}

impl<R: Runtime> TrayIcon<R> {
  /// Builds and adds a new tray icon to the system tray.
  ///
  /// ## Platform-specific:
  ///
  /// - **Linux:** Sometimes the icon won't be visible unless a menu is set.
  /// Setting an empty [`Menu`](crate::menu::Menu) is enough.
  pub fn new<M: Manager<R>>(manager: &M, mut attrs: TrayIconAttributes<R>) -> crate::Result<Self> {
    let on_menu_event = attrs.on_menu_event.take();
    let on_tray_event = attrs.on_tray_event.take();

    let inner = tray_icon::TrayIcon::new(attrs.into())?;
    let icon = Self {
      id: inner.id(),
      inner,
      app_handle: manager.app_handle(),
    };

    icon.register(&icon.app_handle, on_menu_event, on_tray_event);

    Ok(icon)
  }

  /// Builds and adds a new tray icon to the system tray with the specified Id.
  ///
  /// See [`TrayIcon::new`] for more info.
  pub fn with_id(
    app_handle: &AppHandle<R>,
    mut attrs: TrayIconAttributes<R>,
    id: u32,
  ) -> crate::Result<Self> {
    let on_menu_event = attrs.on_menu_event.take();
    let on_tray_event = attrs.on_tray_event.take();

    let inner = tray_icon::TrayIcon::with_id(attrs.into(), id)?;
    let icon = Self {
      id,
      inner,
      app_handle: app_handle.clone(),
    };

    icon.register(app_handle, on_menu_event, on_tray_event);

    Ok(icon)
  }

  fn register(
    &self,
    app_handle: &AppHandle<R>,
    on_menu_event: Option<GlobalMenuEventListener<AppHandle<R>>>,
    on_tray_event: Option<GlobalTrayIconEventListener<TrayIcon<R>>>,
  ) {
    if let Some(handler) = on_menu_event {
      app_handle
        .manager
        .inner
        .menu_event_listeners
        .lock()
        .unwrap()
        .push(handler);
    }

    if let Some(handler) = on_tray_event {
      app_handle
        .manager
        .inner
        .tray_event_listeners
        .lock()
        .unwrap()
        .insert(self.id, handler);
    }

    app_handle
      .manager
      .inner
      .tray_icons
      .lock()
      .unwrap()
      .push(self.clone());
  }

  /// The application handle associated with this type.
  pub fn app_handle(&self) -> AppHandle<R> {
    self.app_handle.clone()
  }

  /// Register a handler for menu events.
  ///
  /// Note that this handler is called for any menu event,
  /// whether it is coming from this window, another window or from the tray icon menu.
  pub fn on_menu_event<
    F: Fn(&AppHandle<R>, MenuEvent) -> crate::Result<()> + Sync + Send + 'static,
  >(
    &self,
    f: F,
  ) {
    self
      .app_handle
      .manager
      .inner
      .menu_event_listeners
      .lock()
      .unwrap()
      .push(Box::new(f));
  }

  /// Register a handler for this tray icon events.
  pub fn on_tray_event<
    F: Fn(&TrayIcon<R>, TrayIconEvent) -> crate::Result<()> + Sync + Send + 'static,
  >(
    &self,
    f: F,
  ) {
    self
      .app_handle
      .manager
      .inner
      .tray_event_listeners
      .lock()
      .unwrap()
      .insert(self.id, Box::new(f));
  }

  /// Returns the id associated with this tray icon.
  pub fn id(&self) -> u32 {
    self.id
  }

  /// Set new tray icon. If `None` is provided, it will remove the icon.
  pub fn set_icon(&self, icon: Option<Icon>) -> crate::Result<()> {
    let icon = icon.and_then(|i| {
      i.try_into()
        .ok()
        .and_then(|i: crate::runtime::Icon| i.try_into().ok())
    });
    run_main_thread!(self, |self_: Self| self_.inner.set_icon(icon))?.map_err(Into::into)
  }

  /// Set new tray menu.
  ///
  /// ## Platform-specific:
  ///
  /// - **Linux**: once a menu is set it cannot be removed so `None` has no effect
  pub fn set_menu<M: ContextMenu + 'static>(&self, menu: Option<M>) -> crate::Result<()> {
    run_main_thread!(self, |self_: Self| self_
      .inner
      .set_menu(menu.map(|m| m.inner_owned())))
  }

  /// Sets the tooltip for this tray icon.
  ///
  /// ## Platform-specific:
  ///
  /// - **Linux:** Unsupported
  pub fn set_tooltip<S: AsRef<str>>(&self, tooltip: Option<S>) -> crate::Result<()> {
    let s = tooltip.map(|s| s.as_ref().to_string());
    run_main_thread!(self, |self_: Self| self_.inner.set_tooltip(s))?.map_err(Into::into)
  }

  /// Sets the tooltip for this tray icon.
  ///
  /// ## Platform-specific:
  ///
  /// - **Linux:** The title will not be shown unless there is an icon
  /// as well.  The title is useful for numerical and other frequently
  /// updated information.  In general, it shouldn't be shown unless a
  /// user requests it as it can take up a significant amount of space
  /// on the user's panel.  This may not be shown in all visualizations.
  /// - **Windows:** Unsupported
  pub fn set_title<S: AsRef<str>>(&self, title: Option<S>) -> crate::Result<()> {
    let s = title.map(|s| s.as_ref().to_string());
    run_main_thread!(self, |self_: Self| self_.inner.set_title(s))
  }

  /// Show or hide this tray icon
  pub fn set_visible(&self, visible: bool) -> crate::Result<()> {
    run_main_thread!(self, |self_: Self| self_.inner.set_visible(visible))?.map_err(Into::into)
  }

  /// Sets the tray icon temp dir path. **Linux only**.
  ///
  /// On Linux, we need to write the icon to the disk and usually it will
  /// be `$XDG_RUNTIME_DIR/tray-icon` or `$TEMP/tray-icon`.
  pub fn set_temp_dir_path<P: AsRef<Path>>(&self, path: Option<P>) -> crate::Result<()> {
    #[allow(unused)]
    let p = path.map(|p| p.as_ref().to_path_buf());
    #[cfg(target_os = "linux")]
    run_main_thread!(self, |self_: Self| self_.inner.set_temp_dir_path(p))?;
    Ok(())
  }

  /// Set the current icon as a [template](https://developer.apple.com/documentation/appkit/nsimage/1520017-template?language=objc). **macOS only**.
  pub fn set_icon_as_template(&self, #[allow(unused)] is_template: bool) -> crate::Result<()> {
    #[cfg(target_os = "macos")]
    run_main_thread!(self, |self_: Self| self_
      .inner
      .set_icon_as_template(is_template))?;
    Ok(())
  }

  /// Disable or enable showing the tray menu on left click. **macOS only**.
  pub fn set_show_menu_on_left_click(&self, #[allow(unused)] enable: bool) -> crate::Result<()> {
    #[cfg(target_os = "macos")]
    run_main_thread!(self, |self_: Self| self_
      .inner
      .set_show_menu_on_left_click(enable))?;
    Ok(())
  }
}
