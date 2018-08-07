import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'

export default ({ scales, palette }) => {
  const Appearances = {}

  Appearances.default = Themer.createInputAppearance({
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
        scales.primary.P7
      }, 0 0 0 3px ${scales.primary.P4A}`
    },
    disabled: {
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
      backgroundColor: scales.neutral.N2
    }
  })

  Appearances.neutral = Themer.createInputAppearance({
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
      boxShadow: `0 0 0 2px ${scales.primary.P6A}`
    },
    disabled: {
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
      backgroundColor: scales.neutral.N2
    }
  })

  Appearances.editableCell = Themer.createInputAppearance({
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
      boxShadow: `0 0 0 2px ${scales.primary.P7}`
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
  const getTextareaAppearance = appearance => {
    switch (appearance) {
      case 'neutral':
        return Appearances.neutral
      case 'editable-cell':
        return Appearances.editableCell
      default:
        return Appearances.default
    }
  }

  /**
   * Get the className of a `TextInput`.
   * @param {string} appearance
   * @return {string} the appearance class name.
   */
  return memoizeClassName(getTextareaAppearance)
}
