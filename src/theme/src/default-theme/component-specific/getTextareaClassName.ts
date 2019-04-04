import { Themer } from '../../../../themer'
import scales from '../foundational-styles/scales'
import palette from '../foundational-styles/palette'
import memoizeClassName from '../utils/memoizeClassName'

const defaultAppearance = Themer.createInputAppearance({
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
  placeholder: {
    color: scales.neutral.N6A
  },
  focus: {
    outline: 'none',
    boxShadow: `inset 0 0 2px ${scales.neutral.N4A}, inset 0 0 0 1px ${
      scales.blue.B7
    }, 0 0 0 3px ${scales.blue.B4A}`
  },
  disabled: {
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
    backgroundColor: scales.neutral.N2
  }
})

const neutral = Themer.createInputAppearance({
  base: {
    backgroundColor: scales.neutral.N2A
  },
  invalid: {
    boxShadow: `inset 0 0 0 1px ${palette.red.base}`
  },
  placeholder: {
    color: scales.neutral.N6A
  },
  focus: {
    outline: 'none',
    backgroundColor: 'white',
    boxShadow: `0 0 0 2px ${scales.blue.B6A}`
  },
  disabled: {
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
    backgroundColor: scales.neutral.N2
  }
})

const editableCell = Themer.createInputAppearance({
  base: {
    backgroundColor: scales.neutral.N2A
  },
  invalid: {
    boxShadow: `inset 0 0 0 1px ${palette.red.base}`
  },
  placeholder: {
    color: scales.neutral.N6A
  },
  focus: {
    outline: 'none',
    backgroundColor: 'white',
    boxShadow: `0 0 0 2px ${scales.blue.B7}`
  },
  disabled: {
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
    backgroundColor: scales.neutral.N2
  }
})

/**
 * Get the appearance of a `TextInput`.
 * @param {string} appearance
 * @return {Object} the appearance object.
 */
const getTextareaAppearance = (appearance: string) => {
  switch (appearance) {
    case 'neutral':
      return neutral
    case 'editable-cell':
      return editableCell
    default:
      return defaultAppearance
  }
}

/**
 * Get the className of a `TextInput`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getTextareaAppearance)
