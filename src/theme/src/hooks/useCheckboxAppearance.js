import { useMemo } from 'react'
import { css } from 'glamor'
import useTheme from '../useTheme'

const defaultState = '& + div'
const disabledState = '&[disabled] + div'
const hoverState = '&:not([disabled]):hover + div'
const focusState = '&:not([disabled]):focus + div'
const activeState = '&:not([disabled]):active + div'
const checkedState = '&:checked + div, &[type=checkbox]:indeterminate + div'
const checkedHoverState =
  '&:not([disabled]):checked:hover + div, &[type=checkbox]:not([disabled]):indeterminate:hover + div'
const checkedActiveState =
  '&:not([disabled]):checked:active + div, &[type=checkbox]:not([disabled]):indeterminate:active + div'
const checkedDisabledState =
  '&[disabled]:checked + div, &[type=checkbox][disabled]:indeterminate + div'

const hiddenCheckboxStyle = {
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1',
  opacity: '0'
}

const baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  textDecoration: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
}

const checkedStyle = {
  '& > svg': {
    display: 'block'
  }
}
/**
 * There is only a single appearance in the default theme.
 * @param {String} appearance.
 * @return {Object} the appearance of the checkbox.
 */
const getCheckboxStyles = theme => {
  const {
    tokens: { primary, colors },
    checkbox
  } = theme

  const {
    base: baseStyles = {},
    disabled: disabledStyles = {},
    hover: hoverStyles = {},
    focus: focusStyles = {},
    active: activeStyles = {},
    checked: checkedStyles = {},
    checkedHover: checkedHoverStyles = {},
    checkedDisabled: checkedDisabledStyles = {},
    checkedActive: checkedActiveStyles = {}
  } = checkbox || {}

  return {
    ...hiddenCheckboxStyle,
    '& + div > svg': { display: 'none' },
    [defaultState]: {
      ...baseStyle,
      color: 'white',
      backgroundColor: 'white',
      boxShadow: `inset 0 0 0 1px ${colors.gray400}`,
      ...baseStyles
    },
    [disabledState]: {
      cursor: 'not-allowed',
      backgroundColor: colors.gray100,
      boxShadow: `inset 0 0 0 1px ${colors.gray100}`,
      ...disabledStyles
    },
    [hoverState]: {
      boxShadow: `inset 0 0 0 1px ${colors.gray600}`,
      ...hoverStyles
    },
    [focusState]: {
      boxShadow: `0 0 0 2px ${colors.blue100}`,
      ...focusStyles
    },
    [activeState]: {
      backgroundColor: colors.gray100,
      boxShadow: `inset 0 0 0 1px ${colors.gray500}`,
      ...activeStyles
    },
    [checkedState]: {
      ...checkedStyle,
      color: 'white',
      boxShadow: `inset 0 0 0 -1px ${primary.active}`,
      backgroundColor: primary.base,
      ...checkedStyles
    },
    [checkedHoverState]: {
      ...checkedStyle,
      color: 'white',
      backgroundColor: primary.hover,
      boxShadow: `inset 0 0 0 1px ${primary.hover}`,
      ...checkedHoverStyles
    },
    [checkedDisabledState]: {
      ...checkedStyle,
      color: colors.gray600,
      backgroundColor: colors.gray100,
      ...checkedDisabledStyles
    },
    [checkedActiveState]: {
      ...checkedStyle,
      color: 'white',
      boxShadow: `inset 0 0 0 -1px ${primary.active}`,
      backgroundColor: primary.active,
      ...checkedActiveStyles
    }
  }
}

/**
 * Get the className of a `Checkbox`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
function useCheckboxAppearance() {
  const theme = useTheme()
  const className = useMemo(() => css(getCheckboxStyles(theme)).toString(), [
    theme
  ])
  return className
}

export default useCheckboxAppearance
