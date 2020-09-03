import { useMemo } from 'react'
import useStyleConfig from '../../../hooks/use-style-config'
import getDefaultStyles from '../default-styles/buttons'
import useTheme from '../useTheme'

const pseudoSelectors = {
  _active:
    '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]',
  _disabled: '&[disabled]',
  _focus: '&:not([disabled]):focus',
  _focusAndActive:
    '&:not([disabled]):focus:active, &:not([disabled])[aria-expanded="true"]:focus, &:not([disabled])[data-active]:focus',
  _hover: '&:not([disabled]):hover'
}

function getButtonStyles(theme) {
  const themeStyles = theme.buttons
  const defaultStyles = getDefaultStyles(theme)
  // The way this merge happens means we always are shallowing picking themeStyles every time
  // TODO consolidate this behavior, do we want component styles in the theme? or not?
  const buttonStyles = { ...defaultStyles, ...themeStyles }
  return buttonStyles
}

function useButtonAppearance(modifiers, internalStyles) {
  const theme = useTheme()
  const buttonStyleConfig = useMemo(() => getButtonStyles(theme), [theme])

  return useStyleConfig(
    buttonStyleConfig,
    modifiers,
    pseudoSelectors,
    internalStyles
  )
}

export default useButtonAppearance
