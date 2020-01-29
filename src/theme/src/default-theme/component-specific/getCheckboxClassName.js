import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'
import { getPrimaryButtonStylesForIntent } from '../helpers'
import checkboxColors from './checkboxColors'

const getDefaultAppearance = theme => {
  const primaryStyle = getPrimaryButtonStylesForIntent(theme)

  const N1A = theme?.scales?.neutral?.N1A || scales.neutral.N1A
  const N2A = theme?.scales?.neutral?.N2A || scales.neutral.N2A
  const N3A = theme?.scales?.neutral?.N3A || scales.neutral.N3A
  const N4A = theme?.scales?.neutral?.N4A || scales.neutral.N4A
  const N5A = theme?.scales?.neutral?.N5A || scales.neutral.N5A
  const N6A = theme?.scales?.neutral?.N6A || scales.neutral.N6A

  const focusShadow =
    theme?.checkboxColors?.focus?.shadowColor ||
    checkboxColors.focus.shadowColor
  const activeBackground =
    theme?.checkboxColors?.active?.backgroundColor ||
    checkboxColors.active.backgroundColor
  const activeShadow =
    theme?.checkboxColors?.active?.shadowColor ||
    checkboxColors.active.shadowColor

  return Themer.createCheckboxAppearance({
    base: {
      color: 'white',
      backgroundColor: 'white',
      backgroundImage: `linear-gradient(to top, ${N2A}, white)`,
      boxShadow: `inset 0 0 0 1px ${N4A}, inset 0 -1px 1px 0 ${N3A}`
    },
    disabled: {
      cursor: 'not-allowed',
      boxShadow: `inset 0 0 0 1px ${N4A}`,
      backgroundColor: N2A,
      backgroundImage: 'none'
    },
    hover: {
      backgroundImage: `linear-gradient(to top, ${N2A}, ${N1A})`,
      boxShadow: `inset 0 0 0 1px ${N4A}, inset 0 -1px 1px 0 ${N2A}`
    },
    focus: {
      boxShadow: `0 0 0 2px ${focusShadow}, inset 0 0 0 1px ${N5A}, inset 0 -1px 1px 0 ${N3A}`
    },
    active: {
      backgroundImage: 'none',
      backgroundColor: activeBackground,
      boxShadow: `inset 0 0 0 1px ${activeShadow}`
    },
    checked: {
      color: 'white',
      backgroundImage: primaryStyle.linearGradient.base,
      boxShadow: `inset 0 0 0 1px ${N5A}, inset 0 -1px 1px 0 ${N2A}`
    },
    checkedHover: {
      color: 'white',
      backgroundImage: primaryStyle.linearGradient.hover,
      boxShadow: `inset 0 0 0 1px ${N5A}, inset 0 -1px 1px 0 ${N2A}`
    },
    checkedDisabled: {
      color: N6A,
      backgroundImage: `linear-gradient(to top, ${N2A}, ${N1A})`,
      boxShadow: `inset 0 0 0 1px ${N4A}, inset 0 -1px 1px 0 ${N2A}`
    },
    checkedActive: {
      color: 'white',
      backgroundImage: primaryStyle.linearGradient.active,
      boxShadow: `inset 0 0 0 1px ${N4A}, inset 0 -1px 1px 0 ${N2A}`
    }
  })
}

/**
 * There is only a single appearance in the default theme.
 * @param {String} appearance.
 * @param {Object} theme - the current theme
 * @return {Object} the appearance of the checkbox.
 */
const getCheckboxAppearance = theme => {
  return getDefaultAppearance(theme)
}

/**
 * Get the className of a `Checkbox`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getCheckboxAppearance)
