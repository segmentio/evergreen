import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'

/**
 * Get the appearance of a `Select`.
 */
const getTextDropdownButtonAppearance = () => {
  return {
    WebkitFontSmoothing: 'antialiased',
    WebkitAppearance: 'none',
    verticalAlign: 'middle',
    textDecoration: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 3,
    background: 'none',

    '&:focus': {
      boxShadow: `0 0 0 3px ${scales.blue.B5A}`
    }
  }
}

/**
 * Get the className of a `TextDropdownButton`.
 */
export default memoizeClassName(getTextDropdownButtonAppearance)
