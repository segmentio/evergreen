import scales from '../foundational-styles/scales'
import palette from '../foundational-styles/palette'

export default {
  default: {
    base: 'white',
    none: 'white',
    hover: scales.neutral.N1A,
    focus: scales.blue.B1A,
    active: scales.blue.B2A,
    danger: palette.red.lightest,
    warning: palette.orange.lightest,
    success: palette.green.lightest
  }
}
