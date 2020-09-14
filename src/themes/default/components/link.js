const getThemeKeyForColor = color => {
  switch (color) {
    case 'default':
      return 'blue'
    case 'neutral':
      return 'gray'
    default:
      return color
  }
}

const baseStyle = {
  color: (_, { color }) => `colors.${getThemeKeyForColor(color)}500`,
  _hover: {
    color: (_, { color }) => `colors.${getThemeKeyForColor(color)}400`
  },
  _active: {
    color: (_, { color }) => `colors.${getThemeKeyForColor(color)}600`
  },
  _focus: {
    boxShadow: (theme, { color }) =>
      `0 0 0 2px ${theme.colors[getThemeKeyForColor(color)]}300`
  }
}

const appearances = {}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
