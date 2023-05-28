import { Transform } from 'jscodeshift'
import { replaceEvergreenImportWithLocalPath } from '../utils/replace-evergreen-import-with-local-path'

/**
 * Codemod to replace imports referencing a component/function/etc from evergreen-ui with the provided local path.
 *
 * This may be useful when a specific function or module is deprecated and is no longer exported - you can easily
 * vendorize the code and swap the imports to maintain the old functionality to aid in migration.
 *
 * ```
 * npx jscodeshift -t node_modules/evergreen-ui/codemods/dist/6.0.0-7.0.0/replace-imports-with-local-path.js --localPath=themes/classic-theme --importName=classicTheme --parser=tsx --extensions=js,jsx,ts,tsx fileOrDirectory --dry --print
 * ```
 */

const transformer: Transform = (file, api, options) =>
  replaceEvergreenImportWithLocalPath({ file, api, localPath: options.localPath, importName: options.importName })

export default transformer
