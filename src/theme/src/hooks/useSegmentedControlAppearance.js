import useTheme from '../useTheme'
import memoizeClassName from '../default-theme/utils/memoizeClassName'
import tokens from '../default-theme/foundational-styles/tokens'

const baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  boxSizing: 'border-box',
  textDecoration: 'none',
  transition: 'box-shadow 80ms ease-in-out',
  WebkitAppearance: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
}

const disabledState = '[disabled="true"], [data-disabled="true"]'
const hoverState = '&:not([disabled="true"]):not([data-disabled="true"]):hover'
const activeState =
  '&:not([disabled="true"]):not([data-disabled="true"]):active, &:not([disabled="true"]):not([data-disabled="true"])[data-popover-opened="true"], &:not([disabled="true"]):not([data-disabled="true"])[data-active="true"]'
const focusState = '& input:focus + label'

const useSegmentedControlAppearance = () => {
  const {
    tokens: { primary }
  } = useTheme()

  return {
    ...baseStyle,
    color: tokens.gray700,
    backgroundColor: 'transparent',
    borderRadius: '8px',
    [disabledState]: {
      opacity: 0.8,
      backgroundColor: tokens.gray500,
      boxShadow: 'none',
      color: tokens.gray600,
      pointerEvents: 'none'
    },
    [hoverState]: {
      color: primary.base,
      backgroundColor: tokens.blue100
    },
    [focusState]: {
      borderRadius: '8px',
      boxShadow: `0 0 0 1px ${tokens.blue100}`
    },
    [activeState]: {
      backgroundColor: tokens.blue50,
      borderRadius: '8px',
      color: primary.base,
      boxShadow: `inset 0 0 0 1px ${tokens.gray300}, inset 0 1px 1px 0 ${tokens.gray200}`
    }
  }
}

export default memoizeClassName(useSegmentedControlAppearance)
