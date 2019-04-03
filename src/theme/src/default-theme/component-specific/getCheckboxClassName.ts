import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'
import { getPrimaryButtonStylesForIntent } from '../helpers'

const primaryStyle = getPrimaryButtonStylesForIntent()

const defaultAppearance = Themer.createCheckboxAppearance({
  base: {
    color: 'white',
    backgroundColor: 'white',
    backgroundImage: `linear-gradient(to top, ${scales.neutral.N2A}, white)`,
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${
      scales.neutral.N3A
    }`
  },
  disabled: {
    cursor: 'not-allowed',
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
    backgroundColor: scales.neutral.N2A,
    backgroundImage: 'none'
  },
  hover: {
    backgroundImage: `linear-gradient(to top, ${scales.neutral.N2A}, ${
      scales.neutral.N1A
    })`,
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${
      scales.neutral.N2A
    }`
  },
  focus: {
    boxShadow: `0 0 0 2px ${scales.blue.B4A}, inset 0 0 0 1px ${
      scales.neutral.N5A
    }, inset 0 -1px 1px 0 ${scales.neutral.N3A}`
  },
  active: {
    backgroundImage: 'none',
    backgroundColor: scales.blue.B3A,
    boxShadow: `inset 0 0 0 1px ${scales.blue.B5A}`
  },
  checked: {
    color: 'white',
    backgroundImage: primaryStyle.linearGradient.base,
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 -1px 1px 0 ${
      scales.neutral.N2A
    }`
  },
  checkedHover: {
    color: 'white',
    backgroundImage: primaryStyle.linearGradient.hover,
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 -1px 1px 0 ${
      scales.neutral.N2A
    }`
  },
  checkedDisabled: {
    color: scales.neutral.N6A,
    backgroundImage: `linear-gradient(to top, ${scales.neutral.N2A}, ${
      scales.neutral.N1A
    })`,
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${
      scales.neutral.N2A
    }`
  },
  checkedActive: {
    color: 'white',
    backgroundImage: primaryStyle.linearGradient.active,
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${
      scales.neutral.N2A
    }`
  }
})

/**
 * There is only a single appearance in the default theme.
 * @param {String} appearance.
 * @return {Object} the appearance of the checkbox.
 */
const getCheckboxAppearance = () => {
  return defaultAppearance
}

/**
 * Get the className of a `Checkbox`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getCheckboxAppearance)
