import { ASTPath, Collection } from 'jscodeshift'
import { CollectionReturningFunctions } from './collection-returning-functions'
import { ExtendedCollectionReturningFunctions } from './extended-collection-returning-functions'
import { ExtendedImportDeclarationCollection } from './extended-import-declaration-collection'
import { ExtendedJSXElementCollection } from './extended-jsx-element-collection'

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
   * Returns a collection of `ImportDeclaration` nodes from the `evergreen-ui` module
   */
  findEvergreenImportDeclaration: () => ExtendedImportDeclarationCollection
  /**
   * Returns a collection containing only the first node, optionally matching the given predicate
   */
  first: (predicate?: (node: ASTPath<T>) => boolean) => ExtendedCollection<T>
  /**
   * Returns a collection containing only the first node, optionally matching the given predicate
   */
  firstNode: (predicate?: (node: ASTPath<T>) => boolean) => T | undefined
  /**
   * Returns a flattened array of the collection's iterator on the provided collection
   */
  flatMap: <TOutput = T>(iterator: (node: ASTPath<T>) => TOutput[]) => TOutput[]
  /**
   * Returns whether the collection contains nodes
   */
  hasValues: () => boolean
  /**
   * Returns a collection of nodes in `this` collection that also exist in `rightCollection`
   */
  intersect: (rightCollection: Collection<T> | ExtendedCollection<T>) => ExtendedCollection<T>
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
