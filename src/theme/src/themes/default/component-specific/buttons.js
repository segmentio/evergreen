import tokens from '../foundational-styles/tokens'
import { defaultControlStyles } from '../shared'
import { majorScale, minorScale } from '../../../../../scales'

const { disabled } = defaultControlStyles

const buttons = {
  baseStyle: {
    WebkitFontSmoothing: 'antialiased',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    verticalAlign: 'middle',
    textDecoration: 'none',
    border: '1px solid transparent',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: tokens.fontFamilies.ui,
    borderRadius: tokens.borderRadius,
    margin: 0,
    '&::-moz-focus-inner ': {
      border: 0
    }
  },
  appearances: {
    primary: {
      backgroundColor: tokens.primary.base,
      borderColor: tokens.primary.base,
      color: 'white',

      _disabled: {
        ...disabled
      },

      _hover: {
        backgroundColor: tokens.primary.hover
      },

      _focus: {
        backgroundColor: tokens.primary.hover,
        boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
      },

      _active: {
        backgroundColor: tokens.primary.active
      }
    },
    default: {
      backgroundColor: 'white',
      border: `1px solid ${tokens.colors.gray500}`,
      color: tokens.colors.gray800,

      _disabled: {
        ...disabled,
        color: tokens.colors.gray500,
        borderColor: tokens.colors.gray300
      },

      _hover: {
        borderColor: tokens.colors.gray600,
        backgroundColor: tokens.colors.gray50
      },

      _focus: {
        boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
      },

      _active: {
        backgroundColor: tokens.colors.gray100
      }
    },
    destructive: {
      backgroundColor: tokens.colors.red500,
      color: 'white',

      _disabled: {
        ...disabled
      },

      _hover: {
        backgroundColor: tokens.colors.red600,
        boxShadow: `0 0 0 2px ${tokens.colors.red100}`
      },

      _active: {
        backgroundColor: tokens.colors.red700
      }
    },
    minimal: {
      backgroundColor: 'transparent',
      color: tokens.colors.gray800,

      _focus: {
        boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
      },

      _disabled: {
        ...disabled,
        color: tokens.colors.gray500,
        borderColor: tokens.colors.gray300
      },

      _hover: {
        backgroundColor: tokens.colors.gray100
      },

      _active: {
        backgroundColor: tokens.colors.gray200
      }
    }
  },
  sizes: {
    small: {
      ...tokens.text[300],
      height: 24,
      minWidth: 24,
      lineHeight: '24px',
      paddingLeft: minorScale(3),
      paddingRight: minorScale(3)
    },
    medium: {
      ...tokens.text[300],
      height: 32,
      minWidth: 32,
      lineHeight: '32px',
      paddingLeft: majorScale(2),
      paddingRight: majorScale(2)
    },
    large: {
      ...tokens.text[400],
      height: 40,
      minWidth: 40,
      lineHeight: '40px',
      paddingLeft: minorScale(5),
      paddingRight: minorScale(5)
    }
  }
}

export default buttons
