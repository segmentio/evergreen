import { useMemo } from 'react'
import { css } from 'glamor'
import useTheme from '../useTheme'

const base = {
  WebkitFontSmoothing: 'antialiased',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  verticalAlign: 'middle',
  textDecoration: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  '&::-moz-focus-inner ': {
    border: 0
  }
}

const disabledState = `[disabled], [data-disabled]`
const hoverState = '&:not([disabled]):not([data-disabled]):hover'
const focusState = '&:not([disabled]):not([data-disabled]):focus'
const focusAndActiveState =
  '&:not([disabled]):not([data-disabled]):focus:active, &:not([disabled]):not([data-disabled])[aria-expanded="true"]:focus, &:not([disabled]):not([data-disabled])[data-active]:focus'
const activeState =
  '&:not([disabled]):not([data-disabled]):active, &:not([disabled]):not([data-disabled])[aria-expanded="true"], &:not([disabled]):not([data-disabled])[data-active]'

function getButtonStyles(theme, appearance) {
  const { buttons: themeStyles, tokens } = theme

  const defaultStyles = {
    primary: {
      base: {
        backgroundColor: tokens.primary.base,
        borderColor: tokens.primary.base,
        color: 'white'
      },
      disabled: { ...disabled },
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
        color: 'white'
      },
      disabled: {
        ...disabled
      },
      hover: {
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

  const buttonStyles = {...defaultStyles, ...themeStyles}

  const {
    base: baseStyles = {},
    disabled = {},
    hover = {},
    focus = {},
    active = {},
    focusAndActive = {}
  } = (buttonStyles || {})[appearance] || {}

  return {
    ...base,
    ...baseStyles,
    [disabledState]: {
      ...disabled
    },
    [hoverState]: {
      ...hover
    },
    [focusState]: {
      ...focus
    },
    [activeState]: {
      ...active
    },
    [focusAndActiveState]: {
      ...focusAndActive
    }
  }
}

function useButtonAppearance(appearance = 'default') {
  const theme = useTheme()
  const className = useMemo(
    () => css(getButtonStyles(theme, appearance)).toString(),
    [appearance, theme]
  )
  return className
}

export default useButtonAppearance
