import { useMemo } from 'react'
import { deprecatedUseStyleConfig } from '../../../hooks/use-style-config'
import getTextDropdownButtonStyles from '../components/text-dropdown-button'
import useTheme from '../useTheme'

const pseudoSelectors = {
  _active:
    '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]',
  _disabled: '&[disabled]',
  _focus: '&:not([disabled]):focus',
  _hover: '&:not([disabled]):hover'
}

function useTextDropdownButtonAppearance(modifiers, internalStyles) {
  const theme = useTheme()
  const textDropdownButtonStyles = useMemo(
    () => getTextDropdownButtonStyles(theme),
    [theme]
  )

  return deprecatedUseStyleConfig(
    textDropdownButtonStyles,
    modifiers,
    pseudoSelectors,
    internalStyles
  )
}

export default useTextDropdownButtonAppearance
