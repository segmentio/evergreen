/**
 * Codemode to update icon imports
 * ```
 * npx jscodeshift -t node_modules/evergreen-ui/codemods/4.28.1-4.29.0/replace-icon-imports.js --parser=tsx --extensions=js,ts,tsx <your file target> --dry --print
 * ```
 *
 * Converts:
 * <Icon icon="foo" /> to <FooIcon />
 * <IconButton icon="foo" /> to <IconButton icon={FooIcon} />
 * <Button iconAfter="foo" /> to <Button iconAfter={FooIcon} />
 * ... and more
 */

import startCase from 'lodash.startcase'

function matchStringLiteralIconProps(attribute, prop = 'icon') {
  return (
    attribute.type === 'JSXAttribute' && attribute.name.name === prop && attribute.value && attribute.value.type === 'StringLiteral'
  )
}

const ElementProps = {
  IconButton: { props: ['icon', 'iconBefore', 'iconAfter'], componentName: 'IconButton' },
  Button: { props: ['iconBefore', 'iconAfter'], componentName: 'Button' },
  BackButton: { props: ['iconBefore', 'iconAfter'], componentName: 'BackButton' },
  TextDropdownButton: { props: ['icon'], componentName: 'TextDropdownButton' },
  SearchTableHeaderCell: { props: ['icon'], componentName: 'SearchTableHeaderCell' },
  Table: { props: ['icon'], componentName: 'Table.SearchHeaderCell' },
  SelectMenu: { props: ['filterIcon'], componentName: 'SelectMenu' },
  SelectMenuContent: { props: ['filterIcon'], componentName: 'SelectMenuContent' },
  OptionsList: { props: ['filterIcon'], componentName: 'OptionsList' },
  Menu: { props: ['icon'], componentName: 'Menu.Item' },
  ListItem: { props: ['icon'], componentName: 'ListItem' },
  UnorderedList: { props: ['icon'], componentName: 'UnorderedList' },
  Ul: { props: ['icon'], componentName: 'Ul' },
  OrderedList: { props: ['icon'], componentName: 'OrderedList' },
  Ol: { props: ['icon'], componentName: 'Ol' }
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
    .nodes()

  if (evergreenImports.length === 0) {
    return
  }

  // Assuming there are no duplicate import declarations
  const evergreenImport = evergreenImports[0]

  // Find Icon components
  root.findJSXElements('Icon')
    .filter(path => path.node.openingElement.attributes.some(a => matchStringLiteralIconProps(a, 'icon')))
    .forEach(({ value: Node }) => {
      // Swap the component name
      const iconProp = Node.openingElement.attributes.find(a => matchStringLiteralIconProps(a, 'icon'))

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

  // For all other components, find any icon-receiving props
  for (const { componentName, props } of Object.values(ElementProps)) {
    const [openingElement, identifier] = componentName.split('.')
    let components = root.findJSXElements(openingElement)

    if (identifier) {
      components = root.find(j.JSXElement, {
        openingElement: {
          name: {
            property: {
              type: 'JSXIdentifier',
              name: identifier
            }
          }
        }
      })
    }

    for (const prop of props) {
      components
        .find(j.JSXAttribute, {
          name: {
            type: 'JSXIdentifier',
            name: prop
          },
          value: {
            type: 'StringLiteral'
          }
        })
        .find(j.StringLiteral)
        .replaceWith(nodePath => {
          const { node } = nodePath

          // e.g. "add" -> "AddIcon"
          const iconName = `${startCase(node.value).replace(/ /g, '')}Icon`

          // Replace the import path too
          const hasImportAlready = evergreenImport.specifiers.some(
            s => s.imported.name === iconName
          )
          if (!hasImportAlready) {
            evergreenImport.specifiers.push(j.importSpecifier(j.identifier(iconName)))
          }

          // with a new JSX expression with the icon definition.
          return j.jsxExpressionContainer(j.identifier(iconName));
        })
    }
  }

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
