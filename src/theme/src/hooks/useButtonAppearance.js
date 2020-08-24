import { useMemo } from 'react'
import { css } from 'glamor'
import useTheme from '../useTheme'
import { defaultControlStyles } from '../default-theme/shared'

const { disabled } = defaultControlStyles

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
  const {
    tokens: { primary, colors },
    buttons
  } = theme

  switch (appearance) {
    case 'primary': {
      const {
        base: baseStyles = {},
        disabled: disabledStyles = {},
        hover: hoverStyles = {},
        focus: focusStyles = {},
        active: activeStyles = {},
        focusAndActive: focusAndActiveStyles = {}
      } = (buttons || {}).primary || {}

      return {
        ...base,
        backgroundColor: primary.base,
        color: 'white',
        ...baseStyles,
        [disabledState]: {
          ...disabled,
          ...disabledStyles
        },
        [hoverState]: {
          backgroundColor: primary.hover,
          ...hoverStyles
        },
        [focusState]: {
          backgroundColor: primary.hover,
          boxShadow: `0 0 0 2px ${colors.blue100}`,
          ...focusStyles
        },
        [activeState]: {
          backgroundColor: primary.active,
          ...activeStyles
        },
        [focusAndActiveState]: {
          ...focusAndActiveStyles
        }
      }
    }

    case 'destructive': {
      const {
        base: baseStyles = {},
        disabled: disabledStyles = {},
        hover: hoverStyles = {},
        focus: focusStyles = {},
        active: activeStyles = {},
        focusAndActive: focusAndActiveStyles = {}
      } = (buttons || {}).destructive || {}
      return {
        ...base,
        backgroundColor: colors.red500,
        color: 'white',
        ...baseStyles,
        [disabledState]: {
          ...disabled,
          ...disabledStyles
        },
        [hoverState]: {
          backgroundColor: colors.red600,
          ...hoverStyles
        },
        [focusState]: {
          backgroundColor: colors.red600,
          boxShadow: `0 0 0 2px ${colors.red100}`,
          ...focusStyles
        },
        [activeState]: {
          backgroundColor: colors.red700,
          ...activeStyles
        },
        [focusAndActiveState]: {
          ...focusAndActiveStyles
        }
      }
    }

    case 'minimal': {
      return {
        ...base,
        backgroundColor: 'transparent',
        color: colors.gray800,
        [focusState]: {
          boxShadow: `0 0 0 2px ${colors.blue100}`
        },
        [disabledState]: {
          ...disabled,
          color: colors.gray500,
          borderColor: colors.gray300
        },
        [hoverState]: {
          backgroundColor: colors.gray100
        },
        [activeState]: {
          backgroundColor: colors.gray200
        },
        [focusAndActiveState]: {}
      }
    }

    case 'default':
    default: {
      const {
        base: baseStyles = {},
        disabled: disabledStyles = {},
        hover: hoverStyles = {},
        focus: focusStyles = {},
        active: activeStyles = {},
        focusAndActive: focusAndActiveStyles = {}
      } = (buttons || {}).default || {}

      return {
        ...base,
        backgroundColor: 'white',
        border: `1px solid ${colors.gray500}`,
        color: colors.gray800,
        ...baseStyles,
        [disabledState]: {
          ...disabled,
          color: colors.gray500,
          borderColor: colors.gray300,
          ...disabledStyles
        },
        [hoverState]: {
          borderColor: colors.gray600,
          backgroundColor: colors.gray50,
          ...hoverStyles
        },
        [focusState]: {
          boxShadow: `0 0 0 2px ${colors.blue100}`,
          ...focusStyles
        },
        [activeState]: {
          backgroundColor: colors.gray100,
          ...activeStyles
        },
        [focusAndActiveState]: {
          ...focusAndActiveStyles
        }
      }
    }
  }
}

function useButtonAppearance(appearance) {
  const theme = useTheme()
  const className = useMemo(
    () => css(getButtonStyles(theme, appearance)).toString(),
    [appearance, theme]
  )
  return className
}

export default useButtonAppearance
