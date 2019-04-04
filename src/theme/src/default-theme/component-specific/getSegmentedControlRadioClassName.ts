import { Themer } from '../../../../themer'
import { defaultControlStyles } from '../shared'
import memoizeClassName from '../utils/memoizeClassName'

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
export default memoizeClassName(getSegmentedControlRadioAppearance)
