/**
 * Codemode to update icon imports
 * ```
 * npx jscodeshift -t node_modules/evergreen-ui/codemods/4.25.0-4.26.0/replace-icon-imports.js --parser=tsx --extensions=js,ts,tsx <your file target> --dry --print
 * ```
 *
 * Converts:
 * <Icon icon="foo" /> to <FooIcon />
 */

import startCase from 'lodash.startcase'

function matchStringLiteralIconProps(attribute) {
  return (
    attribute.type === 'JSXAttribute' && attribute.name.name === 'icon' && attribute.value?.type === 'StringLiteral'
  )
}

export default function transform(file, api) {
  // Alias the jscodeshift API for ease of use.
  const j = api.jscodeshift

  // Convert the entire file source into a collection of nodes paths.
  const root = j(file.source)

  const evergreenImports = root
    .find(j.ImportDeclaration, {
      source: {
        value: 'evergreen-ui'
      }
    })
    .filter(path => {
      return path.node.specifiers.some(
        s => s.type === 'ImportSpecifier' && s.imported.name === 'Icon'
      )
    })
    .nodes()

  if (evergreenImports.length === 0) {
    return
  }

  // Assuming there are no duplicate import declarations
  const evergreenImport = evergreenImports[0]

  // Find icon components
  const jsxElements = root.findJSXElements('Icon').filter(path => {
    return path.node.openingElement.attributes.some(matchStringLiteralIconProps)
  })
  if (jsxElements.size() === 0) {
    return
  }

  // Swap the component name
  jsxElements.forEach(({ value: Node }) => {
    const iconProp = Node.openingElement.attributes.find(matchStringLiteralIconProps)
    if (!iconProp) {
      return
    }

    const icon = iconProp.value.value
    if (!icon) {
      return
    }

    const iconName = startCase(icon).replace(/ /g, '')
    const componentName = `${iconName}Icon`
    Node.openingElement.name = j.jsxIdentifier(componentName)

    // Replace the import path too
    const hasImportAlready = evergreenImport.specifiers.some(
      s => s.imported.name === componentName
    )
    if (!hasImportAlready) {
      evergreenImport.specifiers.push(j.importSpecifier(j.identifier(componentName)))
    }
  })

  // Remove the `icon` prop
  jsxElements
    .find(j.JSXAttribute, {
      name: {
        type: 'JSXIdentifier',
        name: 'icon'
      },
      value: {
        type: 'StringLiteral'
      }
    })
    .remove()

  // Remove `Icon` from imports if now unused
  const remainingIcons = root.findJSXElements('Icon')
  if (remainingIcons.size() === 0) {
    root
      .find(j.ImportDeclaration, {
        source: {
          value: 'evergreen-ui'
        }
      })
      .find(j.ImportSpecifier, {
        imported: {
          name: 'Icon'
        }
      })
      .remove()
  }

  return root.toSource()
}
