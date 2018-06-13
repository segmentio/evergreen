import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'

const defaultRowAppearance = Themer.createRowAppearance({
  base: {},

  hover: {
    backgroundColor: scales.neutral.N1A
  },

  focus: {
    backgroundColor: scales.blue.B1A
  },

  active: {
    backgroundColor: scales.blue.B2A,
    color: scales.blue.B8
  },

  current: {
    cursor: 'default'
  }
})

/**
 * Get the appearance of a `Row`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */
const getRowAppearance = () => {
  return defaultRowAppearance
}

/**
 * Get the className of a `Row`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getRowAppearance)
