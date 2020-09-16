const baseStyle = {
  borderBottom: theme => `1px solid ${theme.colors.border.muted}`,
  _focus: {
    backgroundColor: 'colors.blue50'
  },
  _active: {
    color: 'colors.blue500',
    boxShadow: theme => `inset 2px 0 0 ${theme.colors.blue500}`
  }
}

const appearances = {}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
