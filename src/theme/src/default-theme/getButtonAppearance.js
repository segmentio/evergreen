import tinycolor from 'tinycolor2'
import { Themer } from '../../../themer/'
import { Intent } from '../../../constants'
import scales from './scales'
import colors from './colors'

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

const Helpers = {
  /**
   * @param {String} top - color.
   * @param {String} bottom - color.
   * @return {String} CSS background propery.
   */
  linearGradient: (top, bottom) => {
    return `linear-gradient(to bottom, ${top}, ${bottom})`
  },

  /**
   * @param {Intent} intent
   * @return {String} color
   */
  getTextColorForIntent: intent => {
    switch (intent) {
      case Intent.SUCCESS:
        return colors.text.success
      case Intent.DANGER:
        return colors.text.danger
      case Intent.WARNING:
        return colors.text.warning
      default:
        return colors.text.default
    }
  },

  /**
   * @param {String} startColor
   * @param {String} endColor
   * @param {Number} intensityMultiplier - Some colors need more darkening.
   */
  getLinearGradientWithStates: (
    startColor,
    endColor,
    intensityMultiplier = 1
  ) => {
    return {
      base: Helpers.linearGradient(startColor, endColor),
      hover: Helpers.linearGradient(
        tinycolor(startColor)
          .darken(5 * intensityMultiplier)
          .toString(),
        tinycolor(endColor)
          .darken(5 * intensityMultiplier)
          .toString()
      ),
      active: Helpers.linearGradient(
        tinycolor(endColor)
          .darken(5 * intensityMultiplier)
          .toString(),
        tinycolor(endColor)
          .darken(5 * intensityMultiplier)
          .toString()
      )
    }
  },

  /**
   * Gradients in the default theme have a intentional hue shift.
   * @param {Intent} intent - intent of the gradient.
   * @return {Object} { base, hover, active }
   */
  getPrimaryButtonStylesForIntent: intent => {
    switch (intent) {
      case Intent.SUCCESS: {
        const startColor = '#23C277'
        const endColor = '#399D6C'
        return {
          linearGradient: Helpers.getLinearGradientWithStates(
            startColor,
            endColor
          ),
          focusColor: tinycolor(startColor)
            .setAlpha(0.4)
            .toString()
        }
      }
      case Intent.WARNING: {
        const startColor = '#EE9913'
        const endColor = '#D9822B'
        return {
          linearGradient: Helpers.getLinearGradientWithStates(
            startColor,
            endColor
          ),
          focusColor: tinycolor(startColor)
            .setAlpha(0.4)
            .toString()
        }
      }
      case Intent.DANGER: {
        const startColor = '#EC4C47'
        const endColor = '#D64540'
        return {
          linearGradient: Helpers.getLinearGradientWithStates(
            startColor,
            endColor
          ),
          focusColor: tinycolor(startColor)
            .setAlpha(0.4)
            .toString()
        }
      }
      default: {
        const startColor = '#0788DE'
        const endColor = '#116AB8'
        return {
          linearGradient: Helpers.getLinearGradientWithStates(
            startColor,
            endColor
          ),
          focusColor: tinycolor(startColor)
            .setAlpha(0.4)
            .toString()
        }
      }
    }
  }
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
      const {
        linearGradient,
        focusColor
      } = Helpers.getPrimaryButtonStylesForIntent(intent)
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
      const intentTextColor = Helpers.getTextColorForIntent(intent)
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
      const intentTextColor = Helpers.getTextColorForIntent(intent)
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: intentTextColor,
          backgroundColor: 'white',
          backgroundImage: Helpers.linearGradient('#FFFFFF', '#F4F5F7'),
          boxShadow: `inset 0 0 0 1px ${
            scales.neutral.N4A
          }, inset 0 -1px 1px 0 ${scales.neutral.N2A}`
        },
        hover: {
          backgroundImage: Helpers.linearGradient('#FAFBFB', '#EAECEE')
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
