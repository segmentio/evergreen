import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'

export default ({ scales }) => {
  const defaultAppearance = Themer.createTextDropdownButtonAppearance({
    base: {
      borderRadius: 3
    },
    hover: {},
    focus: {
      boxShadow: `0 0 0 3px ${scales.primary.P5A}`
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
  return memoizeClassName(getTextDropdownButtonAppearance)
}
