import { linearGradient } from './helpers'
import scales from './foundational-styles/scales'

const defaultControlStyles = {
  disabled: {
    opacity: 0.8,
    backgroundImage: 'none',
    backgroundColor: scales.neutral.N2A,
    boxShadow: 'none',
    color: scales.neutral.N7A,
    pointerEvents: 'none'
  },
  base: {
    backgroundColor: 'white',
    backgroundImage: linearGradient('#FFFFFF', '#F4F5F7'),
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${
      scales.neutral.N2A
    }`
  },
  hover: {
    backgroundImage: linearGradient('#FAFBFB', '#EAECEE')
  },
  focus: {
    boxShadow: `0 0 0 3px ${scales.blue.B4A}, inset 0 0 0 1px ${
      scales.neutral.N5A
    }, inset 0 -1px 1px 0 ${scales.neutral.N4A}`
  },
  active: {
    backgroundImage: 'none',
    backgroundColor: scales.blue.B3A,
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 1px 1px 0 ${
      scales.neutral.N2A
    }`
  },
  focusAndActive: {
    boxShadow: `0 0 0 3px ${scales.blue.B4A}, inset 0 0 0 1px ${
      scales.neutral.N5A
    }, inset 0 1px 1px 0 ${scales.neutral.N2A}`
  }
}

// Can't figure out to disable rule for xo linter.
const ignore = null

export { defaultControlStyles, ignore }
