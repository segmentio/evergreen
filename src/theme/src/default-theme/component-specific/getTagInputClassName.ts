// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../../../themer' or its cor... Remove this comment to see the full error message
import { Themer } from '../../../../themer'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../foundational-styles/palette... Remove this comment to see the full error message
import palette from '../foundational-styles/palette'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../foundational-styles/scales'... Remove this comment to see the full error message
import scales from '../foundational-styles/scales'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../utils/memoizeClassName' or ... Remove this comment to see the full error message
import memoizeClassName from '../utils/memoizeClassName'

const TagInputAppearances = {}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'default' does not exist on type '{}'.
TagInputAppearances.default = Themer.createTagInputAppearance({
  base: {
    backgroundColor: 'white',
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 1px 2px ${scales.neutral.N4A}`
  },
  invalid: {
    boxShadow: `inset 0 0 0 1px ${palette.red.base}, inset 0 1px 2px ${scales.neutral.N4A}`
  },
  focus: {
    boxShadow: `inset 0 0 2px ${scales.neutral.N4A}, inset 0 0 0 1px ${scales.blue.B7}, 0 0 0 3px ${scales.blue.B4A}`
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
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'default' does not exist on type '{}'.
  return TagInputAppearances.default
}

/**
 * Get the className of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getTextInputAppearance)
