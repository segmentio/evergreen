import { ASTPath, Collection } from 'jscodeshift'
import { ExtendedCollection } from '../types/extended-collection'

const flatMap = <TInput, TOutput = TInput>(
  collection: Collection<TInput> | ExtendedCollection<TInput>,
  iterator: (node: ASTPath<TInput>) => TOutput[]
): TOutput[] => {
  let flattenedItems: TOutput[] = []
  collection.forEach((node: ASTPath<TInput>) => {
    flattenedItems = flattenedItems.concat(iterator(node))
  })
  return flattenedItems
}

export { flatMap }
