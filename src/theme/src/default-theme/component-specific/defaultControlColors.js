import scales from '../foundational-styles/scales'
import palette from '../foundational-styles/palette'

export default {
  base: {
    backgroundColor: 'white',
    gradientStart: '#FFFFFF',
    gradientEnd: '#F4F5F7'
  },
  hover: {
    gradientStart: '#FAFBFB',
    gradientEnd: '#EAECEE'
  },
  focus: {
    shadowColor: scales.blue.B4A
  },
  active: {
    backgroundColor: scales.blue.B3A
  },
  focusAndActive: {
    shadowColor: scales.blue.B4A
  },
  invalid: {
    shadowColor: palette.red.base
  }
}
