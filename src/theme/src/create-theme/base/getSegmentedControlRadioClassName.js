import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'

export default ({ defaultControlStyles }) => {
  const defaultAppearance = Themer.createSegmentedControlRadioAppearance({
    base: defaultControlStyles.base,
    disabled: defaultControlStyles.disabled,
    hover: defaultControlStyles.hover,
    active: defaultControlStyles.active,
    focus: defaultControlStyles.focus
  })

  /**
   * Get the appearanece of a `SegmentedControlRadio`.
   * @param {string} appearance
   * @return {string} the appearance object.
   */
  const getSegmentedControlRadioAppearance = () => {
    return defaultAppearance
  }

  /**
   * Get the className of a `SegmentedControlRadio`.
   * @param {string} appearance
   * @return {string} the appearance class name.
   */
  return memoizeClassName(getSegmentedControlRadioAppearance)
}
