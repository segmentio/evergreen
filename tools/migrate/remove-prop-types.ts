import { PropertyAccessExpression, SourceFile, SyntaxKind } from 'ts-morph'
import { log } from './log'
import { first, isEmpty } from './utils'

const removePropTypes = async (sourceFile: SourceFile) => {
  const expressions = sourceFile
    .getDescendantsOfKind(SyntaxKind.PropertyAccessExpression)
    .filter(hasPropTypesIdentifier)

  if (isEmpty(expressions)) {
    return
  }

  // Remove the first propType which likely wraps the remaining expressions, if any
  // We expect a wrapper ExpressionStatement in the majority of cases, we'll manually handle outliers
  const propTypeParentExpression = first(expressions)!.getFirstAncestorByKind(SyntaxKind.ExpressionStatement)
  if (propTypeParentExpression == null) {
    return
  }

  const name = sourceFile.getBaseName()
  const line = propTypeParentExpression.getStartLineNumber()

  // Split to first line for brevity
  const expressionText = first(propTypeParentExpression.getText().split('\n'))
  log.info(removePropTypes, `Removing ${expressionText} at ${name}:${line}`)

  propTypeParentExpression.remove()

  // Remove propTypes import
  const importDeclaration = sourceFile.getImportDeclaration('prop-types')
  if (importDeclaration == null) {
    log.info(removePropTypes, `No prop-types import found in ${sourceFile.getBaseName()}`)
  }

  importDeclaration?.remove()

  // Clean up any unused identifiers/imports leftover
  sourceFile.fixUnusedIdentifiers()
}

const hasPropTypesIdentifier = (expression: PropertyAccessExpression): boolean =>
  expression.getChildrenOfKind(SyntaxKind.Identifier).some((identifier) => identifier.getText() === 'propTypes')

export { removePropTypes }
