import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'

const defaultAppearance = Themer.createSwitchAppearance({
  base: {
    transition: 'all 120ms ease-in-out',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: scales.neutral.N5A,
    borderRadius: 9999
  },
  disabled: {
    opacity: 0.5,
    backgroundImage: 'none'
  },
  hover: {
    backgroundColor: scales.neutral.N5A
  },
  active: {
    backgroundColor: scales.neutral.N6A
  },
  focus: {
    boxShadow: `0 0 0 3px ${scales.blue.B6A}`
  },
  checked: {
    backgroundColor: scales.blue.B8,
    color: 'white'
  },
  checkedHover: {
    backgroundColor: scales.blue.B8,
    color: 'white'
  },
  checkedActive: {
    backgroundColor: scales.blue.B9,
    color: 'white'
  },
  checkedDisabled: {}
})

/**
 * Get the className of a `Switch`.
 * @param {string} appearance
 * @return {Object} the appearance object.
 */
const getSwitchAppearance = () => {
  return defaultAppearance
}

/**
 * Get the className of a `Switch`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getSwitchAppearance)
