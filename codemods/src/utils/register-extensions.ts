import { JSCodeshift } from 'jscodeshift'
import { ExtendedJSCodeshift } from '../types/extended-jscodeshift'
import { registerCollectionExtensions } from './register-collection-extensions'
import { registerJSXElementCollectionExtensions } from './register-jsx-element-collection-extensions'
import { registerImportDeclarationCollectionExtensions } from './register-import-declaration-collection-extensions'
import { registerImportSpecifierCollectionExtensions } from './register-import-specifier-collection-extensions'
import { once } from './once'

/**
 * Utility function for registering extension methods on the JSCodeshift object, returning a typed
 * instance
 */
const _registerExtensions = (jscodeshift: JSCodeshift): ExtendedJSCodeshift => {
  const j = (jscodeshift as any) as ExtendedJSCodeshift

  registerCollectionExtensions(j)
  registerImportDeclarationCollectionExtensions(j)
  registerImportSpecifierCollectionExtensions(j)
  registerJSXElementCollectionExtensions(j)

  return j
}

const registerExtensions = once(_registerExtensions)
export { registerExtensions }
