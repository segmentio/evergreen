import { API, FileInfo } from 'jscodeshift'
import { getLogger } from './get-logger'
import { registerExtensions } from './register-extensions'

interface ReplaceEvergreenImportWithLocalPathOptions {
  file: FileInfo
  api: API
  localPath: string
  importName: string
}

/**
 * Utility function for replacing an import from evergreen-ui to the specified local path, i.e.
 *
 * ```diff
 * -import { classicTheme as theme } from 'evergreen-ui'
 * +import { classicTheme as theme } from 'themes/classic-theme'
 * ```
 *
 * `localPath` should be present in the `options` object, provided from the command-line.
 */
const replaceEvergreenImportWithLocalPath = (options: ReplaceEvergreenImportWithLocalPathOptions): string => {
  const { file, api, localPath, importName } = options
  const log = getLogger(file)

  if (importName == null || importName.length < 1) {
    log(
      'Import name is required for replacement. Specify what import should be replaced, i.e. --importName=classicTheme'
    )
    return file.source
  }

  if (localPath == null || localPath.length < 1) {
    log(
      `Local path is required for replacement. Specify where the ${importName} object should be imported from, i.e. --localPath=client/${importName}`
    )
    return file.source
  }

  const j = registerExtensions(api.jscodeshift)

  const root = j(file.source)

  const evergreenImportDeclaration = root.findEvergreenImportDeclaration()

  if (evergreenImportDeclaration.isEmpty()) {
    return file.source
  }

  const importSpecifiers = evergreenImportDeclaration.findImportSpecifiersByName(importName)

  if (importSpecifiers.isEmpty()) {
    return file.source
  }

  // Save reference to original importSpecifier to swap it with the local path (i.e. any alias that might be used)
  const importSpecifier = importSpecifiers.firstNode()!

  // Remove the original evergreen import
  importSpecifiers.remove()

  // Remove the evergreen-ui import if the local component/module was the only thing imported
  if (evergreenImportDeclaration.find(j.ImportSpecifier).isEmpty()) {
    evergreenImportDeclaration.remove()
  }

  const hasLocalImport = root
    .findImportDeclarationByModuleName(localPath)
    .findImportSpecifiersByName(importName)
    .hasValues()

  if (!hasLocalImport) {
    // Add an import to the local path using the saved import specifier
    evergreenImportDeclaration.insertAfter(
      j.importDeclaration([j.importSpecifier.from(importSpecifier)], j.literal(localPath))
    )
  }

  return root.toSource()
}

export { replaceEvergreenImportWithLocalPath }
