import { ASTPath, JSXAttribute, JSXElement, JSXSpreadAttribute } from 'jscodeshift'

const getJsxAttributes = (jsxElement: ASTPath<JSXElement>): Array<JSXAttribute | JSXSpreadAttribute> =>
  jsxElement.node.openingElement.attributes ?? []

const getNamedJsxAttributes = (jsxElement: ASTPath<JSXElement>): JSXAttribute[] =>
  getJsxAttributes(jsxElement).filter((jsxAttribute) => jsxAttribute.type === 'JSXAttribute') as JSXAttribute[]

const getSpreadJsxAttributes = (jsxElement: ASTPath<JSXElement>): JSXSpreadAttribute[] =>
  getJsxAttributes(jsxElement).filter(
    (jsxAttribute) => jsxAttribute.type === 'JSXSpreadAttribute'
  ) as JSXSpreadAttribute[]

/**
 * Returns true if the JSXElement contains the JSXAttribute by name
 */
const hasProp = (jsxElement: ASTPath<JSXElement>, prop: JSXAttribute | JSXSpreadAttribute): boolean => {
  if (prop.type === 'JSXSpreadAttribute') {
    return false
  }

  const existingNamedProps = getNamedJsxAttributes(jsxElement)
  return existingNamedProps.some((existingProp) => isEqual(existingProp, prop))
}

const isEqual = (left: JSXAttribute | JSXSpreadAttribute, right: JSXAttribute | JSXSpreadAttribute): boolean => {
  if (left.type === 'JSXSpreadAttribute' && right.type === 'JSXSpreadAttribute') {
    return left === right || left.argument === right.argument
  }

  if (left.type === 'JSXAttribute' && right.type === 'JSXAttribute') {
    return left === right || left.name.name.toString() === right.name.name.toString()
  }

  return false
}

export { getJsxAttributes, getNamedJsxAttributes, getSpreadJsxAttributes, hasProp, isEqual }
