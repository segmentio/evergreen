import { Transform } from 'jscodeshift'
import { getLogger } from '../utils/get-logger'
import { registerExtensions } from '../utils/register-extensions'

/**
 * Codemod to replace imports referencing the `classicTheme` object from evergreen-ui to a provided path
 * ```
 * npx jscodeshift -t node_modules/evergreen-ui/codemods/dist/6.0.0-7.0.0/replace-classic-theme-imports.js --localPath=themes/classic-theme --parser=tsx --extensions=js,jsx,ts,tsx fileOrDirectory --dry --print
 * ```
 */

const CLASSIC_THEME = 'classicTheme'

const transformer: Transform = (file, api, options) => {
  const log = getLogger(file)

  const { localPath } = options
  if (localPath == null || localPath.length < 1) {
    log(
      `Local path is required for replacement. Specify where the ${CLASSIC_THEME} object should be imported from, i.e. --localPath=themes/classic-theme`
    )
    return file.source
  }

  const j = registerExtensions(api.jscodeshift)

  const root = j(file.source)

  const importDeclarations = root.findEvergreenImportDeclaration()

  if (importDeclarations.isEmpty()) {
    return file.source
  }

  const importSpecifiers = importDeclarations.findImportSpecifiersByName(CLASSIC_THEME)

  if (importSpecifiers.isEmpty()) {
    return file.source
  }

  importSpecifiers.remove()

  importDeclarations.insertAfter(
    j.importDeclaration([j.importSpecifier(j.identifier(CLASSIC_THEME))], j.literal(localPath))
  )

  return root.toSource()
}

export default transformer
