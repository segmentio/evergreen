import { Collection } from 'jscodeshift'
import { PickByValue } from './pick-by-value'

/**
 * Returns all `Collection` functions that return a `Collection`
 */
type CollectionReturningFunctions<T extends any> = PickByValue<Collection<T>, (...args: any[]) => Collection<T>>

export type { CollectionReturningFunctions }
