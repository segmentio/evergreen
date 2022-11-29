import { JSCodeshift, JSXAttribute, JSXSpreadAttribute } from 'jscodeshift'
import { ExtendedCollection } from '../types/extended-collection'
import { ExtendedJSCodeshift } from '../types/extended-jscodeshift'
import { JSXElementCollectionExtensions, ExtendedJSXElementCollection } from '../types/extended-jsx-element-collection'
import { flatMap } from './flat-map'
import {
  getJsxAttributes,
  getNamedJsxAttributes,
  getSpreadJsxAttributes,
  hasProp,
  isEqual
} from './jsx-attribute-utils'
import { once } from './once'

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

      findProps: function() {
        const jsxElements = (this as any) as ExtendedJSXElementCollection
        return j<ExtendedCollection<JSXAttribute>>(flatMap(jsxElements, getJsxAttributes))
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
