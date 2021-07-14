const baseStyle = {
  paddingX: 12
}

const appearances = {
  default: {
    _focus: {
      outline: 'none',
      backgroundColor: 'colors.blueAlpha.B2A',
      boxShadow: theme => `inset 0 0 0 1px ${theme.colors.blueAlpha.B7A}`
    }
  }
}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
