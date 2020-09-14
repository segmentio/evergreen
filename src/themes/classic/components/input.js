const baseStyle = {
  borderRadius: 'radii.1',
  fontFamily: 'fontFamilies.ui',
  lineHeight: '12px',
  color: 'colors.default',

  _placeholder: {
    color: 'colors.neutralAlpha.N6A'
  },

  _disabled: {
    cursor: 'not-allowed',
    backgroundColor: 'colors.neutralAlpha.N2'
  }
}

const appearances = {
  default: {
    backgroundColor: 'white',
    boxShadow: theme =>
      `inset 0 0 0 1px ${theme.scales.neutral.N5A}, inset 0 1px 2px ${theme.scales.neutral.N4A}`,

    _invalid: {
      boxShadow: theme =>
        `inset 0 0 0 1px ${theme.palette.red.base}, inset 0 1px 2px ${theme.scales.neutral.N4A}`
    },
    _focus: {
      boxShadow: theme =>
        `inset 0 0 2px ${theme.scales.neutral.N4A}, inset 0 0 0 1px ${theme.scales.blue.B7}, ${theme.shadows.focusRing}`
    },
    _disabled: {
      boxShadow: theme => `inset 0 0 0 1px ${theme.scales.neutral.N4A}`
    }
  },
  neutral: {
    backgroundColor: 'scales.neutral.N2A',
    _invalid: {
      boxShadow: theme => `inset 0 0 0 1px ${theme.palette.red.base}`
    },
    _focus: {
      backgroundColor: 'white',
      boxShadow: theme => `0 0 0 2px ${theme.scales.blue.B6A}`
    },
    _disabled: {
      boxShadow: theme => `inset 0 0 0 1px ${theme.scales.neutral.N4A}`
    }
  },
  none: {
    backgroundColor: 'white'
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
    lineHeight: '14px'
  }
}

export default {
  baseStyle,
  appearances,
  sizes
}
