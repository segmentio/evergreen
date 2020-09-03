import { defaultControlStyles } from '../shared'
import scales from '../foundational-styles/scales'
import { getPrimaryButtonStylesForIntent } from '../helpers'

const buttons = {
  appearances: {
    primary: {
      color: 'white',
      backgroundColor: 'white',
      backgroundImage: getPrimaryButtonStylesForIntent().linearGradient.base,
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 -1px 1px 0 ${scales.neutral.N2A}`,

      _hover: {
        backgroundImage: getPrimaryButtonStylesForIntent().linearGradient.hover
      },

      _active: {
        backgroundImage: getPrimaryButtonStylesForIntent().linearGradient.active
      },

      _disabled: {
        ...defaultControlStyles.disabled
      }
    },
    destructive: {
      color: 'white',
      backgroundColor: 'white',
      backgroundImage: getPrimaryButtonStylesForIntent('danger').linearGradient
        .base,
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 -1px 1px 0 ${scales.neutral.N2A}`,

      _hover: {
        backgroundImage: getPrimaryButtonStylesForIntent('danger')
          .linearGradient.hover
      },

      _active: {
        backgroundImage: getPrimaryButtonStylesForIntent('danger')
          .linearGradient.active
      },

      _disabled: {
        ...defaultControlStyles.disabled
      }
    },
    default: {
      ...defaultControlStyles.base,
      border: 'none',

      _hover: defaultControlStyles.hover,
      _focus: defaultControlStyles.focus,
      _active: defaultControlStyles.active,
      _focusAndActive: defaultControlStyles.focusAndActive,
      _disabled: defaultControlStyles.disabled
    },
    minimal: {
      backgroundColor: 'transparent',

      _hover: {
        backgroundColor: scales.neutral.N2A
      },
      _focus: {
        boxShadow: `0 0 0 3px ${scales.blue.B5A}`
      },
      _active: {
        backgroundImage: 'none',
        backgroundColor: scales.blue.B3A
      },
      _disabled: defaultControlStyles.disabled
    }
  }
}

export default buttons
