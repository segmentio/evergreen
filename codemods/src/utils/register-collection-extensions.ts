import { Collection, ASTPath, JSCodeshift } from 'jscodeshift'
import { CollectionExtensions, ExtendedCollection } from '../types/extended-collection'
import { ExtendedImportDeclarationCollection } from '../types/extended-import-declaration-collection'
import { ExtendedJSCodeshift } from '../types/extended-jscodeshift'
import { flatMap } from './flat-map'
import { once } from './once'

const _registerCollectionExtensions = (jscodeshift: ExtendedJSCodeshift | JSCodeshift): ExtendedJSCodeshift => {
  const j = jscodeshift as ExtendedJSCodeshift

  j.registerMethods<CollectionExtensions>({
    concat: function(rightCollection: Collection | ExtendedCollection) {
      const thisCollection = (this as any) as ExtendedCollection
      return j([...thisCollection.paths(), ...rightCollection.paths()])
    },

    difference: function(rightCollection: Collection | ExtendedCollection) {
      const thisCollection = (this as any) as ExtendedCollection
      return thisCollection.filter(leftNode => rightCollection.every(rightNode => leftNode !== rightNode))
    },

    findEvergreenImportDeclaration: function() {
      const thisCollection = (this as any) as Collection
      return (thisCollection.find(j.ImportDeclaration, {
        source: { value: 'evergreen-ui' }
      }) as any) as ExtendedImportDeclarationCollection
    },

    first: function<T>(predicate?: (node: ASTPath<T>) => boolean) {
      const thisCollection = (this as any) as ExtendedCollection
      if (predicate != null) {
        return thisCollection.filter(predicate).at(0)
      }
      return thisCollection.at(0)
    },

    firstNode: function<T>(predicate?: (node: ASTPath<T>) => boolean) {
      const thisCollection = (this as any) as ExtendedCollection
      return thisCollection.first(predicate).toNodeArray()[0]
    },

    flatMap: function<TInput, TOutput = TInput>(iterator: (node: ASTPath<TInput>) => TOutput[]) {
      const thisCollection = (this as any) as Collection
      return flatMap(thisCollection, iterator)
    },

    hasValues: function() {
      const thisCollection = (this as any) as Collection
      return thisCollection.length > 0
    },

    intersect: function(rightCollection: Collection | ExtendedCollection) {
      const thisCollection = (this as any) as ExtendedCollection
      return thisCollection.filter(leftNode => rightCollection.some(rightNode => leftNode === rightNode))
    },

    isEmpty: function() {
      const thisCollection = (this as any) as Collection
      return thisCollection.length === 0
    },

    toNodeArray: function() {
      const thisCollection = (this as any) as Collection
      return thisCollection.nodes()
    }
  })

  return j
}

const registerCollectionExtensions = once(_registerCollectionExtensions)

export { registerCollectionExtensions }
