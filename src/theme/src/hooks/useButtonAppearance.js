import { useMemo } from 'react'
import { css } from 'glamor'
import getDefaultStyles from '../default-styles/buttons'
import useTheme from '../useTheme'

const base = {
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
}

const disabledState = `[disabled]`
const hoverState = '&:not([disabled]):hover'
const focusState = '&:not([disabled]):focus'
const focusAndActiveState =
  '&:not([disabled]):focus:active, &:not([disabled])[aria-expanded="true"]:focus, &:not([disabled])[data-active]:focus'
const activeState =
  '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]'

function getButtonStyles(theme, appearance) {
  const { buttons: themeStyles } = theme
  const defaultStyles = getDefaultStyles(theme)
  const buttonStyles = { ...defaultStyles, ...themeStyles }

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
