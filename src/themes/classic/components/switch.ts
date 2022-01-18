const baseStyle = {}

const appearances = {
  default: {
    _base: {
      color: 'white',
      backgroundColor: 'scales.neutral.N5A'
    },
    _disabled: {
      opacity: 0.5,
      backgroundImage: 'none'
    },
    _hover: {
      backgroundColor: 'scales.neutral.N5A'
    },
    _active: {
      backgroundColor: 'scales.neutral.N6A'
    },
    _focus: {
      boxShadow: theme => `0 0 0 3px ${theme.scales.blue.B6A}`
    },
    _checked: {
      backgroundColor: 'scales.blue.B8',
      color: 'white'
    },
    _checkedHover: {
      backgroundColor: 'scales.blue.B8',
      color: 'white'
    },
    _checkedActive: {
      backgroundColor: 'scales.blue.B9',
      color: 'white'
    },
    _checkedDisabled: {}
  }
}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
