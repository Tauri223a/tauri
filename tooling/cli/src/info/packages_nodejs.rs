// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

use super::SectionItem;
use super::{cross_command, env_nodejs::manager_version, VersionMetadata};
use colored::Colorize;
use serde::Deserialize;
use std::fmt::Display;
use std::path::{Path, PathBuf};

#[derive(Deserialize)]
struct YarnVersionInfo {
  data: Vec<String>,
}

#[derive(Debug, PartialEq, Eq, Clone, Copy)]
enum PackageManager {
  Npm,
  Pnpm,
  Yarn,
  YarnBerry,
  Deno,
  Bun,
}

impl Display for PackageManager {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    write!(
      f,
      "{}",
      match self {
        PackageManager::Npm => "npm",
        PackageManager::Pnpm => "pnpm",
        PackageManager::Yarn => "yarn",
        PackageManager::YarnBerry => "yarn berry",
        PackageManager::Bun => "deno",
        PackageManager::Bun => "bun",
      }
    )
  }
}

fn npm_latest_version(pm: &PackageManager, name: &str) -> crate::Result<Option<String>> {
  match pm {
    PackageManager::Yarn => {
      let mut cmd = cross_command("yarn");

      let output = cmd
        .arg("info")
        .arg(name)
        .args(["version", "--json"])
        .output()?;
      if output.status.success() {
        let stdout = String::from_utf8_lossy(&output.stdout);
        let info: YarnVersionInfo = serde_json::from_str(&stdout)?;
        Ok(Some(info.data.last().unwrap().to_string()))
      } else {
        Ok(None)
      }
    }
    PackageManager::YarnBerry => {
      let mut cmd = cross_command("yarn");

      let output = cmd
        .arg("npm")
        .arg("info")
        .arg(name)
        .args(["--fields", "version", "--json"])
        .output()?;
      if output.status.success() {
        let info: crate::PackageJson =
          serde_json::from_reader(std::io::Cursor::new(output.stdout)).unwrap();
        Ok(info.version)
      } else {
        Ok(None)
      }
    }
    // Bun and Deno don't support `info` command
    PackageManager::Npm | PackageManager::Bun | PackageManager::Deno => {
      let mut cmd = cross_command("npm");

      let output = cmd.arg("show").arg(name).arg("version").output()?;
      if output.status.success() {
        let stdout = String::from_utf8_lossy(&output.stdout);
        Ok(Some(stdout.replace('\n', "")))
      } else {
        Ok(None)
      }
    }
    PackageManager::Pnpm => {
      let mut cmd = cross_command("pnpm");

      let output = cmd.arg("info").arg(name).arg("version").output()?;
      if output.status.success() {
        let stdout = String::from_utf8_lossy(&output.stdout);
        Ok(Some(stdout.replace('\n', "")))
      } else {
        Ok(None)
      }
    }
  }
}

fn npm_package_version<P: AsRef<Path>>(
  pm: &PackageManager,
  name: &str,
  app_dir: P,
) -> crate::Result<Option<String>> {
  let (output, regex) = match pm {
    PackageManager::Yarn => (
      cross_command("yarn")
        .args(["list", "--pattern"])
        .arg(name)
        .args(["--depth", "0"])
        .current_dir(app_dir)
        .output()?,
      None,
    ),
    PackageManager::YarnBerry => (
      cross_command("yarn")
        .arg("info")
        .arg(name)
        .arg("--json")
        .current_dir(app_dir)
        .output()?,
      Some(regex::Regex::new("\"Version\":\"([\\da-zA-Z\\-\\.]+)\"").unwrap()),
    ),
    // Bun and Deno don't support `list` command
    PackageManager::Npm | PackageManager::Bun | PackageManager::Deno => (
      cross_command("npm")
        .arg("list")
        .arg(name)
        .args(["version", "--depth", "0"])
        .current_dir(app_dir)
        .output()?,
      None,
    ),
    PackageManager::Pnpm => (
      cross_command("pnpm")
        .arg("list")
        .arg(name)
        .args(["--parseable", "--depth", "0"])
        .current_dir(app_dir)
        .output()?,
      None,
    ),
  };
  if output.status.success() {
    let stdout = String::from_utf8_lossy(&output.stdout);
    let regex = regex.unwrap_or_else(|| regex::Regex::new("@(\\d[\\da-zA-Z\\-\\.]+)").unwrap());
    Ok(
      regex
        .captures_iter(&stdout)
        .last()
        .and_then(|cap| cap.get(1).map(|v| v.as_str().to_string())),
    )
  } else {
    Ok(None)
  }
}

