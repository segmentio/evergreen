const baseStyle = {
  fontFamily: 'fontFamilies.ui',
  backgroundColor: 'transparent',
  borderRadius: 'radii.1',
  paddingX: 4,
  marginX: -4,
  paddingY: 2,
  marginY: -2,
  color: 'colors.default',

  _disabled: {
    cursor: 'not-allowed',
    pointerEvents: 'none'
  },

  _focus: {
    boxShadow: theme => `0 0 0 3px ${theme.colors.blueAlpha.B5A}`
  }
}

const appearances = {}

const sizes = {
  small: {
    fontSize: 'fontSizes.1',
    lineHeight: 'lineHeights.0'
  },
  medium: {
    fontSize: 'fontSizes.1',
    lineHeight: 'lineHeights.0'
  },
  large: {
    fontSize: 'fontSizes.2',
    lineHeight: 'lineHeights.2'
  }
}

export default {
  baseStyle,
  appearances,
  sizes
}
