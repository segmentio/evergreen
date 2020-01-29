import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'
import defaultControlColors from './defaultControlColors'
import textareaColors from './textareaColors'

const Appearances = {}

Appearances.default = theme => {
  const N2 = theme?.scales?.neutral?.N2 || scales.neutral.N2
  const N4A = theme?.scales?.neutral?.N4A || scales.neutral.N4A
  const N5A = theme?.scales?.neutral?.N5A || scales.neutral.N5A
  const N6A = theme?.scales?.neutral?.N6A || scales.neutral.N6A

  const baseBg =
    theme?.textareaColors?.default?.base?.backgroundColor ||
    textareaColors.default.base.backgroundColor

  const invalidShadow =
    theme?.defaultControlColors?.invalid?.shadowColor ||
    defaultControlColors.invalid.shadowColor

  const focusFirstShadow =
    theme?.textareaColors?.default?.focus?.shadowColor1 ||
    textareaColors.default.focus.shadowColor1

  const focusSecondShadow =
    theme?.textareaColors?.default?.focus?.shadowColor2 ||
    textareaColors.default.focus.shadowColor2

  return Themer.createInputAppearance({
    base: {
      backgroundColor: baseBg,
      boxShadow: `inset 0 0 0 1px ${N5A}, inset 0 1px 2px ${N4A}`
    },
    invalid: {
      boxShadow: `inset 0 0 0 1px ${invalidShadow}, inset 0 1px 2px ${N4A}`
    },
    placeholder: {
      color: N6A
    },
    focus: {
      outline: 'none',
      boxShadow: `inset 0 0 2px ${N4A}, inset 0 0 0 1px ${focusFirstShadow}, 0 0 0 3px ${focusSecondShadow}`
    },
    disabled: {
      boxShadow: `inset 0 0 0 1px ${N4A}`,
      backgroundColor: N2
    }
  })
}

Appearances.neutral = theme => {
  const N2 = theme?.scales?.neutral?.N2 || scales.neutral.N2
  const N2A = theme?.scales?.neutral?.N2A || scales.neutral.N2A
  const N4A = theme?.scales?.neutral?.N4A || scales.neutral.N4A
  const N6A = theme?.scales?.neutral?.N6A || scales.neutral.N6A

  const invalidShadow =
    theme?.defaultControlColors?.invalid?.shadowColor ||
    defaultControlColors.invalid.shadowColor

  const focusShadow =
    theme?.textareaColors?.neutral?.focus?.shadowColor ||
    textareaColors.neutral.focus.shadowColor

  return Themer.createInputAppearance({
    base: {
      backgroundColor: N2A
    },
    invalid: {
      boxShadow: `inset 0 0 0 1px ${invalidShadow}`
    },
    placeholder: {
      color: N6A
    },
    focus: {
      outline: 'none',
      backgroundColor: 'white',
      boxShadow: `0 0 0 2px ${focusShadow}`
    },
    disabled: {
      boxShadow: `inset 0 0 0 1px ${N4A}`,
      backgroundColor: N2
    }
  })
}

Appearances.editableCell = theme => {
  const N2 = theme?.scales?.neutral?.N2 || scales.neutral.N2
  const N2A = theme?.scales?.neutral?.N2A || scales.neutral.N2A
  const N4A = theme?.scales?.neutral?.N4A || scales.neutral.N4A
  const N6A = theme?.scales?.neutral?.N6A || scales.neutral.N6A

  const invalidShadow =
    theme?.defaultControlColors?.invalid?.shadowColor ||
    defaultControlColors.invalid.shadowColor

  const focusShadow =
    theme?.textareaColors?.editableCell?.focus?.shadowColor ||
    textareaColors.editableCell.focus.shadowColor

  return Themer.createInputAppearance({
    base: {
      backgroundColor: N2A
    },
    invalid: {
      boxShadow: `inset 0 0 0 1px ${invalidShadow}`
    },
    placeholder: {
      color: N6A
    },
    focus: {
      outline: 'none',
      backgroundColor: 'white',
      boxShadow: `0 0 0 2px ${focusShadow}`
    },
    disabled: {
      boxShadow: `inset 0 0 0 1px ${N4A}`,
      backgroundColor: N2
    }
  })
}

/**
 * Get the appearance of a `TextInput`.
 * @param {string} appearance
 * @param {Object} theme the current theme
 * @return {Object} the appearance object.
 */
const getTextareaAppearance = (appearance, theme) => {
  switch (appearance) {
    case 'neutral':
      return Appearances.neutral(theme)
    case 'editable-cell':
      return Appearances.editableCell(theme)
    default:
      return Appearances.default(theme)
  }
}

/**
 * Get the className of a `TextInput`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getTextareaAppearance)
