import { promisified, transformCallback } from './tauri'

/**
 * register a global shortcut
 * @param shortcut shortcut definition, modifiers and key separated by "+" e.g. Ctrl+Q
 * @param handler shortcut handler callback
 */
async function registerShortcut(
  shortcut: string,
  handler: () => void
): Promise<void> {
  return await promisified({
    module: 'GlobalShortcut',
    message: {
      cmd: 'register',
      shortcut,
      handler: transformCallback(handler)
    }
  })
}

/**
 * unregister a global shortcut
 * @param shortcut shortcut definition, modifiers and key separated by "+" e.g. Ctrl+Q
 */
async function unregisterShortcut(shortcut: string): Promise<void> {
  return await promisified({
    module: 'GlobalShortcut',
    message: {
      cmd: 'unregister',
      shortcut
    }
  })
}

export {
  registerShortcut,
  unregisterShortcut
}
