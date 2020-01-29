import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import { getDefaultControlStyles } from '../shared'
import scales from '../foundational-styles/scales'
import defaultControlColors from './defaultControlColors'

/**
 * Get the appearance of a `Select`.
 * @param {string} appearance
 * @param {object} theme - the current theme object
 * @return {string} the appearance object.
 */
const getSelectAppearance = theme => {
  const defaultControlStyles = getDefaultControlStyles(theme)

  const N4A = theme?.scales?.neutral?.N4A || scales.neutral.N4A
  const invalidColor =
    theme?.defaultControlColors?.invalid.shadowColor ||
    defaultControlColors.invalid.shadowColor

  return Themer.createSelectAppearance({
    base: defaultControlStyles.base,
    disabled: defaultControlStyles.disabled,
    invalid: {
      boxShadow: `inset 0 0 0 1px ${invalidColor}, inset 0 1px 2px ${N4A}`
    },
    hover: defaultControlStyles.hover,
    focus: defaultControlStyles.focus,
    active: defaultControlStyles.active
  })
}

/**
 * Get the className of a `Select`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getSelectAppearance)