fn get_package_manager<T: AsRef<str>>(app_dir_entries: &[T]) -> PackageManager {
  let mut found = Vec::new();

  for name in app_dir_entries {
    if name.as_ref() == "package-lock.json" {
      found.push(PackageManager::Npm);
    } else if name.as_ref() == "pnpm-lock.yaml" {
      found.push(PackageManager::Pnpm);
    } else if name.as_ref() == "yarn.lock" {
      found.push(PackageManager::Yarn);
    } else if name.as_ref() == "bun.lockb" {
      found.push(PackageManager::Bun);
    } else if name.as_ref() == "deno.lock" {
      found.push(PackageManager::Deno);
    }
  }

  if found.is_empty() {
    println!(
      "{}: no lock files found, defaulting to npm",
      "WARNING".yellow()
    );
    return PackageManager::Npm;
  }

  let pkg_manger = found[0];

  if found.len() > 1 {
    println!(
          "{}: Only one package manager should be used, but found {}.\n         Please remove unused package manager lock files, will use {} for now!",
          "WARNING".yellow(),
          found.iter().map(ToString::to_string).collect::<Vec<_>>().join(" and "),
          pkg_manger
        );
  }

  if pkg_manger == PackageManager::Yarn
    && manager_version("yarn")
      .map(|v| v.chars().next().map(|c| c > '1').unwrap_or_default())
      .unwrap_or(false)
  {
    PackageManager::YarnBerry
  } else {
    pkg_manger
  }
}

pub fn items(app_dir: Option<&PathBuf>, metadata: &VersionMetadata) -> Vec<SectionItem> {
  let mut package_manager = PackageManager::Npm;
  if let Some(app_dir) = &app_dir {
    let app_dir_entries = std::fs::read_dir(app_dir)
      .unwrap()
      .map(|e| e.unwrap().file_name().to_string_lossy().into_owned())
      .collect::<Vec<String>>();
    package_manager = get_package_manager(&app_dir_entries);
  }

  let mut items = Vec::new();
  if let Some(app_dir) = app_dir {
    for (package, version) in [
      ("@tauri-apps/api", None),
      ("@tauri-apps/cli", Some(metadata.js_cli.version.clone())),
    ] {
      let app_dir = app_dir.clone();
      let item = SectionItem::new().action(move || {
        let version = version.clone().unwrap_or_else(|| {
          npm_package_version(&package_manager, package, &app_dir)
            .unwrap_or_default()
            .unwrap_or_default()
        });
        let latest_ver = npm_latest_version(&package_manager, package)
          .unwrap_or_default()
          .unwrap_or_default();

        if version.is_empty() {
          format!("{} {}: not installed!", package, "".green())
        } else {
          format!(
            "{} {}: {}{}",
            package,
            "[NPM]".dimmed(),
            version,
            if !(version.is_empty() || latest_ver.is_empty()) {
              let version = semver::Version::parse(version.as_str()).unwrap();
              let target_version = semver::Version::parse(latest_ver.as_str()).unwrap();

              if version < target_version {
                format!(" ({}, latest: {})", "outdated".yellow(), latest_ver.green())
              } else {
                "".into()
              }
            } else {
              "".into()
            }
          )
        }
        .into()
      });

      items.push(item);
    }
  }

  items
}
