import tinycolor from 'tinycolor2'
import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import palette from '../foundational-styles/palette'

/**
 * The link appearance unlike the Button is based on the color property.
 * Currently the Link does not support the Intent or the appearance interface.
 * @param {string} color
 * @param {Object} theme - the current theme object
 * @return {Object} appearance of the link.
 */
const getLinkAppearance = (color, theme) => {
  // Try and find the color + base in the theme palette
  // then fall back to ours
  const colorValue =
    theme?.palette?.[color]?.base ||
    palette?.[color]?.base ||
    theme?.palette?.default?.base ||
    palette.blue.base

  return Themer.createLinkAppearance({
    base: {
      color: colorValue
    },
    hover: {
      color: tinycolor(colorValue)
        .lighten(10)
        .toString()
    },
    active: {
      color: tinycolor(colorValue)
        .darken(10)
        .toString()
    },
    focus: {
      boxShadow: `0 0 0 2px ${tinycolor(colorValue)
        .setAlpha(0.4)
        .toString()}`
    }
  })
}

/**
 * Get the className of a `Link` component.
 * @param {string} color
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getLinkAppearance)
