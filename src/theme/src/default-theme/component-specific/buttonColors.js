import scales from '../foundational-styles/scales'

export default {
  /**
   * Colors used specifically in buttons. For example, the linear gradients and minimal stylings
   * @property {string} primary.default.gradientStart required property. the start gradient value
   * @property {string} primary.default.gradientEnd required property. the end gradient value
   * @property {string} primary.success.gradientStart required property. the start gradient value
   * @property {string} primary.success.gradientEnd required property. the end gradient value
   * @property {string} primary.warning.gradientStart required property. the start gradient value
   * @property {string} primary.warning.gradientEnd required property. the end gradient value
   * @property {string} primary.danger.gradientStart required property. the start gradient value
   * @property {string} primary.danger.gradientEnd required property. the end gradient value
   * @property {string} minimal.default required property. Text color for minimal buttons
   * @property {string} minimal.hoverBackground required property. background color for hovered minimal buttons
   * @property {string} minimal.focusBackground required property. background color for focused minimal buttons
   * @property {string} minimal.activeBackground required property. background color for active minimal buttons
   */
  primary: {
    default: {
      gradientStart: '#0788DE',
      gradientEnd: '#116AB8'
    },
    success: {
      gradientStart: '#23C277',
      gradientEnd: '#399D6C'
    },
    warning: {
      gradientStart: '#EE9913',
      gradientEnd: '#D9822B'
    },
    danger: {
      gradientStart: '#EC4C47',
      gradientEnd: '#D64540'
    }
  },
  minimal: {
    default: scales.blue.B9,
    hoverBackground: scales.neutral.N2A,
    focusBackground: scales.blue.B5A,
    activeBackground: scales.blue.B3A
  }
}
