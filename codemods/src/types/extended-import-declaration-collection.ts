import { ImportDeclaration } from 'jscodeshift'
import { ExtendedCollection } from './extended-collection'
import { ExtendedImportSpecifierCollection } from './extended-import-specifier-collection'

/**
 * Represents an `ImportDeclaration` node collection that has access to type-specific extension methods
 * via `utils/register-extensions.ts`
 */
interface ExtendedImportDeclarationCollection
  extends ImportDeclarationCollectionExtensions,
    ExtendedCollection<ImportDeclaration> {}

/**
 * Extension methods that are unique to `ImportDeclaration` collections
 */
interface ImportDeclarationCollectionExtensions {
  /**
   * Returns a collection of `ImportSpecifier` nodes with the provided name (case-sensitive)
   */
  findImportSpecifiersByName: (name: string) => ExtendedImportSpecifierCollection
}

export type { ExtendedImportDeclarationCollection, ImportDeclarationCollectionExtensions }
