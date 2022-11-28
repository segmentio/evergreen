import { ImportSpecifier } from 'jscodeshift'
import { ExtendedCollection } from './extended-collection'

/**
 * Represents an `ImportSpecifier` node collection that has access to type-specific extension methods
 * via `utils/register-extensions.ts`
 */
interface ExtendedImportSpecifierCollection
  extends ImportSpecifierCollectionExtensions,
    Omit<ExtendedCollection<ImportSpecifier>, 'renameTo'> {}

/**
 * Extension methods that are unique to `ImportSpecifier` collections
 */
interface ImportSpecifierCollectionExtensions {
  /**
   * Adds a new `ImportSpecifier` with the provided name
   */
  add: (name: string) => ExtendedImportSpecifierCollection

  /**
   * Renames the `ImportSpecifier` to the provided value
   */
  renameTo: (name: string) => ExtendedImportSpecifierCollection
}

export type { ImportSpecifierCollectionExtensions, ExtendedImportSpecifierCollection }
