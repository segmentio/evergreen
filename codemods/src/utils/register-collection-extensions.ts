import { Collection, ASTPath, JSCodeshift } from 'jscodeshift'
import { CollectionExtensions, ExtendedCollection } from '../types/extended-collection'
import { ExtendedJSCodeshift } from '../types/extended-jscodeshift'
import { once } from './once'
import { ExtendedImportDeclarationCollection } from './register-import-declaration-collection-extensions'

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

    findImportDeclarationByModuleName: function(moduleName: string) {
      const thisCollection = (this as any) as Collection
      return (thisCollection.find(j.ImportDeclaration, {
        source: { value: moduleName }
      }) as any) as ExtendedImportDeclarationCollection
    },

    findEvergreenImportDeclaration: function() {
      const thisCollection = (this as any) as ExtendedCollection
      return thisCollection.findImportDeclarationByModuleName('evergreen-ui')
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
