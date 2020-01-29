import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'
import switchColors from './switchColors'

const getDefaultAppearance = theme => {
  const N5A = theme?.scales?.neutral?.N5A || scales.neutral.N5A
  const N6A = theme?.scales?.neutral?.N6A || scales.neutral.N6A

  const focusShadow =
    theme?.switchColors?.focus?.shadowColor || switchColors.focus.shadowColor

  const checkedBackground =
    theme?.switchColors?.checked?.backgroundColor ||
    switchColors.checked.backgroundColor

  const checkedColor =
    theme?.switchColors?.checked?.color || switchColors.checked.color

  const checkedHoverBackground =
    theme?.switchColors?.checkedHover?.backgroundColor ||
    switchColors.checkedHover.backgroundColor

  const checkedHoverColor =
    theme?.switchColors?.checkedHover?.color || switchColors.checkedHover.color

  const checkedActiveBackground =
    theme?.switchColors?.checkedActive?.backgroundColor ||
    switchColors.checkedActive.backgroundColor

  const checkedActiveColor =
    theme?.switchColors?.checkedActive?.color ||
    switchColors.checkedActive.color

  return Themer.createSwitchAppearance({
    base: {
      transition: 'all 120ms ease-in-out',
      cursor: 'pointer',
      color: 'white',
      backgroundColor: N5A,
      borderRadius: 9999
    },
    disabled: {
      opacity: 0.5,
      backgroundImage: 'none'
    },
    hover: {
      backgroundColor: N5A
    },
    active: {
      backgroundColor: N6A
    },
    focus: {
      boxShadow: `0 0 0 3px ${focusShadow}`
    },
    checked: {
      backgroundColor: checkedBackground,
      color: checkedColor
    },
    checkedHover: {
      backgroundColor: checkedHoverBackground,
      color: checkedHoverColor
    },
    checkedActive: {
      backgroundColor: checkedActiveBackground,
      color: checkedActiveColor
    },
    checkedDisabled: {}
  })
}

/**
 * Get the className of a `Switch`.
 * @param {string} appearance
 * @param {object} theme - the current theme object
 * @return {Object} the appearance object.
 */
const getSwitchAppearance = theme => {
  return getDefaultAppearance(theme)
}

/**
 * Get the className of a `Switch`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getSwitchAppearance)
