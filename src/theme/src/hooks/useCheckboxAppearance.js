import { useMemo } from 'react'
import useStyleConfig from '../../../hooks/use-style-config'
import getCheckboxStyles from '../components/checkbox'
import useTheme from '../useTheme'

const pseudoSelectors = {
  _display: '& + div',
  _tickSvg: '& + div > svg',
  _disabled: '&:disabled + div',
  _hover: '&:not(:disabled):hover + div',
  _focus: '&:not(:disabled):focus + div',
  _active: '&:not(:disabled):active + div',
  _checked: '&:checked + div, &[type=checkbox]:indeterminate + div',
  _checkedHover: '&:not([disabled]):checked:hover + div, &[type=checkbox]:not([disabled]):indeterminate:hover + div',
  _checkedActive: '&:not([disabled]):checked:active + div, &[type=checkbox]:not([disabled]):indeterminate:active + div',
  _checkedDisabled: '&[disabled]:checked + div, &[type=checkbox][disabled]:indeterminate + div'
}

/**
 * Get the className of a `Checkbox`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
function useCheckboxAppearance(modifiers) {
  const theme = useTheme()
  const checkboxStyles = useMemo(() => getCheckboxStyles(theme), [theme])

  return useStyleConfig(
    checkboxStyles,
    modifiers,
    pseudoSelectors
  )
}

export default useCheckboxAppearance
