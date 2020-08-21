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
  border: '1px solid',
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
        borderColor: primary.base,
        color: 'white',
        [disabledState]: {
          ...disabled
        },
        [hoverState]: {
          backgroundColor: primary.hover,
          borderColor: primary.hover,
        },
        [focusState]: {
          backgroundColor: primary.hover,
          borderColor: primary.hover,
          boxShadow: `0 0 0 2px ${colors.blue100}`
        },
        [activeState]: {
          backgroundColor: primary.active,
          borderColor: primary.active,
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

    case 'destructive': {
      return {
        ...base,
        backgroundColor: colors.red500,
        borderColor: colors.red500,
        color: 'white',
        [disabledState]: {
          ...disabled
        },
        [hoverState]: {
          backgroundColor: colors.red600,
          borderColor: colors.red600,
        },
        [focusState]: {
          backgroundColor: colors.red600,
          borderColor: colors.red600,
          boxShadow: `0 0 0 2px ${colors.red100}`
        },
        [activeState]: {
          backgroundColor: colors.red700,
          borderColor: colors.red700,
        },
        [focusAndActiveState]: {}
      }
    }

    case 'minimal': {
      return {
        ...base,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
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

    default: {
      return {
        ...base,
        backgroundColor: 'white',
        borderColor: colors.gray500,
        color: colors.gray800,
        [disabledState]: {
          ...disabled,
          color: colors.gray500,
          borderColor: colors.gray300
        },
        [hoverState]: {
          borderColor: colors.gray600,
          backgroundColor: colors.gray50
        },
        [focusState]: {
          boxShadow: `0 0 0 2px ${colors.blue100}`
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
