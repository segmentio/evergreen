import scales from '../foundational-styles/scales'
import palette from '../foundational-styles/palette'

const inputs = {
  default: {
    base: {
      backgroundColor: 'white',
      border: 'none',
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 1px 2px ${scales.neutral.N4A}`
    },
    invalid: {
      boxShadow: `inset 0 0 0 1px ${palette.red.base}, inset 0 1px 2px ${scales.neutral.N4A}`
    },
    placeholder: {
      color: scales.neutral.N6A
    },
    focus: {
      outline: 'none',
      border: 'none',
      boxShadow: `inset 0 0 2px ${scales.neutral.N4A}, inset 0 0 0 1px ${scales.blue.B7}, 0 0 0 3px ${scales.blue.B4A}`
    },
    disabled: {
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
      backgroundColor: scales.neutral.N2
    }
  }
}

export default inputs
