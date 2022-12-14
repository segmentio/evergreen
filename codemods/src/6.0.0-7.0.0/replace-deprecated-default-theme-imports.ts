import { Transform } from 'jscodeshift'
import { replaceEvergreenImportWithLocalPath } from '../utils/replace-evergreen-import-with-local-path'

/**
 * Codemod to replace imports referencing the `deprecatedDefaultTheme` object from evergreen-ui to a provided path
 * ```
 * npx jscodeshift -t node_modules/evergreen-ui/codemods/dist/6.0.0-7.0.0/replace-deprecated-default-theme-imports.js --localPath=themes/deprecated-default-theme --parser=tsx --extensions=js,jsx,ts,tsx fileOrDirectory --dry --print
 * ```
 */

const transformer: Transform = (file, api, options) =>
  replaceEvergreenImportWithLocalPath({ file, api, localPath: options.localPath, importName: 'deprecatedDefaultTheme' })

export default transformer
