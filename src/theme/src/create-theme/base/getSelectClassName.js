import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'

export default ({ scales, palette, defaultControlStyles }) => {
  const SelectAppearances = {}

  SelectAppearances.default = Themer.createSelectAppearance({
    base: defaultControlStyles.base,
    disabled: defaultControlStyles.disabled,
    invalid: {
      boxShadow: `inset 0 0 0 1px ${palette.red.base}, inset 0 1px 2px ${
        scales.neutral.N4A
      }`
    },
    hover: defaultControlStyles.hover,
    focus: defaultControlStyles.focus,
    active: defaultControlStyles.active
  })

  /**
   * Get the appearance of a `Select`.
   * @param {string} appearance
   * @return {string} the appearance object.
   */
  const getSelectAppearance = () => {
    return SelectAppearances.default
  }

  /**
   * Get the className of a `Select`.
   * @param {string} appearance
   * @return {string} the appearance class name.
   */
  return memoizeClassName(getSelectAppearance)
}
