import { Collection, ImportDeclaration, JSCodeshift } from 'jscodeshift'
import { ExtendedCollection } from '../types/extended-collection'
import { ExtendedJSCodeshift } from '../types/extended-jscodeshift'
import { once } from './once'
import { ExtendedImportSpecifierCollection } from './register-import-specifier-collection-extensions'

/**
 * Represents an `ImportDeclaration` node collection that has access to type-specific extension methods
 * via `utils/register-extensions.ts`
 */
export interface ExtendedImportDeclarationCollection
  extends ImportDeclarationCollectionExtensions,
    ExtendedCollection<ImportDeclaration> {}

/**
 * Extension methods that are unique to `ImportDeclaration` collections
 */
export interface ImportDeclarationCollectionExtensions {
  /**
   * Returns a collection of `ImportSpecifier` nodes with the provided name (case-sensitive)
   */
  findImportSpecifiersByName: (name: string) => ExtendedImportSpecifierCollection
}

const _registerImportDeclarationCollectionExtensions = (
  jscodeshift: ExtendedJSCodeshift | JSCodeshift
): ExtendedJSCodeshift => {
  const j = jscodeshift as ExtendedJSCodeshift

  j.registerMethods<ImportDeclarationCollectionExtensions>(
    {
      findImportSpecifiersByName: function(name: string) {
        const importDeclarations = (this as any) as Collection<ImportDeclaration>
        return (importDeclarations.find(
          j.ImportSpecifier,
          importSpecifier => importSpecifier.imported.name === name
        ) as any) as ExtendedImportSpecifierCollection
      }
    },
    j.ImportDeclaration
  )

  return j
}

const registerImportDeclarationCollectionExtensions = once(_registerImportDeclarationCollectionExtensions)

export { registerImportDeclarationCollectionExtensions }
