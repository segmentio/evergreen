import { Collection, ImportDeclaration, JSCodeshift } from 'jscodeshift'
import { ImportDeclarationCollectionExtensions } from '../types/extended-import-declaration-collection'
import { ExtendedImportSpecifierCollection } from '../types/extended-import-specifier-collection'
import { ExtendedJSCodeshift } from '../types/extended-jscodeshift'
import { safelyRegisterMethods } from './safely-register-methods'
/* @ts-ignore */
import once from 'jscodeshift/src/utils/once'

const _registerImportDeclarationCollectionExtensions = (
  jscodeshift: ExtendedJSCodeshift | JSCodeshift
): ExtendedJSCodeshift => {
  const j = jscodeshift as ExtendedJSCodeshift

  safelyRegisterMethods<ImportDeclarationCollectionExtensions>(
    j,
    {
      findImportSpecifiersByName: function(name: string) {
        const importDeclarations = (this as any) as Collection<ImportDeclaration>
        return (importDeclarations.find(
          j.ImportSpecifier,
          importSpecifier => importSpecifier.local?.name === name
        ) as any) as ExtendedImportSpecifierCollection
      }
    },
    j.ImportDeclaration
  )

  return j
}

const registerImportDeclarationCollectionExtensions = once(_registerImportDeclarationCollectionExtensions)

export { registerImportDeclarationCollectionExtensions }
