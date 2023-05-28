import { ASTPath, Collection } from 'jscodeshift'
import { ExtendedImportDeclarationCollection } from '../utils/register-import-declaration-collection-extensions'
import { ExtendedJSXElementCollection } from '../utils/register-jsx-element-collection-extensions'
import { CollectionReturningFunctions } from './collection-returning-functions'
import { ExtendedCollectionReturningFunctions } from './extended-collection-returning-functions'

/**
 * Represents a node collection returned from jscodeshift that has access to extension methods via
 * `utils/register-extensions.ts`
 */
type ExtendedCollection<T = any> = CollectionExtensions<T> & CollectionOverrides<T>

type CollectionOverrides<T = any> = {
  /**
   * Returns a collection of `JSXElement` nodes by name
   */
  findJSXElements: (name?: string) => ExtendedJSXElementCollection
} & /**
 * Omit `CollectionReturningFunctions` from `Collection` so we can override them with functions
 * that always return `ExtendedCollection<T>`
 */ Omit<Collection<T>, keyof CollectionReturningFunctions<T>> &
  ExtendedCollectionReturningFunctions<T>

interface CollectionExtensions<T = any> {
  /**
   * Returns a combined collection
   */
  concat: (rightCollection: Collection<T> | ExtendedCollection<T>) => ExtendedCollection<T>

  /**
   * Returns a collection of nodes in `this` collection that do not exist in `rightCollection`
   */
  difference: (rightCollection: Collection<T> | ExtendedCollection<T>) => ExtendedCollection<T>

  /**
   * Returns a collection of `ImportDeclaration` nodes from the provided module
   */
  findImportDeclarationByModuleName: (moduleName: string) => ExtendedImportDeclarationCollection

  /**
   * Returns a collection of `ImportDeclaration` nodes from the `evergreen-ui` module
   */
  findEvergreenImportDeclaration: () => ExtendedImportDeclarationCollection

  /**
   * Returns the first node of a collection, optionally matching the given predicate
   */
  firstNode: (predicate?: (node: ASTPath<T>) => boolean) => T | undefined

  /**
   * Returns whether the collection contains nodes
   */
  hasValues: () => boolean

  /**
   * Returns whether the collection is empty
   */
  isEmpty: () => boolean

  /**
   * Returns the collection as an array of nodes
   */
  toNodeArray: () => T[]
}

export type { CollectionExtensions, ExtendedCollection }
