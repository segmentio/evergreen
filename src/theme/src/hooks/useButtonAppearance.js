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
  const { buttons } = theme

  const {
    base: baseStyles = {},
    disabled = {},
    hover = {},
    focus = {},
    active = {},
    focusAndActive = {}
  } = (buttons || {})[appearance] || {}

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
