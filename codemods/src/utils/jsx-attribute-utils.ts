import { ASTPath, JSXAttribute, JSXElement, JSXSpreadAttribute } from 'jscodeshift'

const getJsxAttributes = (jsxElement: ASTPath<JSXElement>): Array<JSXAttribute | JSXSpreadAttribute> =>
  jsxElement.node.openingElement.attributes ?? []

const getJsxAttributeName = (jsxAttribute: JSXAttribute | JSXSpreadAttribute): string | undefined =>
  isJsxSpreadAttribute(jsxAttribute) ? undefined : jsxAttribute.name.name.toString()

const getNamedJsxAttributes = (jsxElement: ASTPath<JSXElement>): JSXAttribute[] =>
  getJsxAttributes(jsxElement).filter(isNamedJsxAttribute)

const getSpreadJsxAttributes = (jsxElement: ASTPath<JSXElement>): JSXSpreadAttribute[] =>
  getJsxAttributes(jsxElement).filter(isJsxSpreadAttribute)

/**
 * Returns true if the JSXElement contains the JSXAttribute by name
 */
const hasProp = (jsxElement: ASTPath<JSXElement>, prop: JSXAttribute | JSXSpreadAttribute): boolean => {
  if (prop.type === 'JSXSpreadAttribute') {
    return false
  }

  const existingNamedProps = getNamedJsxAttributes(jsxElement)
  return existingNamedProps.some(existingProp => isEqual(existingProp, prop))
}

const isEqual = (left: JSXAttribute | JSXSpreadAttribute, right: JSXAttribute | JSXSpreadAttribute): boolean => {
  if (left.type === 'JSXSpreadAttribute' && right.type === 'JSXSpreadAttribute') {
    return left === right || left.argument === right.argument
  }

  if (left.type === 'JSXAttribute' && right.type === 'JSXAttribute') {
    return left === right || getJsxAttributeName(left) === getJsxAttributeName(right)
  }

  return false
}

const isNamedJsxAttribute = (jsxAttribute: JSXAttribute | JSXSpreadAttribute): jsxAttribute is JSXAttribute =>
  jsxAttribute.type === 'JSXAttribute'

const isJsxSpreadAttribute = (jsxAttribute: JSXAttribute | JSXSpreadAttribute): jsxAttribute is JSXSpreadAttribute =>
  jsxAttribute.type === 'JSXSpreadAttribute'

export {
  isNamedJsxAttribute,
  isJsxSpreadAttribute,
  getJsxAttributes,
  getJsxAttributeName,
  getNamedJsxAttributes,
  getSpreadJsxAttributes,
  hasProp,
  isEqual
}
