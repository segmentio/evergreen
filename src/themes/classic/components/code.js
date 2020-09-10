const baseStyle = {}

const appearances = {
  default: {
    backgroundColor: 'colors.blueAlpha.B2A',
    boxShadow: (theme, _props) =>
      `inset 0 0 0 1px ${theme.colors.blueAlpha.B4A}`,
    paddingX: 6,
    paddingY: 3,
    borderRadius: 'radii.1'
  }
}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
