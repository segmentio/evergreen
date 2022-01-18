import tinycolor from 'tinycolor2'

const baseStyle = {
  color: (_, { color }) => `colors.${getThemeKeyForColor(color)}.base`,
  _hover: {
    color: (_, { color }) =>
      tinycolor(`colors.${getThemeKeyForColor(color)}.base`)
        .lighten(10)
        .toString()
  },
  _active: {
    color: (theme, { color }) =>
      tinycolor(theme.colors[getThemeKeyForColor(color)].base)
        .darken(10)
        .toString()
  },
  _focus: {
    boxShadow: (theme, { color }) =>
      `0 0 0 2px ${tinycolor(theme.colors[getThemeKeyForColor(color)].base)
        .setAlpha(0.4)
        .toString()}`
  }
}

const getThemeKeyForColor = color => {
  switch (color) {
    case 'blue':
    case 'neutral':
    case 'green':
      return color
    default:
      return 'blue'
  }
}

const appearances = {}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
