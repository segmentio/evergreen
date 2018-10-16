import tinycolor from 'tinycolor2'
import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import palette from '../foundational-styles/palette'

/**
 * The link appearance unlike the Button is based on the color property.
 * Currently the Link does not support the Intent or the appearance interface.
 * @param {string} color
 * @return {Object} appearance of the link.
 */
const getLinkAppearance = color => {
  switch (color) {
    case 'neutral':
      return Themer.createLinkAppearance({
        base: {
          color: palette.neutral.base
        },
        hover: {
          color: tinycolor(palette.neutral.base)
            .lighten(10)
            .toString()
        },
        active: {
          color: tinycolor(palette.neutral.base)
            .darken(10)
            .toString()
        },
        focus: {
          boxShadow: `0 0 0 2px ${tinycolor(palette.neutral.base)
            .setAlpha(0.4)
            .toString()}`
        }
      })
    case 'green':
      return Themer.createLinkAppearance({
        base: {
          color: palette.green.base
        },
        hover: {
          color: tinycolor(palette.green.base)
            .lighten(10)
            .toString()
        },
        active: {
          color: tinycolor(palette.green.base)
            .darken(10)
            .toString()
        },
        focus: {
          boxShadow: `0 0 0 2px ${tinycolor(palette.green.base)
            .setAlpha(0.4)
            .toString()}`
        }
      })
    case 'default':
    case 'blue':
    default:
      return Themer.createLinkAppearance({
        base: {
          color: palette.blue.base
        },
        hover: {
          color: tinycolor(palette.blue.base)
            .lighten(10)
            .toString()
        },
        active: {
          color: tinycolor(palette.blue.base)
            .darken(10)
            .toString()
        },
        focus: {
          boxShadow: `0 0 0 2px ${tinycolor(palette.blue.base)
            .setAlpha(0.4)
            .toString()}`
        }
      })
  }
}

/**
 * Get the className of a `Link` component.
 * @param {string} color
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getLinkAppearance)
