const baseStyle = {
  borderRadius: 'radii.1',
  fontFamily: 'fontFamilies.ui',
  lineHeight: '12px'
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
    _placeholder: {
      color: 'scales.neutral.N6A'
    },
    _focus: {
      outline: 'none',
      boxShadow: theme =>
        `inset 0 0 2px ${theme.scales.neutral.N4A}, inset 0 0 0 1px ${theme.scales.blue.B7}, 0 0 0 3px ${theme.scales.blue.B4A}`
    },
    _disabled: {
      cursor: 'not-allowed',
      boxShadow: theme => `inset 0 0 0 1px ${theme.scales.neutral.N4A}`,
      backgroundColor: 'scales.neutral.N2'
    }
  },
  neutral: {
    backgroundColor: 'scales.neutral.N2A',
    _invalid: {
      boxShadow: theme => `inset 0 0 0 1px ${theme.palette.red.base}`
    },
    _placeholder: {
      color: 'scales.neutral.N6A'
    },
    _focus: {
      outline: 'none',
      backgroundColor: 'white',
      boxShadow: theme => `0 0 0 2px ${theme.scales.blue.B6A}`
    },
    _disabled: {
      cursor: 'not-allowed',
      boxShadow: theme => `inset 0 0 0 1px ${theme.scales.neutral.N4A}`,
      backgroundColor: 'scales.neutral.N2'
    }
  },
  none: {
    backgroundColor: 'white',
    _invalid: {},
    _placeholder: {
      color: 'scales.neutral.N6A'
    },
    _focus: {
      outline: 'none'
    },
    _disabled: {
      cursor: 'not-allowed',
      backgroundColor: 'scales.neutral.N2'
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
    lineHeight: '14px'
  }
}

export default {
  baseStyle,
  appearances,
  sizes
}
