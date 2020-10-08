const baseStyle = {
  color: 'colors.dark',
  fontFamily: 'fontFamilies.display',
  fontWeight: 'fontWeights.semibold'
}

const appearances = {}

const sizes = {
  900: {
    fontSize: 'fontSizes.7',
    lineHeight: 'lineHeights.6',
    fontWeight: 'fontWeights.bold',
    letterSpacing: 'letterSpacings.tightest'
  },
  800: {
    fontSize: 'fontSizes.6',
    lineHeight: 'lineHeights.5',
    fontWeight: 'fontWeights.bold',
    letterSpacing: 'letterSpacings.tightest'
  },
  700: {
    fontSize: 'fontSizes.5',
    lineHeight: 'lineHeights.3',
    fontWeight: 'fontWeights.bold',
    letterSpacing: 'letterSpacings.tighter'
  },
  600: {
    fontSize: 'fontSizes.4',
    lineHeight: 'lineHeights.3',
    fontWeight: 'fontWeights.bold',
    letterSpacing: 'letterSpacings.tighter'
  },
  500: {
    fontFamily: 'fontFamilies.ui',
    fontSize: 'fontSizes.3',
    fontWeight: 'fontWeights.bold',
    letterSpacing: 'letterSpacings.tight',
    lineHeight: 'lineHeights.2'
  },
  400: {
    fontSize: 'fontSizes.2',
    lineHeight: 'lineHeights.1',
    letterSpacing: 'letterSpacings.tight',
    fontFamily: 'fontFamilies.ui'
  },
  300: {
    fontSize: 'fontSizes.1',
    lineHeight: 'lineHeights.0',
    letterSpacing: 'letterSpacings.normal',
    fontFamily: 'fontFamilies.ui'
  },
  200: {
    fontSize: 'fontSizes.1',
    lineHeight: 'lineHeights.0',
    letterSpacing: 'letterSpacings.normal',
    fontFamily: 'fontFamilies.ui',
    color: 'colors.muted'
  },
  100: {
    fontSize: 'fontSizes.0',
    textTransform: 'uppercase',
    lineHeight: 'lineHeights.0',
    letterSpacing: 'letterSpacings.wide',
    fontFamily: 'fontFamilies.ui',
    color: 'colors.muted'
  }
}

export default {
  baseStyle,
  appearances,
  sizes
}
