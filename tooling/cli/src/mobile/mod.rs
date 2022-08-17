// Copyright 2019-2021 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

use crate::helpers::{app_paths::tauri_dir, config::Config as TauriConfig};
use anyhow::{bail, Result};
#[cfg(target_os = "macos")]
use cargo_mobile::apple::config::{
  Metadata as AppleMetadata, Platform as ApplePlatform, Raw as RawAppleConfig,
};
use cargo_mobile::{
  android::config::{Metadata as AndroidMetadata, Raw as RawAndroidConfig},
  config::{app::Raw as RawAppConfig, metadata::Metadata, Config, Raw},
};
use serde::{Deserialize, Serialize};
use std::path::PathBuf;

pub mod android;
mod init;
#[cfg(target_os = "macos")]
pub mod ios;

#[derive(PartialEq, Eq)]
pub enum Target {
  Android,
  #[cfg(target_os = "macos")]
  Ios,
}

impl Target {
  fn ide_name(&self) -> &'static str {
    match self {
      Self::Android => "Android Studio",
      #[cfg(target_os = "macos")]
      Self::Ios => "Xcode",
    }
  }

  fn command_name(&self) -> &'static str {
    match self {
      Self::Android => "android",
      #[cfg(target_os = "macos")]
      Self::Ios => "ios",
    }
  }
}

#[derive(Debug, Default, Serialize, Deserialize)]
pub struct CliOptions {
  pub features: Option<Vec<String>>,
  pub no_default_features: Option<bool>,
}

fn options_path(bundle_identifier: &str, target: Target) -> PathBuf {
  let out_dir = dirs_next::cache_dir()
    .or_else(dirs_next::home_dir)
    .unwrap_or_else(std::env::temp_dir);
  let out_dir = out_dir.join(".tauri").join(bundle_identifier);
  let _ = std::fs::create_dir_all(&out_dir);
  out_dir
    .join("cli-options")
    .with_extension(target.command_name())
}

/// Writes CLI options to be used later on the Xcode and Android Studio build commands
pub fn write_options(
  options: CliOptions,
  bundle_identifier: &str,
  target: Target,
) -> crate::Result<()> {
  std::fs::write(
    options_path(bundle_identifier, target),
    &serde_json::to_string(&options)?,
  )?;
  Ok(())
}

fn read_options(config: &TauriConfig, target: Target) -> crate::Result<CliOptions> {
  let data = std::fs::read_to_string(options_path(&config.tauri.bundle.identifier, target))?;
  let options = serde_json::from_str(&data)?;
  Ok(options)
}

fn get_config(config: &TauriConfig) -> (Config, Metadata) {
  let mut s = config.tauri.bundle.identifier.rsplit('.');
  let app_name = s.next().unwrap_or("app").to_string();
  let mut domain = String::new();
  for w in s {
    domain.push_str(w);
    domain.push('.');
  }
  domain.pop();

  #[cfg(target_os = "macos")]
  let ios_options = read_options(config, Target::Ios).unwrap_or_default();
  let android_options = read_options(config, Target::Android).unwrap_or_default();

  let raw = Raw {
    app: RawAppConfig {
      name: app_name,
      stylized_name: config.package.product_name.clone(),
      domain,
      asset_dir: None,
      template_pack: None,
    },
    #[cfg(target_os = "macos")]
    apple: Some(RawAppleConfig {
      development_team: std::env::var("APPLE_DEVELOPMENT_TEAM")
        .ok()
        .or_else(|| config.tauri.ios.development_team.clone())
        .expect("you must set `tauri > iOS > developmentTeam` config value or the `APPLE_DEVELOPMENT_TEAM` environment variable"),
      project_dir: None,
      ios_no_default_features: ios_options.no_default_features,
      ios_features: ios_options.features.clone(),
      macos_no_default_features: None,
      macos_features: None,
      bundle_version: None,
      bundle_version_short: None,
      ios_version: None,
      macos_version: None,
      use_legacy_build_system: None,
      plist_pairs: None,
    }),
    android: Some(RawAndroidConfig {
      min_sdk_version: None,
      vulkan_validation: None,
      project_dir: None,
      no_default_features: android_options.no_default_features,
      features: android_options.features.clone(),
    }),
  };
  let config = Config::from_raw(tauri_dir(), raw).unwrap();

  let metadata = Metadata {
    #[cfg(target_os = "macos")]
    apple: AppleMetadata {
      supported: true,
      ios: ApplePlatform {
        no_default_features: ios_options.no_default_features.unwrap_or_default(),
        features: ios_options.features,
        frameworks: None,
        valid_archs: None,
        vendor_frameworks: None,
        vendor_sdks: None,
        asset_catalogs: None,
        pods: None,
        additional_targets: None,
        pre_build_scripts: None,
        post_compile_scripts: None,
        post_build_scripts: None,
        command_line_arguments: None,
      },
      macos: Default::default(),
    },
    android: AndroidMetadata {
      supported: true,
      no_default_features: android_options.no_default_features.unwrap_or_default(),
      features: android_options.features,
      app_sources: None,
      app_plugins: None,
      project_dependencies: None,
      app_dependencies: None,
      app_dependencies_platform: None,
      asset_packs: None,
    },
  };

  (config, metadata)
}

fn ensure_init(project_dir: PathBuf, target: Target) -> Result<()> {
  if !project_dir.exists() {
    bail!(
      "{} project directory {} doesn't exist. Please run `tauri {} init` and try again.",
      target.ide_name(),
      project_dir.display(),
      target.command_name(),
    )
  } else {
    Ok(())
  }
}
