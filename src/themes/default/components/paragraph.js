const baseStyle = {
  fontFamily: (theme, { fontFamily = 'ui' }) =>
    theme.fontFamilies[fontFamily] ? `fontFamilies.${fontFamily}` : fontFamily,
  color: (theme, { color = 'default' }) => (theme.colors[color] ? `colors.${color}` : color),
  marginTop: 0,
  marginBottom: 0
}

const appearances = {}

const paragraphSizes = {
  300: {
    fontSize: 'fontSizes.1',
    fontWeight: 'fontWeights.normal',
    lineHeight: 'lineHeights.1',
    letterSpacing: 'letterSpacings.normal'
  },
  400: {
    fontSize: 'fontSizes.2',
    fontWeight: 'fontWeights.normal',
    lineHeight: 'lineHeights.3',
    letterSpacing: 'letterSpacings.tight'
  },
  500: {
    fontSize: 'fontSizes.3',
    fontWeight: 'fontWeights.normal',
    lineHeight: 'lineHeights.3',
    letterSpacing: 'letterSpacings.tight'
  },
  600: {
    fontSize: 'fontSizes.4',
    fontWeight: 'fontWeights.normal',
    lineHeight: 'lineHeights.4',
    letterSpacing: 'letterSpacings.tighter'
  }
}

const sizes = {
  ...paragraphSizes,
  small: paragraphSizes['300'],
  medium: paragraphSizes['400'],
  large: paragraphSizes['500']
}

export default {
  baseStyle,
  appearances,
  sizes
}
