const baseStyle = {
  paddingX: 12,
  boxSizing: 'border-box',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  overflow: 'hidden'
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
