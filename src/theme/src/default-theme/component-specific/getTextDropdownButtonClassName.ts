import { Themer } from '../../../../themer'
import scales from '../foundational-styles/scales'
import memoizeClassName from '../utils/memoizeClassName'

const defaultAppearance = Themer.createTextDropdownButtonAppearance({
  base: {
    borderRadius: 3
  },
  hover: {},
  focus: {
    boxShadow: `0 0 0 3px ${scales.blue.B5A}`
  },
  active: {},
  disabled: {
    opacity: 0.5
  }
})

/**
 * Get the appearance of a `TextDropdownButton`.
 */
const getTextDropdownButtonAppearance = () => {
  return defaultAppearance
}

/**
 * Get the className of a `TextDropdownButton`.
 */
export default memoizeClassName(getTextDropdownButtonAppearance)
