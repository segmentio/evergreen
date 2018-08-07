import { Themer } from '../../../../themer/'
import memoizeClassName from '../utils/memoizeClassName'

export default function Button() {
  /**
   * Get button appearance.
   * @param {string} appearance - default, primary, minimal.
   * @param {string} intent - none, success, warning, danger.
   * @return {Object} the appearance of the button.
   */
  const getButtonAppearance = appearance => {
    switch (appearance) {
      case 'primary': {
        return Themer.createButtonAppearance({
          disabled: {},
          base: {},
          hover: {},
          focus: {},
          active: {},
          focusAndActive: {}
        })
      }
      case 'minimal': {
        return Themer.createButtonAppearance({
          disabled: {},
          base: {},
          hover: {},
          focus: {},
          active: {},
          focusAndActive: {}
        })
      }
      case 'default':
      default: {
        return Themer.createButtonAppearance({
          disabled: {},
          base: {},
          hover: {},
          focus: {},
          active: {},
          focusAndActive: {}
        })
      }
    }
  }

  /**
   * Get the className of a `Button`|`IconButton`.
   * @param {string} appearance - default, primary, minimal.
   * @param {Intent} intent - none, success, warning, danger.
   * @return {string} the appearance class name.
   */
  return memoizeClassName(getButtonAppearance)
}
