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
    letterSpacing: 'letterSpacings.tightest'
  },
  800: {
    fontSize: 'fontSizes.6',
    lineHeight: 'lineHeights.5',
    letterSpacing: 'letterSpacings.tightest'
  },
  700: {
    fontSize: 'fontSizes.5',
    lineHeight: 'lineHeights.3',
    letterSpacing: 'letterSpacings.tighter'
  },
  600: {
    fontSize: 'fontSizes.4',
    lineHeight: 'lineHeights.3',
    letterSpacing: 'letterSpacings.tighter'
  },
  500: {
    fontFamily: 'fontFamilies.ui',
    fontSize: 'fontSizes.3',
    letterSpacing: 'letterSpacings.tight',
    lineHeight: 'lineHeights.2'
  },
  400: {
    fontSize: 'fontSizes.2',
    fontWeight: 'fontWeights.bold',
    lineHeight: 'lineHeights.1',
    letterSpacing: 'letterSpacings.tight',
    fontFamily: 'fontFamilies.ui'
  },
  300: {
    fontSize: 'fontSizes.1',
    fontWeight: 'fontWeights.bold',
    lineHeight: 'lineHeights.0',
    letterSpacing: 'letterSpacings.normal',
    fontFamily: 'fontFamilies.ui'
  },
  200: {
    fontSize: 'fontSizes.1',
    fontWeight: 'fontWeights.bold',
    lineHeight: 'lineHeights.0',
    letterSpacing: 'letterSpacings.normal',
    fontFamily: 'fontFamilies.ui',
    color: 'colors.muted'
  },
  100: {
    fontSize: 'fontSizes.0',
    fontWeight: 'fontWeights.normal',
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
