import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'
import palette from '../foundational-styles/palette'

const TagInputAppearances = {}

TagInputAppearances.default = Themer.createTagInputAppearance({
  base: {
    backgroundColor: 'white',
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 1px 2px ${
      scales.neutral.N4A
    }`
  },
  invalid: {
    boxShadow: `inset 0 0 0 1px ${palette.red.base}, inset 0 1px 2px ${
      scales.neutral.N4A
    }`
  },
  focus: {
    boxShadow: `inset 0 0 2px ${scales.neutral.N4A}, inset 0 0 0 1px ${
      scales.blue.B7
    }, 0 0 0 3px ${scales.blue.B4A}`
  },
  disabled: {
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
    backgroundColor: scales.neutral.N2
  }
})

/**
 * Get the appearance of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {Object} the appearance object.
 */
const getTextInputAppearance = () => {
  return TagInputAppearances.default
}

/**
 * Get the className of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getTextInputAppearance)
