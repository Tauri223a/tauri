use crate::WebviewDispatcher;
use std::path::PathBuf;

#[allow(clippy::option_env_unwrap)]
pub async fn load<W: WebviewDispatcher + 'static>(
  webview: &mut W,
  asset: String,
  asset_type: String,
  callback: String,
  error: String,
) {
  let mut webview_ = webview.clone();
  crate::execute_promise(
    webview,
    async move {
      let mut path = PathBuf::from(if asset.starts_with('/') {
        asset.replacen("/", "", 1)
      } else {
        asset.clone()
      });
      let mut read_asset;
      loop {
        read_asset = crate::assets::ASSETS.get(&format!(
          "{}/{}",
          option_env!("TAURI_DIST_DIR")
            .expect("tauri apps should be built with the TAURI_DIST_DIR environment variable"),
          path.to_string_lossy()
        ));
        if read_asset.is_err() {
          match path.iter().next() {
            Some(component) => {
              let first_component = component.to_str().expect("failed to read path component");
              path = PathBuf::from(path.to_string_lossy().replacen(
                format!("{}/", first_component).as_str(),
                "",
                1,
              ));
            }
            None => {
              return Err(anyhow::anyhow!("Asset '{}' not found", asset));
            }
          }
        } else {
          break;
        }
      }

      if asset_type == "image" {
        let mime_type = if asset.ends_with("gif") {
          "gif"
        } else if asset.ends_with("apng") {
          "apng"
        } else if asset.ends_with("png") {
          "png"
        } else if asset.ends_with("avif") {
          "avif"
        } else if asset.ends_with("webp") {
          "webp"
        } else if asset.ends_with("svg") {
          "svg+xml"
        } else {
          "jpeg"
        };
        Ok(format!(
          r#"data:image/{};base64,{}"#,
          mime_type,
          base64::encode(&read_asset.expect("Failed to read asset type").into_owned())
        ))
      } else {
        let asset_bytes = read_asset.expect("Failed to read asset type");
        let asset_str =
          std::str::from_utf8(&asset_bytes).expect("failed to convert asset bytes to u8 slice");
        if asset_type == "stylesheet" {
          webview_.eval(&format!(
            r#"
                (function (content) {{
                  var css = document.createElement('style')
                  css.type = 'text/css'
                  if (css.styleSheet)
                      css.styleSheet.cssText = content
                  else
                      css.appendChild(document.createTextNode(content))
                  document.getElementsByTagName("head")[0].appendChild(css);
                }})(`{css}`)
              "#,
            // Escape octal sequences, which aren't allowed in template literals
            css = asset_str.replace("\\", "\\\\").as_str()
          ));
        } else {
          webview_.eval(asset_str);
        }
        Ok("Asset loaded successfully".to_string())
      }
    },
    callback,
    error,
  )
  .await;
}
