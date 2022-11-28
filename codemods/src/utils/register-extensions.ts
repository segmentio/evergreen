import { JSCodeshift } from 'jscodeshift'
import { ExtendedJSCodeshift } from '../types/extended-jscodeshift'
import { registerCollectionExtensions } from './register-collection-extensions'
import { registerJSXElementCollectionExtensions } from './register-jsx-element-collection-extensions'
import { registerImportDeclarationCollectionExtensions } from './register-import-declaration-collection-extensions'
import { registerImportSpecifierCollectionExtensions } from './register-import-specifier-collection-extensions'

/**
 * Additional safeguard to ensure extensions are only registered once. JSCodeshift seems to be very
 * sensitive about this, so errors are turned during tests if this flag is taken out or the
 * `safelyRegisterMethods` logic is removed.
 */
let hasBeenCalled = false

/**
 * Utility function for registering extension methods on the JSCodeshift object, returning a typed
 * instance
 */
const registerExtensions = (jscodeshift: JSCodeshift): ExtendedJSCodeshift => {
  const j = jscodeshift as any as ExtendedJSCodeshift
  if (hasBeenCalled) {
    return j
  }

  registerCollectionExtensions(j)
  registerImportDeclarationCollectionExtensions(j)
  registerImportSpecifierCollectionExtensions(j)
  registerJSXElementCollectionExtensions(j)

  hasBeenCalled = true
  return j
}

export { registerExtensions }
