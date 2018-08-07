import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'

export default function getSwitchClassName({ scales }) {
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
      boxShadow: `0 0 0 3px ${scales.primary.P6A}`
    },
    checked: {
      backgroundColor: scales.primary.P8,
      color: 'white'
    },
    checkedHover: {
      backgroundColor: scales.primary.P8,
      color: 'white'
    },
    checkedActive: {
      backgroundColor: scales.primary.P9,
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
  return memoizeClassName(getSwitchAppearance)
}
