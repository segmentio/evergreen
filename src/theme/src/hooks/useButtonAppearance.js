import memoizeClassName from '../default-theme/utils/memoizeClassName'
import { defaultControlStyles } from '../default-theme/shared'
import tokens from '../default-theme/foundational-styles/tokens'
import withTheme from '../withTheme'

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

function useButtonAppearance(appearance) {
  switch (appearance) {
    case 'primary': {
      return {
        ...base,
        backgroundColor: tokens.blue500,
        color: 'white',
        [disabledState]: {
          ...disabled
        },
        [hoverState]: {
          backgroundColor: tokens.blue600
        },
        [focusState]: {
          backgroundColor: tokens.blue600,
          boxShadow: `0 0 0 2px ${tokens.blue100}`
        },
        [activeState]: {
          backgroundColor: tokens.blue700
        },
        [focusAndActiveState]: {}
      }
    }

    case 'secondary': {
      return {
        ...base,
        backgroundColor: 'white',
        border: `1px solid ${tokens.blue500}`,
        color: tokens.blue500,
        [disabledState]: {
          ...disabled
        },
        [hoverState]: {
          backgroundColor: tokens.blue50
        },
        [focusState]: {
          backgroundColor: tokens.blue100,
          boxShadow: `0 0 0 2px ${tokens.blue100}`
        },
        [activeState]: {
          backgroundColor: tokens.blue50
        },
        [focusAndActiveState]: {
          backgroundColor: tokens.blue50
        }
      }
    }

    case 'tertiary': {
      return {
        ...base,
        backgroundColor: 'transparent',
        border: `1px solid ${tokens.gray400}`,
        color: tokens.gray700,
        [disabledState]: {
          ...disabled,
          color: tokens.gray500,
          border: `1px solid ${tokens.gray300}`
        },
        [hoverState]: {
          border: `1px solid ${tokens.gray600}`,
          color: tokens.gray800
        },
        [focusState]: {
          boxShadow: `0 0 0 2px ${tokens.blue100}`,
          color: tokens.gray800
        },
        [activeState]: {
          backgroundColor: tokens.gray100
        },
        [focusAndActiveState]: {}
      }
    }

    case 'destructive': {
      return {
        ...base,
        backgroundColor: tokens.red500,
        color: 'white',
        [disabledState]: {
          ...disabled
        },
        [hoverState]: {
          backgroundColor: tokens.red600
        },
        [focusState]: {
          backgroundColor: tokens.red600,
          boxShadow: `0 0 0 2px ${tokens.red100}`
        },
        [activeState]: {
          backgroundColor: tokens.red700
        },
        [focusAndActiveState]: {}
      }
    }
  }
}

export default memoizeClassName(useButtonAppearance)
