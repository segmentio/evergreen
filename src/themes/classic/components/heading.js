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
    letterSpacing: 'letterSpacings.tightest',
    marginTop: 52
  },
  800: {
    fontSize: 'fontSizes.6',
    lineHeight: 'lineHeights.5',
    letterSpacing: 'letterSpacings.tightest',
    marginTop: 40
  },
  700: {
    fontSize: 'fontSizes.5',
    lineHeight: 'lineHeights.3',
    letterSpacing: 'letterSpacings.tighter',
    marginTop: 40
  },
  600: {
    fontSize: 'fontSizes.4',
    lineHeight: 'lineHeights.3',
    letterSpacing: 'letterSpacings.tighter',
    marginTop: 28
  },
  500: {
    fontFamily: 'fontFamilies.ui',
    fontSize: 'fontSizes.3',
    letterSpacing: 'letterSpacings.tight',
    lineHeight: 'lineHeights.2',
    marginTop: 24
  },
  400: {
    fontSize: 'fontSizes.3',
    fontWeight: 'fontWeights.bold',
    lineHeight: 'lineHeights.2',
    letterSpacing: 'letterSpacings.tight',
    marginTop: 16,
    fontFamily: 'fontFamilies.ui'
  },
  300: {
    fontSize: 'fontSizes.1',
    fontWeight: 'fontWeights.bold',
    lineHeight: 'lineHeights.0',
    letterSpacing: 'letterSpacings.normal',
    marginTop: 16,
    fontFamily: 'fontFamilies.ui'
  },
  200: {
    fontSize: 'fontSizes.1',
    fontWeight: 'fontWeights.bold',
    lineHeight: 'lineHeights.0',
    letterSpacing: 'letterSpacings.normal',
    marginTop: 16,
    fontFamily: 'fontFamilies.ui',
    color: 'colors.muted'
  },
  100: {
    fontSize: 'fontSizes.0',
    fontWeight: 'fontWeights.normal',
    textTransform: 'uppercase',
    lineHeight: 'lineHeights.0',
    letterSpacing: 'letterSpacings.wide',
    marginTop: 16,
    fontFamily: 'fontFamilies.ui',
    color: 'colors.muted'
  }
}

export default {
  baseStyle,
  appearances,
  sizes
}
