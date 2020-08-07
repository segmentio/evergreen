import useTheme from '../useTheme'
import memoizeClassName from '../default-theme/utils/memoizeClassName'
import tokens from '../default-theme/foundational-styles/tokens'

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

const checkedStyles = {
  '& > svg': {
    display: 'block'
  }
}
/**
 * There is only a single appearance in the default theme.
 * @param {String} appearance.
 * @return {Object} the appearance of the checkbox.
 */
const useCheckboxAppearance = () => {
  const {
    tokens: { primary }
  } = useTheme()

  return {
    ...hiddenCheckboxStyle,
    '& + div > svg': { display: 'none' },
    [defaultState]: {
      ...baseStyle,
      color: 'white',
      backgroundColor: 'white',
      boxShadow: `inset 0 0 0 1px ${tokens.gray400}`
    },
    [disabledState]: {
      cursor: 'not-allowed',
      backgroundColor: tokens.gray100,
      boxShadow: `inset 0 0 0 1px ${tokens.gray100}`
    },
    [hoverState]: {
      boxShadow: `inset 0 0 0 1px ${tokens.gray600}`
    },
    [focusState]: {
      boxShadow: `0 0 0 2px ${tokens.blue100}, inset 0 0 0 1px ${tokens.gray600}`
    },
    [activeState]: {
      backgroundColor: tokens.gray100,
      boxShadow: `inset 0 0 0 1px ${tokens.gray500}`
    },
    [checkedState]: {
      ...checkedStyles,
      color: 'white',
      backgroundColor: primary.base
    },
    [checkedHoverState]: {
      ...checkedStyles,
      color: 'white',
      backgroundColor: primary.hover,
      boxShadow: `inset 0 0 0 1px ${primary.hover}`
    },
    [checkedDisabledState]: {
      ...checkedStyles,
      color: tokens.gray600,
      backgroundColor: tokens.gray100
    },
    [checkedActiveState]: {
      ...checkedStyles,
      color: 'white',
      boxShadow: `inset 0 0 0 -1px ${primary.active}`,
      backgroundColor: primary.active
    }
  }
}

/**
 * Get the className of a `Checkbox`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(useCheckboxAppearance)
