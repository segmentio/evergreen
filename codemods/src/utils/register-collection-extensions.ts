import { Collection, ASTPath, JSCodeshift } from 'jscodeshift'
import { CollectionExtensions, ExtendedCollection } from '../types/extended-collection'
import { ExtendedImportDeclarationCollection } from '../types/extended-import-declaration-collection'
import { ExtendedJSCodeshift } from '../types/extended-jscodeshift'
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

    firstNode: function<T>(predicate?: (node: ASTPath<T>) => boolean) {
      const thisCollection = (this as any) as ExtendedCollection
      const filteredCollection = predicate != null ? thisCollection.filter(predicate).at(0) : thisCollection.at(0)
      return filteredCollection.nodes()[0]
    },

    hasValues: function() {
      const thisCollection = (this as any) as Collection
      return thisCollection.length > 0
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
