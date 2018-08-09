import tinycolor from 'tinycolor2'
import { Intent } from '../../../../constants'
import linearGradient from '../utils/linearGradient'

export default function createGetPrimaryButtonStylesForIntent({
  palette,
  controlStyle
}) {
  if (controlStyle === 'gradients') return gradientStyle({ palette })
  if (controlStyle === 'flat') return flatStyle({ palette })
}

function gradientStyle({ palette }) {
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

  const primaryButtonGradients = {
    none: {
      startColor: tinycolor(palette.primary.base)
        .saturate(10)
        .lighten(4)
        .toString(),
      endColor: tinycolor(palette.primary.base)
        .darken(5)
        .toString()
    },
    success: {
      startColor: tinycolor(palette.green.base)
        .saturate(10)
        .lighten(4)
        .toString(),
      endColor: tinycolor(palette.green.base)
        .darken(5)
        .toString()
    },
    warning: {
      startColor: tinycolor(palette.orange.base)
        .saturate(10)
        .lighten(4)
        .toString(),
      endColor: tinycolor(palette.orange.base)
        .darken(5)
        .toString()
    },
    danger: {
      startColor: tinycolor(palette.red.base)
        .saturate(10)
        .lighten(4)
        .toString(),
      endColor: tinycolor(palette.red.base)
        .darken(10)
        .toString()
    }
  }

  /**
   * Gradients in the default theme have a intentional hue shift.
   * @param {Intent} intent - intent of the gradient.
   * @return {Object} { base, hover, active }
   */
  const getPrimaryButtonStylesForIntent = intent => {
    switch (intent) {
      case Intent.SUCCESS: {
        const { startColor, endColor } = primaryButtonGradients.success
        const gradients = getLinearGradientWithStates(startColor, endColor)

        return {
          styles: {
            base: {
              backgroundImage: gradients.base
            },
            hover: {
              backgroundImage: gradients.hover
            },
            active: {
              backgroundImage: gradients.active
            }
          },
          linearGradient: getLinearGradientWithStates(startColor, endColor),
          focusColor: tinycolor(startColor)
            .setAlpha(0.4)
            .toString()
        }
      }
      case Intent.WARNING: {
        const { startColor, endColor } = primaryButtonGradients.warning
        const gradients = getLinearGradientWithStates(startColor, endColor)

        return {
          styles: {
            base: {
              backgroundImage: gradients.base
            },
            hover: {
              backgroundImage: gradients.hover
            },
            active: {
              backgroundImage: gradients.active
            }
          },
          linearGradient: gradients,
          focusColor: tinycolor(startColor)
            .setAlpha(0.4)
            .toString()
        }
      }
      case Intent.DANGER: {
        const { startColor, endColor } = primaryButtonGradients.danger
        const gradients = getLinearGradientWithStates(startColor, endColor)

        return {
          styles: {
            base: {
              backgroundImage: gradients.base
            },
            hover: {
              backgroundImage: gradients.hover
            },
            active: {
              backgroundImage: gradients.active
            }
          },
          linearGradient: gradients,
          focusColor: tinycolor(startColor)
            .setAlpha(0.4)
            .toString()
        }
      }
      default: {
        const { startColor, endColor } = primaryButtonGradients.none
        const gradients = getLinearGradientWithStates(startColor, endColor)

        return {
          styles: {
            base: {
              backgroundImage: gradients.base
            },
            hover: {
              backgroundImage: gradients.hover
            },
            active: {
              backgroundImage: gradients.active
            }
          },
          linearGradient: gradients,
          focusColor: tinycolor(startColor)
            .setAlpha(0.4)
            .toString()
        }
      }
    }
  }

  return getPrimaryButtonStylesForIntent
}

const createFlatStyles = color => {
  return {
    styles: {
      base: {
        backgroundColor: color
      },
      hover: {
        backgroundColor: tinycolor(color)
          .darken(2)
          .toString()
      },
      active: {
        backgroundColor: tinycolor(color)
          .darken(4)
          .toString()
      }
    },
    focusColor: tinycolor(color)
      .setAlpha(0.4)
      .toString()
  }
}

function flatStyle({ palette }) {
  /**
   * Gradients in the default theme have a intentional hue shift.
   * @param {Intent} intent - intent of the gradient.
   * @return {Object} { base, hover, active }
   */
  const getPrimaryButtonStylesForIntent = intent => {
    switch (intent) {
      case Intent.SUCCESS: {
        return createFlatStyles(palette.green.base)
      }
      case Intent.WARNING: {
        return createFlatStyles(palette.orange.base)
      }
      case Intent.DANGER: {
        return createFlatStyles(palette.red.base)
      }
      default: {
        return createFlatStyles(palette.primary.base)
      }
    }
  }

  return getPrimaryButtonStylesForIntent
}
