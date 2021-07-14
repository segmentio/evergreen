const baseStyle = {
  borderRadius: 'radii.1',
  lineHeight: 'lineHeights.1',
  color: 'colors.default',
  fontSize: 'fontSizes.1',
  paddingX: 10,

  _placeholder: {
    color: 'colors.neutralAlpha.N6A'
  },

  _disabled: {
    cursor: 'not-allowed'
  },

  _focus: {
    zIndex: 'zIndices.focused'
  }
}

const appearances = {
  default: {
    backgroundColor: 'white',
    boxShadow: theme =>
      `inset 0 0 0 1px ${theme.colors.neutralAlpha.N5A}, inset 0 1px 2px ${theme.colors.neutralAlpha.N4A}`,

    _invalid: {
      boxShadow: theme => `inset 0 0 0 1px ${theme.colors.red.base}, inset 0 1px 2px ${theme.colors.neutralAlpha.N4A}`
    },
    _focus: {
      boxShadow: theme =>
        `inset 0 0 2px ${theme.colors.neutralAlpha.N4A}, inset 0 0 0 1px ${theme.colors.blue.B7}, ${theme.shadows.focusRing}`
    },
    _disabled: {
      boxShadow: theme => `inset 0 0 0 1px ${theme.colors.neutralAlpha.N4A}`,
      backgroundColor: 'colors.neutralAlpha.N2A'
    }
  },
  neutral: {
    backgroundColor: 'colors.neutralAlpha.N2A',
    _invalid: {
      boxShadow: theme => `inset 0 0 0 1px ${theme.colors.red.base}`
    },
    _focus: {
      backgroundColor: 'white',
      boxShadow: theme => `0 0 0 2px ${theme.colors.blueAlpha.B6A}`
    },
    _disabled: {
      boxShadow: theme => `inset 0 0 0 1px ${theme.colors.neutralAlpha.N4A}`
    }
  },
  none: {
    backgroundColor: 'white',
    _disabled: {
      backgroundColor: 'colors.neutral.N2'
    }
  }
}

const sizes = {
  small: {
    height: 24
  },
  medium: {
    height: 32
  },
  large: {
    height: 40,
    lineHeight: 'lineHeights.2'
  }
}

export default {
  baseStyle,
  appearances,
  sizes
}
