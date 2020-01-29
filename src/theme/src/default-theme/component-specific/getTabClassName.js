import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'
import { getDefaultControlStyles } from '../shared'
import tabColors from './tabColors'

const getDefaultAppearance = theme => {
  const defaultControlStyles = getDefaultControlStyles(theme)
  /**
   * Disabled styles are all the same.
   */
  const { disabled } = defaultControlStyles

  const N2A = theme?.scales?.neutral?.N2A || scales.neutral.N2A

  const focusShadow =
    theme?.tabColors?.focus?.shadowColor || tabColors.focus.shadowColor

  const activeBackground =
    theme?.tabColors?.active?.backgroundColor ||
    tabColors.active.backgroundColor

  const activeColor = theme?.tabColors?.active?.color || tabColors.active.color

  return Themer.createTabAppearance({
    base: {},
    hover: {
      backgroundColor: N2A
    },
    focus: {
      boxShadow: `0 0 0 2px ${focusShadow}`
    },
    active: {
      backgroundColor: activeBackground,
      color: activeColor
    },
    disabled,
    current: {}
  })
}

/**
 * Get the appearance of a `Tab`.
 * @param {string} appearance
 * @param {object} theme - the theme object
 * @return {string} the appearance object.
 */
const getTabAppearance = theme => {
  return getDefaultAppearance(theme)
}

/**
 * Get the className of a `Tab`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getTabAppearance)
