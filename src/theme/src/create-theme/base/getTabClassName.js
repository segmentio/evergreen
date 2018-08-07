import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'

export default ({ scales }) => {
  const defaultAppearance = Themer.createTabAppearance({
    base: {},
    hover: {
      backgroundColor: scales.neutral.N2A
    },
    focus: {
      boxShadow: `0 0 0 2px ${scales.primary.P5A}`
    },
    active: {
      backgroundColor: scales.primary.P3A,
      color: scales.primary.P9
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
  return memoizeClassName(getTabAppearance)
}
