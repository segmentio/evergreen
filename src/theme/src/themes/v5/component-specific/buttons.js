import { defaultControlStyles } from '../shared'
import scales from '../foundational-styles/scales'
import { getPrimaryButtonStylesForIntent } from '../helpers'

const buttons = {
  primary: {
    base: {
      color: 'white',
      backgroundColor: 'white',
      backgroundImage: getPrimaryButtonStylesForIntent().linearGradient.base,
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 -1px 1px 0 ${scales.neutral.N2A}`
    },
    hover: {
      backgroundImage: getPrimaryButtonStylesForIntent().linearGradient.hover
    },
    active: {
      backgroundImage: getPrimaryButtonStylesForIntent().linearGradient.active
    },
    focusAndActive: {},
    disabled: defaultControlStyles.disabled
  },
  destructive: {
    base: {
      color: 'white',
      backgroundColor: 'white',
      backgroundImage: getPrimaryButtonStylesForIntent('danger').linearGradient
        .base,
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 -1px 1px 0 ${scales.neutral.N2A}`
    },
    hover: {
      backgroundImage: getPrimaryButtonStylesForIntent('danger').linearGradient
        .hover
    },
    active: {
      backgroundImage: getPrimaryButtonStylesForIntent('danger').linearGradient
        .active
    },
    focusAndActive: {},
    disabled: defaultControlStyles.disabled
  },
  default: {
    base: {
      ...defaultControlStyles.base,
      border: 'none'
    },
    hover: defaultControlStyles.hover,
    focus: defaultControlStyles.focus,
    active: defaultControlStyles.active,
    focusAndActive: defaultControlStyles.focusAndActive,
    disabled: defaultControlStyles.disabled
  },
  minimal: {
    base: {
      backgroundColor: 'transparent'
    },
    hover: {
      backgroundColor: scales.neutral.N2A
    },
    focus: {
      boxShadow: `0 0 0 3px ${scales.blue.B5A}`
    },
    active: {
      backgroundImage: 'none',
      backgroundColor: scales.blue.B3A
    },
    focusAndActive: {},
    disabled: defaultControlStyles.disabled
  }
}

export default buttons
