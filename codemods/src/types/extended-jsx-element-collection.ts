import { JSXAttribute, JSXElement, JSXSpreadAttribute } from 'jscodeshift'
import { ExtendedCollection } from './extended-collection'

/**
 * Represents a `JSXElement` node collection that has access to type-specific extension methods
 * via `utils/register-extensions.ts`
 */
interface ExtendedJSXElementCollection
  extends JSXElementCollectionExtensions,
    Omit<ExtendedCollection<JSXElement>, 'renameTo'> {}

/**
 * Extension methods that are unique to `ImportDeclaration` collections
 */
interface JSXElementCollectionExtensions {
  /**
   * Adds the given prop to the `JSXOpeningElement`
   */
  addProp: (prop: JSXAttribute | JSXSpreadAttribute) => ExtendedJSXElementCollection

  /**
   * Returns a collection of the `JSXAttribute` nodes with the provided name for the current `JSXElement` collection
   */
  findPropWithName: (name: string) => ExtendedCollection<JSXAttribute>

  /**
   * Returns a collection of `JSXElement` nodes that have of the provided prop name
   */
  findWithPropName: (name: string) => ExtendedJSXElementCollection

  /**
   * Returns a collection of `JSXElement` nodes that have spread props
   */
  findWithSpreadProps: () => ExtendedJSXElementCollection

  /**
   * Renames the `JSXOpeningElement` and `JSXClosingElement` (if present) to the provided value
   */
  renameTo: (name: string) => ExtendedJSXElementCollection

  /**
   * Removes the prop from the `JSXOpeningElement` (if present)
   */
  removeProp: (prop: JSXAttribute | JSXSpreadAttribute) => ExtendedJSXElementCollection
}

export type { ExtendedJSXElementCollection, JSXElementCollectionExtensions }
