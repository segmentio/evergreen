import { getPrimaryButtonStylesForIntent } from '../deprecated/helpers'
import { defaultControlStyles } from '../deprecated/shared'

const baseStyle = {
  fontFamily: 'fontFamilies.ui',
  borderRadius: 'radii.1',
  border: 0
}

const appearances = {
  primary: {
    backgroundColor: 'white',
    backgroundImage: (_, props) =>
      getPrimaryButtonStylesForIntent(props.intent).linearGradient.base,
    boxShadow: theme =>
      `inset 0 0 0 1px ${theme.scales.neutral.N5A}, inset 0 -1px 1px 0 ${theme.scales.neutral.N2A}`,
    color: 'white',
    _focus: {
      backgroundImage: (_, props) =>
        getPrimaryButtonStylesForIntent(props.intent).linearGradient.focus,
      boxShadow: (theme, props) =>
        `0 0 0 3px ${
          getPrimaryButtonStylesForIntent(props.intent).linearGradient
            .focusColor
        }, inset 0 0 0 1px ${theme.scales.neutral.N4A}, inset 0 -1px 1px 0 ${
          theme.scales.neutral.N5A
        }`
    },
    _hover: {
      backgroundImage: (_, props) =>
        getPrimaryButtonStylesForIntent(props.intent).linearGradient.hover
    },
    _active: {
      backgroundImage: (_, props) =>
        getPrimaryButtonStylesForIntent(props.intent).linearGradient.active
    },
    _focusAndActive: {}
  },

  default: {
    ...defaultControlStyles.base,
    _hover: {
      ...defaultControlStyles.hover
    },
    _active: {
      ...defaultControlStyles.active
    },
    _disabled: {
      ...defaultControlStyles.disabled
    }
  },
  minimal: {}
}

const sizes = {
  small: {
    height: 24,
    minWidth: 24,
    lineHeight: '24px',
    paddingLeft: 12,
    paddingRight: 12
  },
  medium: {
    height: 32,
    minWidth: 32,
    lineHeight: '32px',
    paddingLeft: 16,
    paddingRight: 16
  },
  large: {
    height: 40,
    minWidth: 40,
    lineHeight: '40px',
    paddingLeft: 20,
    paddingRight: 20
  }
}

export default {
  baseStyle,
  appearances,
  sizes
}
