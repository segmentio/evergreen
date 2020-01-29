import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'
import defaultControlColors from './defaultControlColors'
import tagInputColors from './tagInputColors'

const TagInputAppearances = {}

TagInputAppearances.default = theme => {
  const N2 = theme?.scales?.neutral?.N2 || scales.neutral.N2
  const N4A = theme?.scales?.neutral?.N4A || scales.neutral.N4A
  const N5A = theme?.scales?.neutral?.N5A || scales.neutral.N5A

  const baseBg =
    theme?.tagInputColors?.base?.backgroundColor ||
    tagInputColors.base.backgroundColor

  const invalidShadow =
    theme?.defaultControlColors?.invalid?.shadowColor ||
    defaultControlColors.invalid.shadowColor

  const focusFirstShadow =
    theme?.tagInputColors?.focus?.shadowColor1 ||
    tagInputColors.focus.shadowColor1

  const focusSecondShadow =
    theme?.tagInputColors?.focus?.shadowColor2 ||
    tagInputColors.focus.shadowColor2

  return Themer.createTagInputAppearance({
    base: {
      backgroundColor: baseBg,
      boxShadow: `inset 0 0 0 1px ${N5A}, inset 0 1px 2px ${N4A}`
    },
    invalid: {
      boxShadow: `inset 0 0 0 1px ${invalidShadow}, inset 0 1px 2px ${N4A}`
    },
    focus: {
      boxShadow: `inset 0 0 2px ${N4A}, inset 0 0 0 1px ${focusFirstShadow}, 0 0 0 3px ${focusSecondShadow}`
    },
    disabled: {
      boxShadow: `inset 0 0 0 1px ${N4A}`,
      backgroundColor: N2
    }
  })
}

/**
 * Get the appearance of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @param {Object} theme - the current theme object
 * @return {Object} the appearance object.
 */
const getTextInputAppearance = theme => {
  return TagInputAppearances.default(theme)
}

/**
 * Get the className of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getTextInputAppearance)
