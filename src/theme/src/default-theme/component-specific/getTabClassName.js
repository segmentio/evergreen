import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'

const defaultAppearance = Themer.createTabAppearance({
  base: {},
  hover: {
    backgroundColor: scales.neutral.N2A
  },
  focus: {
    boxShadow: `0 0 0 2px ${scales.blue.B5A}`
  },
  active: {
    backgroundColor: scales.blue.B3A,
    color: scales.blue.B9
  },
  current: {}
})

/**
 * Get the appearance of a `Tab`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */
const getTabAppearance = () => {
  return defaultAppearance
}

/**
 * Get the className of a `Tab`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getTabAppearance)
