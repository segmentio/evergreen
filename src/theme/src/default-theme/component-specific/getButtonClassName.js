import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'
import {
  getTextColorForIntent,
  getPrimaryButtonStylesForIntent
} from '../helpers'
import { getDefaultControlStyles } from '../shared'
import buttonColors from './buttonColors'

/**
 * Get button appearance.
 * @param {string} appearance - default, primary, minimal.
 * @param {string} intent - none, success, warning, danger.
 * @param {Object} theme - the current theme
 * @return {Object} the appearance of the button.
 */
const getButtonAppearance = (appearance, intent, theme) => {
  const defaultControlStyles = getDefaultControlStyles(theme)

  const N2A = theme?.scales?.neutral?.N2A || scales.neutral.N2A
  const N4A = theme?.scales?.neutral?.N4A || scales.neutral.N4A
  const N5A = theme?.scales?.neutral?.N5A || scales.neutral.N5A

  /**
   * Disabled styles are all the same for all buttons.
   */
  const { disabled } = defaultControlStyles

  switch (appearance) {
    case 'primary': {
      const { linearGradient, focusColor } = getPrimaryButtonStylesForIntent(
        intent,
        theme
      )
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: 'white',
          backgroundColor: 'white',
          backgroundImage: linearGradient.base,
          boxShadow: `inset 0 0 0 1px ${N5A}, inset 0 -1px 1px 0 ${N2A}`
        },
        hover: {
          backgroundImage: linearGradient.hover
        },
        focus: {
          boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${N4A}, inset 0 -1px 1px 0 ${N5A}`
        },
        active: {
          backgroundImage: linearGradient.active,
          boxShadow: `inset 0 0 0 1px ${N4A}, inset 0 1px 1px 0 ${N2A}`
        },
        focusAndActive: {
          boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${N4A}, inset 0 1px 1px 0 ${N2A}`
        }
      })
    }

    case 'minimal': {
      const defaultColor =
        theme?.buttonColors?.minimal?.default || buttonColors.minimal.default
      const hoverBackground =
        theme?.buttonColors?.minimal?.hoverBackground ||
        buttonColors.minimal.hoverBackground
      const focusBackground =
        theme?.buttonColors?.minimal?.focusBackground ||
        buttonColors.minimal.focusBackground
      const activeBackground =
        theme?.buttonColors?.minimal?.activeBackground ||
        buttonColors.minimal.activeBackground

      const intentTextColor = getTextColorForIntent(intent, defaultColor, theme)
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: intentTextColor,
          backgroundColor: 'transparent'
        },
        hover: {
          backgroundColor: hoverBackground
        },
        focus: {
          boxShadow: `0 0 0 3px ${focusBackground}`
        },
        active: {
          backgroundImage: 'none',
          backgroundColor: activeBackground
        },
        focusAndActive: {}
      })
    }

    case 'default':
    default: {
      const intentTextColor = getTextColorForIntent(intent, null, theme)
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: intentTextColor,
          ...defaultControlStyles.base
        },
        hover: defaultControlStyles.hover,
        focus: defaultControlStyles.focus,
        active: defaultControlStyles.active,
        focusAndActive: defaultControlStyles.focusAndActive
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
export default memoizeClassName(getButtonAppearance)
