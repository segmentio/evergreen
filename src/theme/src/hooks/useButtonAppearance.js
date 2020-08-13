import useTheme from '../useTheme'
import memoizeClassName from '../default-theme/utils/memoizeClassName'
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

function useButtonAppearance(appearance) {
  const {
    tokens: { primary, colors }
  } = useTheme()

  switch (appearance) {
    case 'primary': {
      return {
        ...base,
        backgroundColor: primary.base,
        color: 'white',
        [disabledState]: {
          ...disabled
        },
        [hoverState]: {
          backgroundColor: primary.hover
        },
        [focusState]: {
          backgroundColor: primary.hover,
          boxShadow: `0 0 0 2px ${colors.blue100}`
        },
        [activeState]: {
          backgroundColor: primary.active
        },
        [focusAndActiveState]: {}
      }
    }

    case 'secondary': {
      return {
        ...base,
        backgroundColor: 'white',
        border: `1px solid ${primary.base}`,
        color: primary.base,
        [disabledState]: {
          ...disabled
        },
        [hoverState]: {
          backgroundColor: colors.blue50
        },
        [focusState]: {
          backgroundColor: colors.blue100,
          boxShadow: `0 0 0 2px ${colors.blue100}`
        },
        [activeState]: {
          backgroundColor: colors.blue50
        },
        [focusAndActiveState]: {
          backgroundColor: colors.blue50
        }
      }
    }

    case 'tertiary': {
      return {
        ...base,
        backgroundColor: 'white',
        border: `1px solid ${colors.gray400}`,
        color: colors.gray700,
        [disabledState]: {
          ...disabled,
          color: colors.gray500,
          border: `1px solid ${colors.gray300}`
        },
        [hoverState]: {
          border: `1px solid ${colors.gray600}`,
          color: colors.gray800
        },
        [focusState]: {
          boxShadow: `0 0 0 2px ${colors.blue100}`,
          color: colors.gray800
        },
        [activeState]: {
          backgroundColor: colors.gray100
        },
        [focusAndActiveState]: {}
      }
    }

    case 'destructive': {
      return {
        ...base,
        backgroundColor: colors.red500,
        color: 'white',
        [disabledState]: {
          ...disabled
        },
        [hoverState]: {
          backgroundColor: colors.red600
        },
        [focusState]: {
          backgroundColor: colors.red600,
          boxShadow: `0 0 0 2px ${colors.red100}`
        },
        [activeState]: {
          backgroundColor: colors.red700
        },
        [focusAndActiveState]: {}
      }
    }

    default: {
      return {
        ...base,
        backgroundColor: 'transparent',
        border: `1px solid ${colors.gray400}`,
        color: colors.gray700,
        [disabledState]: {
          ...disabled,
          cursor: 'not-allowed',
          color: colors.gray500,
          border: `1px solid ${colors.gray300}`
        },
        [hoverState]: {
          border: `1px solid ${colors.gray600}`,
          color: colors.gray800
        },
        [focusState]: {
          boxShadow: `0 0 0 2px ${colors.blue100}`,
          border: `1px solid ${colors.blue200}`,
          color: colors.gray800
        },
        [activeState]: {
          backgroundColor: colors.gray100
        },
        [focusAndActiveState]: {}
      }
    }
  }
}

export default memoizeClassName(useButtonAppearance)
