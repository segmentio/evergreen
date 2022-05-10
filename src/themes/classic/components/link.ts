import tinycolor from 'tinycolor2'

const getThemeKeyForColor = (color: string) => {
  switch (color) {
    case 'blue':
    case 'neutral':
    case 'green':
      return color
    default:
      return 'blue'
  }
}

const baseStyle = {
  color: (_: any, { color }: any) => `colors.${getThemeKeyForColor(color)}.base`,
  _hover: {
    color: (_: any, { color }: any) =>
      tinycolor(`colors.${getThemeKeyForColor(color)}.base`)
        .lighten(10)
        .toString(),
  },
  _active: {
    color: (theme: any, { color }: any) =>
      tinycolor(theme.colors[getThemeKeyForColor(color)].base).darken(10).toString(),
  },
  _focus: {
    boxShadow: (theme: any, { color }: any) =>
      `0 0 0 2px ${tinycolor(theme.colors[getThemeKeyForColor(color)].base).setAlpha(0.4).toString()}`,
  },
}

const appearances = {}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes,
}
