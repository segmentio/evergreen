import { Themer } from '../../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import tokens from '../foundational-styles/tokens'

const defaultAppearance = Themer.createCheckboxAppearance({
  base: {
    color: 'white',
    backgroundColor: 'white',
    boxShadow: `inset 0 0 0 1px ${tokens.gray400}`
  },
  disabled: {
    cursor: 'not-allowed',
    backgroundColor: tokens.gray100,
    boxShadow: `inset 0 0 0 1px ${tokens.gray100}`
  },
  hover: {
    boxShadow: `inset 0 0 0 1px ${tokens.gray600}`
  },
  focus: {
    boxShadow: `0 0 0 2px ${tokens.blue100}, inset 0 0 0 1px ${tokens.gray600}`
  },
  active: {
    backgroundColor: tokens.gray100,
    boxShadow: `inset 0 0 0 1px ${tokens.gray500}`
  },
  checked: {
    color: 'white',
    backgroundColor: tokens.blue500
  },
  checkedHover: {
    color: 'white',
    backgroundColor: tokens.blue600,
    boxShadow: `inset 0 0 0 1px ${tokens.blue600}`
  },
  checkedDisabled: {
    color: tokens.gray600,
    backgroundColor: tokens.gray100
  },
  checkedActive: {
    color: 'white',
    boxShadow: `inset 0 0 0 -1px ${tokens.blue700}`,
    backgroundColor: tokens.blue700
  }
})

/**
 * There is only a single appearance in the default theme.
 * @param {String} appearance.
 * @return {Object} the appearance of the checkbox.
 */
const getCheckboxAppearance = () => {
  return defaultAppearance
}

/**
 * Get the className of a `Checkbox`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getCheckboxAppearance)
