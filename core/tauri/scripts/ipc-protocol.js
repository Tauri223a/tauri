// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

(function () {
  const processIpcMessage = __RAW_process_ipc_message_fn__
  const osName = __TEMPLATE_os_name__
  const fetchChannelDataCommand = __TEMPLATE_fetch_channel_data_command__
  const useCustomProtocol = __TEMPLATE_use_custom_protocol__

  Object.defineProperty(window, '__TAURI_POST_MESSAGE__', {
    value: (message) => {
      const { cmd, callback, error, payload, options } = message
      if (!useCustomProtocol && (osName === 'linux' || osName === 'android') && cmd != fetchChannelDataCommand) {
        const { data } = processIpcMessage({ cmd, callback, error, ...payload })
        window.ipc.postMessage(data)
      } else {
        const { contentType, data } = processIpcMessage(payload)
        fetch(window.__TAURI__.convertFileSrc(cmd, 'ipc'), {
          method: 'POST',
          body: data,
          headers: {
            'Content-Type': contentType,
            'Tauri-Callback': callback,
            'Tauri-Error': error,
            ...options?.headers
          }
        }).then((response) => {
          const cb = response.ok ? callback : error
          // we need to split here because on Android the content-type gets duplicated
          switch ((response.headers.get('content-type') || '').split(',')[0]) {
            case 'application/json':
              return response.json().then((r) => [cb, r])
            case 'text/plain':
              return response.text().then((r) => [cb, r])
            default:
              return response.arrayBuffer().then((r) => [cb, r])
          }
        }).then(([cb, data]) => {
          if (window[`_${cb}`]) {
            window[`_${cb}`](data)
          } else {
            console.warn(`[TAURI] Couldn't find callback id {cb} in window. This might happen when the app is reloaded while Rust is running an asynchronous operation.`)
          }
        })
      }
    }
  })
})()
