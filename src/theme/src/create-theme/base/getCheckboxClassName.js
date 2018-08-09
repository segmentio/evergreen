import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'

export default function getCheckboxClassName({
  getPrimaryButtonStylesForIntent,
  scales,
  controlStyle
}) {
  const { styles } = getPrimaryButtonStylesForIntent()

  const isGradients = controlStyle === 'gradients'

  const defaultAppearance = Themer.createCheckboxAppearance({
    base: {
      color: 'white',
      backgroundColor: 'white',
      ...(isGradients
        ? {
            backgroundImage: `linear-gradient(to top, ${
              scales.neutral.N2A
            }, white)`
          }
        : {}),
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${
        scales.neutral.N3A
      }`
    },
    disabled: {
      cursor: 'not-allowed',
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
      backgroundColor: scales.neutral.N2A,
      backgroundImage: 'none'
    },
    hover: {
      ...(isGradients
        ? {
            backgroundImage: `linear-gradient(to top, ${scales.neutral.N2A}, ${
              scales.neutral.N1A
            })`
          }
        : {}),
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${
        scales.neutral.N2A
      }`
    },
    focus: {
      boxShadow: `0 0 0 2px ${scales.primary.P4A}, inset 0 0 0 1px ${
        scales.neutral.N5A
      }, inset 0 -1px 1px 0 ${scales.neutral.N3A}`
    },
    active: {
      backgroundImage: 'none',
      backgroundColor: scales.primary.P3A,
      boxShadow: `inset 0 0 0 1px ${scales.primary.P5A}`
    },
    checked: {
      color: 'white',
      ...styles.base,
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 -1px 1px 0 ${
        scales.neutral.N2A
      }`
    },
    checkedHover: {
      color: 'white',
      ...styles.hover,
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 -1px 1px 0 ${
        scales.neutral.N2A
      }`
    },
    checkedDisabled: {
      color: scales.neutral.N6A,
      ...(isGradients
        ? {
            backgroundImage: `linear-gradient(to top, ${scales.neutral.N2A}, ${
              scales.neutral.N1A
            })`
          }
        : {
            backgroundColor: scales.neutral.N2A
          }),
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${
        scales.neutral.N2A
      }`
    },
    checkedActive: {
      color: 'white',
      ...styles.active,
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${
        scales.neutral.N2A
      }`
    }
  })

  /**
   * There is only a single appearance in the default theme.
   * @param {String} appearance.
   * @return {Object} the appearance of the checkbox.
   */
  const getCheckboxAppearance = () => {
    return defaultAppearance
  }

  /**
   * Get the className of a `Checkbox`.
   * @param {string} appearance
   * @return {string} the appearance class name.
   */
  return memoizeClassName(getCheckboxAppearance)
}
