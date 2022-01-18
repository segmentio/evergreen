// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'tiny... Remove this comment to see the full error message
import tinycolor from 'tinycolor2'

const baseStyle = {
  color: (_: any, {
    color
  }: any) => `colors.${getThemeKeyForColor(color)}.base`,
  _hover: {
    color: (_: any, {
      color
    }: any) =>
      tinycolor(`colors.${getThemeKeyForColor(color)}.base`)
        .lighten(10)
        .toString()
  },
  _active: {
    color: (theme: any, {
      color
    }: any) =>
      tinycolor(theme.colors[getThemeKeyForColor(color)].base)
        .darken(10)
        .toString()
  },
  _focus: {
    boxShadow: (theme: any, {
      color
    }: any) =>
      `0 0 0 2px ${tinycolor(theme.colors[getThemeKeyForColor(color)].base)
        .setAlpha(0.4)
        .toString()}`
  }
}

const getThemeKeyForColor = (color: any) => {
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
