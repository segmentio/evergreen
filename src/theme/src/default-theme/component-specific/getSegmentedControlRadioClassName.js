import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import { getDefaultControlStyles } from '../shared'

const getDefaultAppearance = theme => {
  const defaultControlStyles = getDefaultControlStyles(theme)
  return Themer.createSegmentedControlRadioAppearance({
    base: defaultControlStyles.base,
    disabled: defaultControlStyles.disabled,
    hover: defaultControlStyles.hover,
    active: defaultControlStyles.active,
    focus: defaultControlStyles.focus
  })
}

/**
 * Get the appearanece of a `SegmentedControlRadio`.
 * @param {string} appearance
 * @param {object} theme - the current theme
 * @return {string} the appearance object.
 */
const getSegmentedControlRadioAppearance = theme => {
  return getDefaultAppearance(theme)
}

/**
 * Get the className of a `SegmentedControlRadio`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getSegmentedControlRadioAppearance)
