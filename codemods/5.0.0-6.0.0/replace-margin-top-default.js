/**
 * Codemode to update `marginTop="default" to directly-supported values
 * ```
 * npx jscodeshift -t node_modules/evergreen-ui/codemods/5.0.0-6.0.0/replace-margin-top-default.js --parser=tsx --extensions=js,ts,tsx <your file target> --dry --print
 * ```
 *
 * Converts:
 * <Heading marginTop="default" /> to <Heading marginTop={24} />
 * <Heading size={100} marginTop="default">...</Heading> to <Heading size={100} marginTop={16} />
 * ...etc
 */

// Press ctrl+space for code completion
const SIZE_TO_MARGIN_TOP_MAPPING = {
  100: 16,
  200: 16,
  300: 16,
  400: 16,
  500: 24,
  600: 28,
  700: 40,
  800: 40,
  900: 52
}

const DEFAULT_HEADING_SIZE = 500

export default function transformer(file, api) {
  const j = api.jscodeshift

  const root = j(file.source)

  const elements = root.findJSXElements('Heading')

  elements.forEach(el => {
    const attributes = el.node.openingElement.attributes
    const sizeAttribute = attributes.find(attr => attr.name.name === 'size')
    const marginTopAttribute = attributes.find(
      attr => attr.name && attr.name.name && attr.name.name === 'marginTop'
    )

    if (marginTopAttribute && marginTopAttribute.value && marginTopAttribute.value.value === 'default') {
      const headingSize =
        (sizeAttribute &&
          sizeAttribute.value &&
          sizeAttribute.value.expression &&
          sizeAttribute.value.expression.value) ||
        DEFAULT_HEADING_SIZE
      marginTopAttribute.value = j.jsxExpressionContainer(
        j.literal(SIZE_TO_MARGIN_TOP_MAPPING[headingSize])
      )
    }
  })

  return root.toSource()
}
