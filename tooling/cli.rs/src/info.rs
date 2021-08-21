// Copyright 2019-2021 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

use crate::helpers::{
  app_paths::{app_dir, tauri_dir},
  config::get as get_config,
  framework::infer_from_package_json as infer_framework,
};
use serde::Deserialize;
use vfs::{PhysicalFS, VfsPath};

use std::{
  collections::HashMap,
  fs::{read_dir, read_to_string},
  panic,
  path::{Path, PathBuf},
  process::Command,
};

#[derive(Deserialize)]
struct YarnVersionInfo {
  data: Vec<String>,
}

#[derive(Clone, Deserialize)]
struct CargoLockPackage {
  name: String,
  version: String,
}

#[derive(Deserialize)]
struct CargoLock {
  package: Vec<CargoLockPackage>,
}

#[derive(Deserialize)]
struct JsCliVersionMetadata {
  version: String,
  node: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct VersionMetadata {
  #[serde(rename = "cli.js")]
  js_cli: JsCliVersionMetadata,
}

#[derive(Clone, Deserialize)]
struct CargoManifestDependencyPackage {
  version: Option<String>,
  path: Option<PathBuf>,
  #[serde(default)]
  features: Vec<String>,
}

#[derive(Clone, Deserialize)]
#[serde(untagged)]
enum CargoManifestDependency {
  Version(String),
  Package(CargoManifestDependencyPackage),
}

#[derive(Deserialize)]
struct CargoManifestPackage {
  version: String,
}

#[derive(Deserialize)]
struct CargoManifest {
  package: CargoManifestPackage,
  dependencies: HashMap<String, CargoManifestDependency>,
}

enum PackageManager {
  Npm,
  Pnpm,
  Yarn,
}

#[derive(Default)]
pub struct Info;

fn crate_latest_version(name: &str) -> Option<String> {
  let url = format!("https://docs.rs/crate/{}/", name);
  match ureq::get(&url).call() {
    Ok(response) => match (response.status(), response.header("location")) {
      (302, Some(location)) => Some(location.replace(&url, "")),
      _ => None,
    },
    Err(_) => None,
  }
}

fn npm_latest_version(pm: &PackageManager, name: &str) -> crate::Result<Option<String>> {
  let mut cmd;
  match pm {
    PackageManager::Yarn => {
      #[cfg(target_os = "windows")]
      {
        cmd = Command::new("cmd");
        cmd.arg("/c").arg("yarn");
      }

      #[cfg(not(target_os = "windows"))]
      {
        cmd = Command::new("yarn")
      }

      let output = cmd
        .arg("info")
        .arg(name)
        .args(&["version", "--json"])
        .output()?;
      if output.status.success() {
        let stdout = String::from_utf8_lossy(&output.stdout);
        let info: YarnVersionInfo = serde_json::from_str(&stdout)?;
        Ok(Some(info.data.last().unwrap().to_string()))
      } else {
        Ok(None)
      }
    }
    PackageManager::Npm => {
      #[cfg(target_os = "windows")]
      {
        cmd = Command::new("cmd");
        cmd.arg("/c").arg("npm");
      }

      #[cfg(not(target_os = "windows"))]
      {
        cmd = Command::new("npm")
      }

      let output = cmd.arg("show").arg(name).arg("version").output()?;
      if output.status.success() {
        let stdout = String::from_utf8_lossy(&output.stdout);
        Ok(Some(stdout.replace("\n", "")))
      } else {
        Ok(None)
      }
    }
    PackageManager::Pnpm => {
      #[cfg(target_os = "windows")]
      {
        cmd = Command::new("cmd");
        cmd.arg("/c").arg("pnpm");
      }

      #[cfg(not(target_os = "windows"))]
      {
        cmd = Command::new("pnpm")
      }

      let output = cmd.arg("info").arg(name).arg("version").output()?;
      if output.status.success() {
        let stdout = String::from_utf8_lossy(&output.stdout);
        Ok(Some(stdout.replace("\n", "")))
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
  let mut cmd;
  let output = match pm {
    PackageManager::Yarn => {
      #[cfg(target_os = "windows")]
      {
        cmd = Command::new("cmd");
        cmd.arg("/c").arg("yarn");
      }

      #[cfg(not(target_os = "windows"))]
      {
        cmd = Command::new("yarn")
      }

      cmd
        .args(&["list", "--pattern"])
        .arg(name)
        .args(&["--depth", "0"])
        .current_dir(app_dir)
        .output()?
    }
    PackageManager::Npm => {
      #[cfg(target_os = "windows")]
      {
        cmd = Command::new("cmd");
        cmd.arg("/c").arg("npm");
      }

      #[cfg(not(target_os = "windows"))]
      {
        cmd = Command::new("npm")
      }

      cmd
        .arg("list")
        .arg(name)
        .args(&["version", "--depth", "0"])
        .current_dir(app_dir)
        .output()?
    }
    PackageManager::Pnpm => {
      #[cfg(target_os = "windows")]
      {
        cmd = Command::new("cmd");
        cmd.arg("/c").arg("npm");
      }

      #[cfg(not(target_os = "windows"))]
      {
        cmd = Command::new("pnpm")
      }

      cmd
        .arg("list")
        .arg(name)
        .args(&["--parseable", "--depth", "0"])
        .current_dir(app_dir)
        .output()?
    }
  };
  if output.status.success() {
    let stdout = String::from_utf8_lossy(&output.stdout);
    let regex = regex::Regex::new("@([\\da-zA-Z\\-\\.]+)").unwrap();
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

fn get_version(command: &str, args: &[&str]) -> crate::Result<Option<String>> {
  let mut cmd;
  #[cfg(target_os = "windows")]
  {
    cmd = Command::new("cmd");
    cmd.arg("/c").arg(command);
  }

  #[cfg(not(target_os = "windows"))]
  {
    cmd = Command::new(command)
  }

  let output = cmd.args(args).arg("--version").output()?;
  let version = if output.status.success() {
    Some(
      String::from_utf8_lossy(&output.stdout)
        .replace("\n", "")
        .replace("\r", ""),
    )
  } else {
    None
  };
  Ok(version)
}

#[cfg(windows)]
fn webview2_version() -> crate::Result<Option<String>> {
  let output = Command::new("powershell")
    .args(&["-NoProfile", "-Command"])
    .arg("Get-ItemProperty -Path 'HKLM:\\SOFTWARE\\WOW6432Node\\Microsoft\\EdgeUpdate\\Clients\\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}' | ForEach-Object {$_.pv}")
    .output()?;
  let version = if output.status.success() {
    Some(String::from_utf8_lossy(&output.stdout).replace("\n", ""))
  } else {
    // check 32bit installation
    let output = Command::new("powershell")
      .args(&["-NoProfile", "-Command"])
      .arg("Get-ItemProperty -Path 'HKLM:\\SOFTWARE\\Microsoft\\EdgeUpdate\\Clients\\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}' | ForEach-Object {$_.pv}")
      .output()?;
    if output.status.success() {
      Some(String::from_utf8_lossy(&output.stdout).replace("\n", ""))
    } else {
      None
    }
  };
  Ok(version)
}

struct InfoBlock {
  section: bool,
  key: &'static str,
  value: Option<String>,
  suffix: Option<String>,
}

impl InfoBlock {
  fn new(key: &'static str) -> Self {
    Self {
      section: false,
      key,
      value: None,
      suffix: None,
    }
  }

  fn section(mut self) -> Self {
    self.section = true;
    self
  }

  fn value<V: Into<Option<String>>>(mut self, value: V) -> Self {
    self.value = value.into();
    self
  }

  fn suffix<S: Into<Option<String>>>(mut self, suffix: S) -> Self {
    self.suffix = suffix.into();
    self
  }

  fn display(&self) {
    if self.section {
      println!();
    }
    print!("{}", self.key);
    if let Some(value) = &self.value {
      print!(" - {}", value);
    }
    if let Some(suffix) = &self.suffix {
      print!("{}", suffix);
    }
    println!();
  }
}

struct VersionBlock {
  section: bool,
  key: &'static str,
  version: Option<String>,
  target_version: Option<String>,
}

impl VersionBlock {
  fn new<V: Into<Option<String>>>(key: &'static str, version: V) -> Self {
    Self {
      section: false,
      key,
      version: version.into(),
      target_version: None,
    }
  }

  fn target_version<V: Into<Option<String>>>(mut self, version: V) -> Self {
    self.target_version = version.into();
    self
  }

  fn display(&self) {
    if self.section {
      println!();
    }
    print!("{}", self.key);
    if let Some(version) = &self.version {
      print!(" - {}", version);
    } else {
      print!(" - Not installed");
    }
    if let (Some(version), Some(target_version)) = (&self.version, &self.target_version) {
      let version = semver::Version::parse(version).unwrap();
      let target_version = semver::Version::parse(target_version).unwrap();
      if version < target_version {
        print!(" (outdated, latest: {})", target_version);
      }
    }
    println!();
  }
}

impl Info {
  pub fn new() -> Self {
    Default::default()
  }

  pub fn run(self) -> crate::Result<()> {
    let os_info = os_info::get();
    InfoBlock {
      section: true,
      key: "Operating System",
      value: Some(format!(
        "{}, version {} {:?}",
        os_info.os_type(),
        os_info.version(),
        os_info.bitness()
      )),
      suffix: None,
    }
    .display();

    #[cfg(windows)]
    VersionBlock::new("Webview2", webview2_version().unwrap_or_default()).display();

    let hook = panic::take_hook();
    panic::set_hook(Box::new(|_info| {
      // do nothing
    }));
    let app_dir = panic::catch_unwind(app_dir).map(Some).unwrap_or_default();
    panic::set_hook(hook);

    let mut package_manager = PackageManager::Npm;
    if let Some(dir) = &app_dir {
      let vs_app_dir: VfsPath = PhysicalFS::new(dir.to_path_buf()).into();
      package_manager = get_package_manager(&vs_app_dir)?;
    }

    if let Some(node_version) = get_version("node", &[]).unwrap_or_default() {
      InfoBlock::new("Node.js environment").section().display();
      let metadata = serde_json::from_str::<VersionMetadata>(include_str!("../metadata.json"))?;
      VersionBlock::new(
        "  Node.js",
        node_version.chars().skip(1).collect::<String>(),
      )
      .target_version(metadata.js_cli.node.replace(">= ", ""))
      .display();

      VersionBlock::new("  @tauri-apps/cli", metadata.js_cli.version)
        .target_version(npm_latest_version(&package_manager, "@tauri-apps/cli").unwrap_or_default())
        .display();
      if let Some(app_dir) = &app_dir {
        VersionBlock::new(
          "  @tauri-apps/api",
          npm_package_version(&package_manager, "@tauri-apps/api", app_dir).unwrap_or_default(),
        )
        .target_version(npm_latest_version(&package_manager, "@tauri-apps/api").unwrap_or_default())
        .display();
      }

      InfoBlock::new("Global packages").section().display();

      VersionBlock::new("  npm", get_version("npm", &[]).unwrap_or_default()).display();
      VersionBlock::new("  pnpm", get_version("pnpm", &[]).unwrap_or_default()).display();
      VersionBlock::new("  yarn", get_version("yarn", &[]).unwrap_or_default()).display();
    }

    InfoBlock::new("Rust environment").section().display();
    VersionBlock::new(
      "  rustc",
      get_version("rustc", &[]).unwrap_or_default().map(|v| {
        let mut s = v.split(' ');
        s.next();
        s.next().unwrap().to_string()
      }),
    )
    .display();
    VersionBlock::new(
      "  cargo",
      get_version("cargo", &[]).unwrap_or_default().map(|v| {
        let mut s = v.split(' ');
        s.next();
        s.next().unwrap().to_string()
      }),
    )
    .display();

    if let Some(app_dir) = app_dir {
      InfoBlock::new("App directory structure")
        .section()
        .display();
      for entry in read_dir(app_dir)? {
        let entry = entry?;
        if entry.path().is_dir() {
          println!("/{}", entry.path().file_name().unwrap().to_string_lossy());
        }
      }

      InfoBlock::new("App").section().display();
      let tauri_dir = tauri_dir();
      let manifest: Option<CargoManifest> =
        if let Ok(manifest_contents) = read_to_string(tauri_dir.join("Cargo.toml")) {
          toml::from_str(&manifest_contents).ok()
        } else {
          None
        };
      let lock: Option<CargoLock> =
        if let Ok(lock_contents) = read_to_string(tauri_dir.join("Cargo.lock")) {
          toml::from_str(&lock_contents).ok()
        } else {
          None
        };
      let tauri_lock_packages: Vec<CargoLockPackage> = lock
        .as_ref()
        .map(|lock| {
          lock
            .package
            .iter()
            .filter(|p| p.name == "tauri")
            .cloned()
            .collect()
        })
        .unwrap_or_default();
      let (tauri_version_string, found_tauri_versions) =
        match (&manifest, &lock, tauri_lock_packages.len()) {
          (Some(_manifest), Some(_lock), 1) => {
            let tauri_lock_package = tauri_lock_packages.first().unwrap();
            (
              tauri_lock_package.version.clone(),
              vec![tauri_lock_package.version.clone()],
            )
          }
          (None, Some(_lock), 1) => {
            let tauri_lock_package = tauri_lock_packages.first().unwrap();
            (
              format!("{} (no manifest)", tauri_lock_package.version),
              vec![tauri_lock_package.version.clone()],
            )
          }
          _ => {
            let mut found_tauri_versions = Vec::new();
            let manifest_version = match manifest.and_then(|m| m.dependencies.get("tauri").cloned())
            {
              Some(tauri) => match tauri {
                CargoManifestDependency::Version(v) => {
                  found_tauri_versions.push(v.clone());
                  v
                }
                CargoManifestDependency::Package(p) => {
                  if let Some(v) = p.version {
                    found_tauri_versions.push(v.clone());
                    v
                  } else if let Some(p) = p.path {
                    let manifest_path = tauri_dir.join(&p).join("Cargo.toml");
                    let v = match read_to_string(&manifest_path)
                      .map_err(|_| ())
                      .and_then(|m| toml::from_str::<CargoManifest>(&m).map_err(|_| ()))
                    {
                      Ok(manifest) => manifest.package.version,
                      Err(_) => "unknown version".to_string(),
                    };
                    format!("path:{:?} [{}]", p, v)
                  } else {
                    "unknown manifest".to_string()
                  }
                }
              },
              None => "no manifest".to_string(),
            };

            let lock_version = match (lock, tauri_lock_packages.is_empty()) {
              (Some(_lock), true) => tauri_lock_packages
                .iter()
                .map(|p| p.version.clone())
                .collect::<Vec<String>>()
                .join(", "),
              (Some(_lock), false) => "unknown lockfile".to_string(),
              _ => "no lockfile".to_string(),
            };

            (
              format!("{} ({})", manifest_version, lock_version),
              found_tauri_versions,
            )
          }
        };

      let tauri_version = found_tauri_versions
        .into_iter()
        .map(|v| semver::Version::parse(&v).unwrap())
        .max();
      let suffix = match (tauri_version, crate_latest_version("tauri")) {
        (Some(version), Some(target_version)) => {
          let target_version = semver::Version::parse(&target_version).unwrap();
          if version < target_version {
            Some(format!(" (outdated, latest: {})", target_version))
          } else {
            None
          }
        }
        _ => None,
      };
      InfoBlock::new("  tauri.rs")
        .value(tauri_version_string)
        .suffix(suffix)
        .display();

      if let Ok(config) = get_config(None) {
        let config_guard = config.lock().unwrap();
        let config = config_guard.as_ref().unwrap();
        InfoBlock::new("  build-type")
          .value(if config.tauri.bundle.active {
            "bundle".to_string()
          } else {
            "build".to_string()
          })
          .display();
        InfoBlock::new("  CSP")
          .value(if let Some(security) = &config.tauri.security {
            security.csp.clone().unwrap_or_else(|| "unset".to_string())
          } else {
            "unset".to_string()
          })
          .display();
        InfoBlock::new("  distDir")
          .value(config.build.dist_dir.to_string())
          .display();
        InfoBlock::new("  devPath")
          .value(config.build.dev_path.to_string())
          .display();
      }
      if let Ok(package_json) = read_to_string(app_dir.join("package.json")) {
        let (framework, bundler) = infer_framework(&package_json);
        if let Some(framework) = framework {
          InfoBlock::new("  framework")
            .value(framework.to_string())
            .display();
        }
        if let Some(bundler) = bundler {
          InfoBlock::new("  bundler")
            .value(bundler.to_string())
            .display();
        }
      } else {
        println!("package.json not found");
      }
    }

    Ok(())
  }
}

fn get_package_manager(app_dir: &VfsPath) -> crate::Result<PackageManager> {
  let use_yarn = app_dir.join("yarn.lock")?.exists().unwrap_or_default();

  let use_npm = app_dir
    .join("package-lock.json")?
    .exists()
    .unwrap_or_default();

  let use_pnpm = app_dir.join("pnpm-lock.yaml")?.exists().unwrap_or_default();

  if !use_npm && !use_pnpm && !use_yarn {
    return Err(anyhow::anyhow!(
      "no lock file found, please first run your package manager install"
    ));
  }

  if use_npm && (use_pnpm || use_yarn)
    || use_pnpm && (use_npm || use_yarn)
    || use_yarn && (use_npm || use_pnpm)
  {
    return Err(anyhow::anyhow!(
      "only one package mangager should be used, but found npm {}, pnpm {}, yarn {}\nplease remove unused package manager lock files",
      use_npm,
      use_pnpm,
      use_yarn
    ));
  }

  if use_npm {
    return Ok(PackageManager::Npm);
  }

  if use_pnpm {
    return Ok(PackageManager::Pnpm);
  }

  Ok(PackageManager::Yarn)
}

#[cfg(test)]
mod tests {
  use vfs::{FileSystem, MemoryFS, VfsPath};

  use crate::info::get_package_manager;

  #[test]
  fn no_package_manager_lock_file() -> crate::Result<()> {
    let app_dir: VfsPath = MemoryFS::new().into();
    let pm = get_package_manager(&app_dir);
    match pm {
      Ok(_) => panic!("get_package_manager did not return expected error"),
      Err(m) => assert_eq!(
        "no lock file found, please first run your package manager install",
        m.to_string().as_str()
      ),
    }
    Ok(())
  }

  #[test]
  fn package_managers_npm_and_yarn() -> crate::Result<()> {
    let fs = MemoryFS::new();
    fs.create_dir("/app")?;
    fs.create_file("/app/package-lock.json")?;
    fs.create_file("/app/yarn.lock")?;
    let mut app_dir = VfsPath::new(fs);
    app_dir = app_dir.join("app")?;
    let pm = get_package_manager(&app_dir);
    match pm {
      Ok(_) => panic!("expected error"),
      Err(m) => assert_eq!(
        m.to_string().as_str(),
        "only one package mangager should be used, but found npm true, pnpm false, yarn true\nplease remove unused package manager lock files"
      ),
    }
    Ok(())
  }

  #[test]
  fn package_managers_npm_and_pnpm() -> crate::Result<()> {
    let fs = MemoryFS::new();
    fs.create_dir("/app")?;
    fs.create_file("/app/package-lock.json")?;
    fs.create_file("/app/pnpm-lock.yaml")?;
    let mut app_dir = VfsPath::new(fs);
    app_dir = app_dir.join("app")?;
    let pm = get_package_manager(&app_dir);
    match pm {
      Ok(_) => panic!("expected error"),
      Err(m) => assert_eq!(
        m.to_string().as_str(),
        "only one package mangager should be used, but found npm true, pnpm true, yarn false\nplease remove unused package manager lock files"
      ),
    }
    Ok(())
  }

  #[test]
  fn package_managers_pnpm_and_yarn() -> crate::Result<()> {
    let fs = MemoryFS::new();
    fs.create_dir("/app")?;
    fs.create_file("/app/yarn.lock")?;
    fs.create_file("/app/pnpm-lock.yaml")?;
    let mut app_dir = VfsPath::new(fs);
    app_dir = app_dir.join("app")?;
    let pm = get_package_manager(&app_dir);
    match pm {
      Ok(_) => panic!("expected error"),
      Err(m) => assert_eq!(
        m.to_string().as_str(),
        "only one package mangager should be used, but found npm false, pnpm true, yarn true\nplease remove unused package manager lock files"
      ),
    }
    Ok(())
  }

  #[test]
  fn package_managers_yarn() -> crate::Result<()> {
    let fs = MemoryFS::new();
    fs.create_dir("/app")?;
    fs.create_file("/app/yarn.lock")?;
    let mut app_dir = VfsPath::new(fs);
    app_dir = app_dir.join("app")?;
    let pm = get_package_manager(&app_dir);
    match pm {
      Ok(_) => Ok(()),
      Err(m) => Err(m),
    }
  }
}
