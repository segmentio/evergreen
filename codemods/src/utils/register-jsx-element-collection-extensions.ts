import { JSCodeshift, JSXAttribute, JSXElement, JSXSpreadAttribute } from 'jscodeshift'
import { ExtendedCollection } from '../types/extended-collection'
import { ExtendedJSCodeshift } from '../types/extended-jscodeshift'
import { flatMap } from './flat-map'
import {
  getJsxAttributes,
  getNamedJsxAttributes,
  getSpreadJsxAttributes,
  hasProp,
  isEqual
} from './jsx-attribute-utils'
import { once } from './once'

/**
 * Represents a `JSXElement` node collection that has access to type-specific extension methods
 * via `utils/register-extensions.ts`
 */
export interface ExtendedJSXElementCollection
  extends JSXElementCollectionExtensions,
    Omit<ExtendedCollection<JSXElement>, 'renameTo'> {}

/**
 * Extension methods that are unique to `ImportDeclaration` collections
 */
export interface JSXElementCollectionExtensions {
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

const _registerJSXElementCollectionExtensions = (jscodeshift: ExtendedJSCodeshift | JSCodeshift) => {
  const j = jscodeshift as ExtendedJSCodeshift

  j.registerMethods<JSXElementCollectionExtensions>(
    {
      addProp: function(prop: JSXAttribute | JSXSpreadAttribute) {
        const jsxElements = (this as any) as ExtendedJSXElementCollection
        jsxElements.forEach(jsxElement => {
          if (hasProp(jsxElement, prop)) {
            return
          }

          const props = getJsxAttributes(jsxElement)
          jsxElement.node.openingElement.attributes = [...props, prop]
        })
        return jsxElements
      },

      findPropWithName: function(name: string) {
        const jsxElements = (this as any) as ExtendedJSXElementCollection
        return j<ExtendedCollection<JSXAttribute>>(flatMap(jsxElements.findWithPropName(name), getJsxAttributes))
      },

      findWithPropName: function(name: string) {
        const jsxElements = (this as any) as ExtendedJSXElementCollection
        return jsxElements.filter(jsxElement =>
          getNamedJsxAttributes(jsxElement).some(jsxAttribute => jsxAttribute.name.name.toString() === name)
        ) as ExtendedJSXElementCollection
      },

      findWithSpreadProps: function() {
        const jsxElements = (this as any) as ExtendedJSXElementCollection
        return jsxElements.filter(
          jsxElement => getSpreadJsxAttributes(jsxElement).length > 0
        ) as ExtendedJSXElementCollection
      },

      removeProp: function(prop: JSXAttribute | JSXSpreadAttribute) {
        const jsxElements = (this as any) as ExtendedJSXElementCollection
        jsxElements.forEach(jsxElement => {
          const jsxAttributes = getJsxAttributes(jsxElement)

          jsxElement.node.openingElement.attributes = jsxAttributes.filter(jsxAttribute => !isEqual(jsxAttribute, prop))
        })
        return jsxElements
      },

      renameTo: function(name: string) {
        const jsxElements = (this as any) as ExtendedJSXElementCollection

        jsxElements.forEach(jsxElement => {
          jsxElement.node.openingElement.name = j.jsxIdentifier(name)

          if (jsxElement.node.closingElement != null) {
            jsxElement.node.closingElement = j.jsxClosingElement(j.jsxIdentifier(name))
          }
        })

        return jsxElements
      }
    },
    j.JSXElement
  )

  return j
}

const registerJSXElementCollectionExtensions = once(_registerJSXElementCollectionExtensions)

export { registerJSXElementCollectionExtensions }
