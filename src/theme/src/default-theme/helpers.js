import tinycolor from 'tinycolor2'
import { Intent } from '../../../constants'
import colors from './foundational-styles/colors'
import buttonColors from './component-specific/buttonColors'

/**
 * @param {String} top - color.
 * @param {String} bottom - color.
 * @return {String} CSS background propery.
 */
const linearGradient = (top, bottom) => {
  return `linear-gradient(to bottom, ${top}, ${bottom})`
}

/**
 * @param {Intent} intent
 * @param {String} defaultColor
 * @param {Object} theme
 * @return {String} color
 */
const getTextColorForIntent = (intent, defaultColor, theme) => {
  switch (intent) {
    case Intent.SUCCESS:
      return theme?.colors?.text?.success || colors.text.success
    case Intent.DANGER:
      return theme?.colors?.text?.danger || colors.text.danger
    case Intent.WARNING:
      return theme?.colors?.text?.warning || colors.text.warning
    default:
      return defaultColor || theme?.colors?.text?.default || colors.text.default
  }
}

/**
 * @param {String} startColor
 * @param {String} endColor
 * @param {Number} intensityMultiplier - Some colors need more darkening.
 */
const getLinearGradientWithStates = (
  startColor,
  endColor,
  intensityMultiplier = 1
) => {
  return {
    base: linearGradient(startColor, endColor),
    hover: linearGradient(
      tinycolor(startColor)
        .darken(5 * intensityMultiplier)
        .toString(),
      tinycolor(endColor)
        .darken(5 * intensityMultiplier)
        .toString()
    ),
    active: linearGradient(
      tinycolor(endColor)
        .darken(5 * intensityMultiplier)
        .toString(),
      tinycolor(endColor)
        .darken(5 * intensityMultiplier)
        .toString()
    )
  }
}

/**
 * Gradients in the default theme have a intentional hue shift.
 * @param {Intent} intent - intent of the gradient.
 * @return {Object} { base, hover, active }
 */
const getPrimaryButtonStylesForIntent = (intent, theme) => {
  switch (intent) {
    case Intent.SUCCESS: {
      const startColor =
        theme?.buttonColors?.primary?.success?.gradientStart ||
        buttonColors.primary.success.gradientStart
      const endColor =
        theme?.buttonColors?.primary?.success?.gradientEnd ||
        buttonColors.primary.success.gradientEnd
      return {
        linearGradient: getLinearGradientWithStates(startColor, endColor),
        focusColor: tinycolor(startColor)
          .setAlpha(0.4)
          .toString()
      }
    }

    case Intent.WARNING: {
      const startColor =
        theme?.buttonColors?.primary?.warning?.gradientStart ||
        buttonColors.primary.warning.gradientStart
      const endColor =
        theme?.buttonColors?.primary?.warning?.gradientEnd ||
        buttonColors.primary.warning.gradientEnd
      return {
        linearGradient: getLinearGradientWithStates(startColor, endColor),
        focusColor: tinycolor(startColor)
          .setAlpha(0.4)
          .toString()
      }
    }

    case Intent.DANGER: {
      const startColor =
        theme?.buttonColors?.primary?.danger?.gradientStart ||
        buttonColors.primary.danger.gradientStart
      const endColor =
        theme?.buttonColors?.primary?.danger?.gradientEnd ||
        buttonColors.primary.danger.gradientEnd
      return {
        linearGradient: getLinearGradientWithStates(startColor, endColor),
        focusColor: tinycolor(startColor)
          .setAlpha(0.4)
          .toString()
      }
    }

    default: {
      const startColor =
        theme?.buttonColors?.primary?.default?.gradientStart ||
        buttonColors.primary.default.gradientStart
      const endColor =
        theme?.buttonColors?.primary?.default?.gradientEnd ||
        buttonColors.primary.default.gradientEnd
      return {
        linearGradient: getLinearGradientWithStates(startColor, endColor),
        focusColor: tinycolor(startColor)
          .setAlpha(0.4)
          .toString()
      }
    }
  }
}

export {
  linearGradient,
  getTextColorForIntent,
  getLinearGradientWithStates,
  getPrimaryButtonStylesForIntent
}
