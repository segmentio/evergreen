import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'
import textInputColors from './textInputColors'
import defaultControlColors from './defaultControlColors'

const InputAppearances = {}

InputAppearances.default = theme => {
  const N2 = theme?.scales?.neutral?.N2 || scales.neutral.N2
  const N4A = theme?.scales?.neutral?.N4A || scales.neutral.N4A
  const N5A = theme?.scales?.neutral?.N5A || scales.neutral.N5A
  const N6A = theme?.scales?.neutral?.N6A || scales.neutral.N6A

  const baseBg =
    theme?.textInputColors?.default?.base?.backgroundColor ||
    textInputColors.default.base.backgroundColor

  const invalidShadow =
    theme?.defaultControlColors?.invalid?.shadowColor ||
    defaultControlColors.invalid.shadowColor

  const focusFirstShadow =
    theme?.textInputColors?.default?.focus?.shadowColor1 ||
    textInputColors.default.focus.shadowColor1

  const focusSecondShadow =
    theme?.textInputColors?.default?.focus?.shadowColor2 ||
    textInputColors.default.focus.shadowColor2

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

InputAppearances.neutral = theme => {
  const N2 = theme?.scales?.neutral?.N2 || scales.neutral.N2
  const N2A = theme?.scales?.neutral?.N2A || scales.neutral.N2A
  const N4A = theme?.scales?.neutral?.N4A || scales.neutral.N4A
  const N6A = theme?.scales?.neutral?.N6A || scales.neutral.N6A

  const invalidShadow =
    theme?.defaultControlColors?.invalid?.shadowColor ||
    defaultControlColors.invalid.shadowColor

  const focusShadow =
    theme?.textInputColors?.neutral?.focus?.shadowColor ||
    textInputColors.neutral.focus.shadowColor

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

InputAppearances.none = theme => {
  const N2 = theme?.scales?.neutral?.N2 || scales.neutral.N2
  const N6A = theme?.scales?.neutral?.N6A || scales.neutral.N6A

  const baseBg =
    theme?.textInputColors?.none?.base?.backgroundColor ||
    textInputColors.none.base.backgroundColor

  return Themer.createInputAppearance({
    base: {
      backgroundColor: baseBg
    },
    invalid: {},
    placeholder: {
      color: N6A
    },
    focus: {
      outline: 'none'
    },
    disabled: {
      backgroundColor: N2
    }
  })
}

/**
 * Get the appearance of a `TextInput`.
 * @param {string} appearance - the appearance name
 * @param {Object} theme the current theme object
 * @return {Object} the appearance object.
 */
const getTextInputAppearance = (appearance, theme) => {
  switch (appearance) {
    case 'neutral':
      return InputAppearances.neutral(theme)
    case 'none':
      return InputAppearances.none(theme)
    default:
      return InputAppearances.default(theme)
  }
}

/**
 * Get the className of a `TextInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getTextInputAppearance)
