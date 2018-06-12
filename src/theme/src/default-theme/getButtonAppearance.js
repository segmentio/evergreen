import { Themer } from '../../../themer/'
import scales from './scales'
import {
  linearGradient,
  getTextColorForIntent,
  getPrimaryButtonStylesForIntent
} from './helpers'

/**
 * Disabled styles are all the same for all buttons.
 */
const disabled = {
  cursor: 'not-allowed',
  opacity: 0.8,
  backgroundImage: 'none',
  backgroundColor: scales.neutral.N2,
  boxShadow: 'none',
  color: scales.neutral.N7A
}

/**
 * Get button appearance.
 * @param {String} appearance - default, primary, minimal.
 * @param {String} intent - none, success, warning, danger.
 * @return {Object} the appearance of the button.
 */
const getButtonAppearance = (appearance, intent) => {
  switch (appearance) {
    case 'primary': {
      const { linearGradient, focusColor } = getPrimaryButtonStylesForIntent(
        intent
      )
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: 'white',
          backgroundColor: 'white',
          backgroundImage: linearGradient.base,
          boxShadow: `inset 0 0 0 1px ${
            scales.neutral.N5A
          }, inset 0 -1px 1px 0 ${scales.neutral.N2A}`
        },
        hover: {
          backgroundImage: linearGradient.hover
        },
        focus: {
          boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${
            scales.neutral.N4A
          }, inset 0 -1px 1px 0 ${scales.neutral.N5A}`
        },
        active: {
          backgroundImage: linearGradient.active,
          boxShadow: `inset 0 0 0 1px ${
            scales.neutral.N4A
          }, inset 0 1px 1px 0 ${scales.neutral.N2A}`
        }
      })
    }
    case 'minimal': {
      const intentTextColor = getTextColorForIntent(intent)
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: intentTextColor,
          backgroundColor: 'transparent'
        },
        hover: {
          backgroundColor: scales.neutral.N2A
        },
        focus: {
          boxShadow: `0 0 0 3px ${scales.blue.B5A}`
        },
        active: {
          backgroundImage: 'none',
          backgroundColor: scales.blue.B3A
        }
      })
    }
    case 'default':
    default: {
      const intentTextColor = getTextColorForIntent(intent)
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: intentTextColor,
          backgroundColor: 'white',
          backgroundImage: linearGradient('#FFFFFF', '#F4F5F7'),
          boxShadow: `inset 0 0 0 1px ${
            scales.neutral.N4A
          }, inset 0 -1px 1px 0 ${scales.neutral.N2A}`
        },
        hover: {
          backgroundImage: linearGradient('#FAFBFB', '#EAECEE')
        },
        focus: {
          boxShadow: `0 0 0 3px ${scales.blue.B4A}, inset 0 0 0 1px ${
            scales.neutral.N5A
          }, inset 0 -1px 1px 0 ${scales.neutral.N4A}`
        },
        active: {
          backgroundImage: 'none',
          backgroundColor: scales.blue.B3A,
          boxShadow: `inset 0 0 0 1px ${
            scales.neutral.N4A
          }, inset 0 1px 1px 0 ${scales.neutral.N2A}`
        }
      })
    }
  }
}

export default getButtonAppearance
