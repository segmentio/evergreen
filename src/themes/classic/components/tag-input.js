const baseStyle = {
  paddingY: '2px',
  paddingX: '4px',
  backgroundColor: 'white',
  borderRadius: 'radii.1'
}

const appearances = {
  default: {
    backgroundColor: 'white',
    boxShadow: theme =>
      `inset 0 0 0 1px ${theme.scales.neutral.N5A}, inset 0 1px 2px ${theme.scales.neutral.N4A}`,
    _focused: {
      boxShadow: theme =>
        `inset 0 0 2px ${theme.scales.neutral.N4A}, inset 0 0 0 1px ${theme.scales.blue.B7}, 0 0 0 3px ${theme.scales.blue.B4A}`,
      zIndex: 'zIndices.focused'
    },
    _invalid: {
      boxShadow: theme =>
        `inset 0 0 0 1px ${theme.palette.red.base}, inset 0 1px 2px ${theme.scales.neutral.N4A}`
    },
    _disabled: {
      boxShadow: theme => `inset 0 0 0 1px ${theme.scales.neutral.N4A}`,
      backgroundColor: 'scales.neutral.N2'
    }
  }
}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
