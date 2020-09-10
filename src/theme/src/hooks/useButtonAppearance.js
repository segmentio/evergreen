import { useMemo } from 'react'
import { deprecatedUseStyleConfig } from '../../../hooks/use-style-config'
import getButtonStyles from '../components/button'
import useTheme from '../useTheme'

// TODO evaluate making selectors consistent across all components?
const pseudoSelectors = {
  _active:
    '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]',
  _disabled: '&[disabled]',
  _focus: '&:not([disabled]):focus',
  _focusAndActive:
    '&:not([disabled]):focus:active, &:not([disabled])[aria-expanded="true"]:focus, &:not([disabled])[data-active]:focus',
  _hover: '&:not([disabled]):hover'
}

function useButtonAppearance(modifiers, internalStyles) {
  const theme = useTheme()
  const buttonStyles = useMemo(() => getButtonStyles(theme), [theme])

  return deprecatedUseStyleConfig(
    buttonStyles,
    modifiers,
    pseudoSelectors,
    internalStyles
  )
}

export default useButtonAppearance
