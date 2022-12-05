import { CollectionReturningFunctions } from './collection-returning-functions'
import { ExtendedCollection } from './extended-collection'

/**
 * Remaps all `Collection` returning functions to return `ExtendedCollection` types instead, to reduce the need for casting
 * Should maintain original function parameter typing
 */
type ExtendedCollectionReturningFunctions<T extends any> = {
  [Key in keyof CollectionReturningFunctions<T>]: (
    ...args: Parameters<CollectionReturningFunctions<T>[Key]>
  ) => ExtendedCollection<T>
}

export type { ExtendedCollectionReturningFunctions }
