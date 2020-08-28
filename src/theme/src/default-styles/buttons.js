import { getDefaultControlStyles } from './shared'

export default function getDefaultStyles(theme) {
  const { tokens } = theme
  const { disabled } = getDefaultControlStyles()

  return {
    primary: {
      base: {
        backgroundColor: tokens.primary.base,
        borderColor: tokens.primary.base,
        color: 'white'
      },
      disabled: {
        ...disabled,
        backgroundColor: tokens.primary.disabled,
        borderColor: tokens.primary.disabled
      },
      hover: {
        backgroundColor: tokens.primary.hover
      },
      focus: {
        backgroundColor: tokens.primary.hover,
        boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
      },
      active: {
        backgroundColor: tokens.primary.active
      }
    },
    default: {
      base: {
        backgroundColor: 'white',
        border: `1px solid ${tokens.colors.gray500}`,
        color: tokens.colors.gray800
      },
      disabled: {
        ...disabled,
        color: tokens.colors.gray500,
        borderColor: tokens.colors.gray300
      },
      hover: {
        borderColor: tokens.colors.gray600,
        backgroundColor: tokens.colors.gray50
      },
      focus: {
        boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
      },
      active: {
        backgroundColor: tokens.colors.gray100
      },
      focusAndActive: {}
    },
    destructive: {
      base: {
        backgroundColor: tokens.colors.red500,
        borderColor: tokens.colors.red500,
        color: 'white'
      },
      disabled: {
        ...disabled,
        backgroundColor: tokens.colors.red100,
        borderColor: tokens.colors.red100
      },
      hover: {
        backgroundColor: tokens.colors.red600
      },
      focus: {
        backgroundColor: tokens.colors.red600,
        boxShadow: `0 0 0 2px ${tokens.colors.red100}`
      },
      active: {
        backgroundColor: tokens.colors.red700
      }
    },
    minimal: {
      base: {
        backgroundColor: 'transparent',
        color: tokens.colors.gray800
      },
      focus: {
        boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
      },
      disabled: {
        ...disabled,
        color: tokens.colors.gray500,
        borderColor: tokens.colors.gray300
      },
      hover: {
        backgroundColor: tokens.colors.gray100
      },
      active: {
        backgroundColor: tokens.colors.gray200
      },
      focusAndActive: {}
    }
  }
}
