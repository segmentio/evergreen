import { getDefaultControlStyles } from './shared'

export default function getDefaultStyles(theme) {
  const { tokens } = theme
  const { disabled } = getDefaultControlStyles()

  return {
    baseStyle: {
      WebkitFontSmoothing: 'antialiased',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      verticalAlign: 'middle',
      textDecoration: 'none',
      border: '1px solid transparent',
      outline: 'none',
      cursor: 'pointer',
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
          ...disabled,
          backgroundColor: tokens.primary.disabled,
          borderColor: tokens.primary.disabled
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
        borderColor: tokens.colors.red500,
        color: 'white',

        _disabled: {
          ...disabled,
          backgroundColor: tokens.colors.red100,
          borderColor: tokens.colors.red100
        },

        _hover: {
          backgroundColor: tokens.colors.red600
        },

        _focus: {
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
    }
  }
}
