import tinycolor from 'tinycolor2'
import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import rowColors from './rowColors'

/**
 * Get the appearance of a `Row`.
 * @param {string} appearance — only one default appearance.
 * @param {string} intent - none, info, success, warning, danger.
 * @param {object} theme - the theme object
 * @return {string} the appearance object.
 */
const getRowAppearance = (appearance, intent, theme) => {
  appearance = appearance || 'default' // Only one appearance right now

  // Try the user appearance + intent + type, then check our own set
  // If that fails, check just appearance + intent
  // This allows us to shortcut danger, warning, etc
  const baseBackground =
    theme?.rowColors?.[appearance]?.[intent]?.base ||
    rowColors?.[appearance]?.[intent]?.base ||
    rowColors?.[appearance]?.[intent] ||
    'inherit'

  const hoverBackground =
    theme?.rowColors?.[appearance]?.[intent]?.hover ||
    rowColors?.[appearance]?.[intent]?.hover ||
    rowColors?.[appearance]?.[intent] ||
    'inherit'

  const focusBackground =
    theme?.rowColors?.[appearance]?.[intent]?.focus ||
    rowColors?.[appearance]?.[intent]?.focus ||
    rowColors?.[appearance]?.[intent] ||
    'inherit'

  const activeBackground =
    theme?.rowColors?.[appearance]?.[intent]?.active ||
    rowColors?.[appearance]?.[intent]?.active ||
    rowColors?.[appearance]?.[intent] ||
    'inherit'

  return Themer.createRowAppearance({
    base: {
      backgroundColor: baseBackground || 'initial'
    },

    hover: {
      backgroundColor: hoverBackground
        ? tinycolor(hoverBackground)
            .darken(1)
            .toString()
        : 'initial'
    },

    focus: {
      backgroundColor: focusBackground
        ? tinycolor(focusBackground)
            .darken(2)
            .toString()
        : 'initial'
    },

    active: {
      backgroundColor: activeBackground
        ? tinycolor(activeBackground)
            .darken(3)
            .toString()
        : 'initial'
    },

    current: {}
  })
}

/**
 * Get the className of a `Row`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getRowAppearance)
