import tinycolor from 'tinycolor2'
import { Intent } from '../../../constants'
import themedProperty from './utils/themedProperty'

// Const primaryButtonGradients = {
//   none: {
//     startColor: '#0788DE',
//     endColor: '#116AB8'
//   },
//   success: {
//     startColor: '#23C277',
//     endColor: '#399D6C'
//   },
//   warning: {
//     startColor: '#EE9913',
//     endColor: '#D9822B'
//   },
//   danger: {
//     startColor: '#EC4C47',
//     endColor: '#D64540'
//   }
// }

function generateScale(primaryColor, prefix = 'P') {
  const scale = {}
  const tinyPrimaryColor = tinycolor(primaryColor)

  const opacities = [0.04, 0.06, 0.09, 0.14, 0.3, 0.47, 0.7, 0.81]

  for (const [index, opacity] of opacities.entries()) {
    const opaqueColor = tinycolor
      .mix('white', primaryColor, opacity * 100)
      .toString()
    const opacityColor = tinyPrimaryColor.setAlpha(opacity).toString()
    scale[`${prefix}${index + 1}`] = opaqueColor
    scale[`${prefix}${index + 1}A`] = opacityColor
  }

  scale[`${prefix}9`] = primaryColor
  scale[`${prefix}10`] = tinyPrimaryColor.darken(2).toString()

  return scale
}

export default function createStyles(config = {}) {
  let primaryScale
  if (typeof config.primaryColor === 'string') {
    primaryScale = generateScale(config.primaryColor)
  }

  console.log('primaryScale', primaryScale)

  /**
   * Neutrals and primary are special.
   * They need more variations to properly express all of our UI.
   */
  const scales = {
    ...{
      neutral: {
        N1: '#F9F9FB',
        N2: '#F5F6F7',
        N3: '#EDF0F2',
        N4: '#E4E7EB',
        N5: '#C7CED4',
        N6: '#A6B1BB',
        N7: '#7B8B9A', // Large Text AA
        N8: '#66788A', // Normal Text AA
        N9: '#425A70', // Normal Text AAA
        N10: '#234361', // Normal Text AAA

        // Transparent variants.
        N1A: 'rgba(67, 90, 111, 0.04)',
        N2A: 'rgba(67, 90, 111, 0.06)',
        N3A: 'rgba(67, 90, 111, 0.09)',
        N4A: 'rgba(67, 90, 111, 0.14)',
        N5A: 'rgba(67, 90, 111, 0.3)',
        N6A: 'rgba(67, 90, 111, 0.47)',
        N7A: 'rgba(67, 90, 111, 0.7)',
        N8A: 'rgba(67, 90, 111, 0.81)'
      },

      primary: primaryScale || {
        P1: '#f7f9fd',
        P2: '#f1f7fc',
        P3: '#e9f2fa',
        P4: '#ddebf7',
        P5: '#b7d4ef',
        P6: '#8fbce6',
        P7: '#579ad9', // Large Text AA
        P8: '#3d8bd4', // Normal Text AA
        P9: '#1070ca', // Normal Text AAA
        P10: '#084b8a', // Normal Text AAA

        // Transparent variants.
        P1A: 'rgba(16, 112, 202, 0.04)',
        P2A: 'rgba(16, 112, 202, 0.06)',
        P3A: 'rgba(16, 112, 202, 0.09)',
        P4A: 'rgba(16, 112, 202, 0.14)',
        P5A: 'rgba(16, 112, 202, 0.3)',
        P6A: 'rgba(16, 112, 202, 0.47)',
        P7A: 'rgba(16, 112, 202, 0.7)',
        P8A: 'rgba(16, 112, 202, 0.81)'
      }
    },
    ...(config.scales || {})
  }

  console.log('scales', scales)

  const palette = {
    ...{
      neutral: {
        lightest: scales.neutral.N1,
        light: scales.neutral.N4,
        base: scales.neutral.N9,
        dark: scales.neutral.N10
      },

      primary: {
        lightest: scales.primary.P1,
        light: scales.primary.P4,
        base: scales.primary.P9,
        dark: scales.primary.P10
      },

      red: {
        lightest: '#fef6f6',
        light: '#fae2e2',
        base: '#ec4c47',
        dark: '#bf0e08'
      },

      orange: {
        lightest: '#fdf8f3',
        light: '#fae3cd',
        base: '#d9822b',
        dark: '#95591e'
      },

      yellow: {
        lightest: '#fef8e7',
        light: '#fbe6a2',
        base: '#f7d154',
        dark: '#7e6514'
      },

      green: {
        lightest: '#f1faf5',
        light: '#d4eee2',
        base: '#47b881',
        dark: '#00783e'
      },

      teal: {
        lightest: '#f1fbfc',
        light: '#d2eef3',
        base: '#14b5d0',
        dark: '#007489'
      },

      purple: {
        lightest: '#f8f7fc',
        light: '#eae7f8',
        base: '#735dd0',
        dark: '#37248f'
      }
    },
    ...(config.palette || {})
  }

  /**
   * This object are functional colors being used the default theme.
   * A required property is required by the default theme NOT by Evergreen itself.
   */
  const colors = {
    /**
     * Available on Pane as `<Pane background="tint1" />`
     * @property {string} background.tint1 - Lightest tinted background color. Required property.
     * @property {string} background.tint2 - Slightly darker tinted background color. Required property.
     * @property {string} background.overlay - color used for the overlay
     */
    background: {
      tint1: scales.neutral.N1,
      tint2: scales.neutral.N2,
      overlay: scales.neutral.N7A,

      // Non required.
      yellowTint: palette.yellow.lightest,
      greenTint: palette.green.lightest,
      orangeTint: palette.orange.lightest,
      redTint: palette.red.lightest,
      primaryTint: palette.primary.lightest,
      purpleTint: palette.purple.lightest,
      tealTint: palette.teal.lightest
    },

    /**
     * Available on Pane as `<Pane borderBottom borderRight="muted" />`
     * @property {string} text.default - Required property.
     * @property {string} text.muted - Slightly lighter color than default. Required property.
     */
    border: {
      default: scales.neutral.N4, // Was BorderColors.muted in v3 and under.
      muted: scales.neutral.N3 // Was BorderColors.extraMuted in v3 and under
    },

    /**
     * Text colors available on Text as `<Text color="muted" />`.
     * @property {string} text.muted - Required property.
     * @property {string} text.default - Required property. Default for text.
     * @property {string} text.dark - Required property. Default for headings.
     */
    text: {
      muted: scales.neutral.N8,
      default: scales.neutral.N9,
      dark: scales.neutral.N10,
      selected: palette.primary.base,

      // Intent.
      success: palette.green.dark,
      info: palette.primary.dark,
      danger: palette.red.dark,
      warning: palette.orange.dark
    },

    /**
     * Icon colors available on Icon.
     * @property {string} icon.default - Required property.
     * @property {string} icon.muted - Required property.
     * @property {string} icon.selected - Required property.
     */
    icon: {
      default: scales.neutral.N8,
      muted: scales.neutral.N7,
      disabled: scales.neutral.N5A,
      selected: palette.primary.base,

      // Intent.
      success: palette.green.base,
      info: palette.primary.base,
      danger: palette.red.base,
      warning: palette.orange.base
    },

    /**
     * Used for Alerts and other (future) componentes that express intent.
     * @property {string} intent.none - Required property.
     * @property {string} intent.success - Required property.
     * @property {string} intent.danger - Required property.
     * @property {string} intent.warning - Required property.
     */
    intent: {
      none: palette.primary.base,
      success: palette.green.base,
      danger: palette.red.base,
      warning: palette.orange.base
    }
  }

  /**
   * Fills are used in Avatars and Badges.
   */
  const fills = {}

  fills.solid = {
    neutral: {
      color: 'white',
      backgroundColor: palette.neutral.base
    },
    primary: {
      color: 'white',
      backgroundColor: palette.primary.base
    },
    red: {
      color: 'white',
      backgroundColor: palette.red.base
    },
    orange: {
      color: 'white',
      backgroundColor: palette.orange.base
    },
    yellow: {
      color: palette.yellow.darkest,
      backgroundColor: palette.yellow.base
    },
    green: {
      color: 'white',
      backgroundColor: palette.green.base
    },
    teal: {
      color: 'white',
      backgroundColor: palette.teal.base
    },
    purple: {
      color: 'white',
      backgroundColor: palette.purple.base
    }
  }

  fills.subtle = {
    neutral: {
      color: colors.text.default,
      backgroundColor: palette.neutral.light
    },
    primary: {
      color: palette.primary.dark,
      backgroundColor: palette.primary.light
    },
    red: {
      color: palette.red.dark,
      backgroundColor: palette.red.light
    },
    orange: {
      color: palette.orange.dark,
      backgroundColor: palette.orange.light
    },
    yellow: {
      color: palette.yellow.dark,
      backgroundColor: palette.yellow.light
    },
    green: {
      color: palette.green.dark,
      backgroundColor: palette.green.light
    },
    teal: {
      color: palette.teal.dark,
      backgroundColor: palette.teal.light
    },
    purple: {
      color: palette.purple.dark,
      backgroundColor: palette.purple.light
    }
  }

  fills.options = Object.keys(fills.solid)

  const borderShadowColor = scales.neutral.N5A // Used to be colors.neutral['80A'] in v3 and down.
  const blurryShadowColor = scales.neutral.N6A // Used to be colors.neutral['50A'] in v3 and down.

  /**
   * Elevation styles are applied as box shadows.
   * Available levels: 0, 1, 2, 3, 4.
   */
  const elevations = config.elevations || [
    `0 0 1px ${borderShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 2px 4px -2px ${blurryShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 5px 8px -4px ${blurryShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 8px 10px -4px ${blurryShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 16px 24px -8px ${blurryShadowColor}`
  ]

  const fontFamilies = {
    /**
     * @property {string} display - Used for headings larger than 20px.
     */
    display: `"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,

    /**
     * @property {string} ui - Used for text and UI (which includes almost anything).
     */
    ui: `"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,

    /**
     * @property {string} mono - Used for code and sometimes numbers in tables.
     */
    mono: `"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace`
  }

  /**
   * Heading styles.
   * @property {Object} headings.900
   * @property {Object} headings.800
   * @property {Object} headings.700
   * @property {Object} headings.600
   * @property {Object} headings.500 - Default.
   * @property {Object} headings.400
   * @property {Object} headings.300
   * @property {Object} headings.200
   * @property {Object} headings.100
   */
  const headings = {
    '900': {
      fontSize: '35px',
      fontWeight: 500,
      lineHeight: '40px',
      letterSpacing: '-0.2px',
      marginTop: 52,
      fontFamily: fontFamilies.display,
      color: colors.text.dark
    },
    '800': {
      fontSize: '29px',
      fontWeight: 500,
      lineHeight: '32px',
      letterSpacing: '-0.2px',
      marginTop: 40,
      fontFamily: fontFamilies.display,
      color: colors.text.dark
    },
    '700': {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '28px',
      letterSpacing: '-0.07px',
      marginTop: 40,
      fontFamily: fontFamilies.display,
      color: colors.text.dark
    },
    '600': {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '-0.07px',
      marginTop: 28,
      fontFamily: fontFamilies.display,
      color: colors.text.dark
    },
    '500': {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 24,
      fontFamily: fontFamilies.ui,
      color: colors.text.dark
    },
    '400': {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 16,
      fontFamily: fontFamilies.ui,
      color: colors.text.dark
    },
    '300': {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      letterSpacing: '0',
      marginTop: 16,
      fontFamily: fontFamilies.ui,
      color: colors.text.dark
    },
    '200': {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      marginTop: 16,
      fontFamily: fontFamilies.ui,
      color: colors.text.muted
    },
    '100': {
      fontSize: '11px',
      fontWeight: 400,
      textTransform: 'uppercase',
      lineHeight: '16px',
      letterSpacing: '0.6px',
      marginTop: 16,
      fontFamily: fontFamilies.ui,
      color: colors.text.muted
    }
  }

  /**
   * Text styles for single line text.
   * This is used in the Text component. The Text component is used by:
   * - Small
   * - Strong
   * - Code
   * - ListItem
   * - Label
   * - Link
   * @property {Object} 600 - Required property.
   * @property {Object} 500 - Required property.
   * @property {Object} 400 - Required property. Default.
   * @property {Object} 300 - Required property.
   */
  const text = {
    /**
     * It's useful to have 600 because `Link` uses the `Text` component.
     * A `Link` could be used as 600 in the context of a breadcrumb.
     */
    '600': {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '-0.07px',
      marginTop: 28,
      /**
       * Use font family display because the font-size is 20px.
       */
      fontFamily: fontFamilies.display
    },
    '500': {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 16
    },
    '400': {
      // Default
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 12
    },
    '300': {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0',
      marginTop: 12
    }
  }

  /**
   * Text styles for paragraphs (multi line text).
   * This is used in the Paragraph.
   * @property {Object} text.500 - Required property.
   * @property {Object} text.400 - Required property. Default.
   * @property {Object} text.300 - Required property.
   */
  const paragraph = {
    '500': {
      ...text['500'],
      lineHeight: '24px'
    },
    '400': {
      ...text['400'],
      lineHeight: '21px'
    },
    '300': {
      ...text['300'],
      lineHeight: '18px'
    }
  }

  /**
   * Controls include:
   * - Button
   * - IconButton
   * - TextInput
   * @param {number} height
   * @return {number} border radius
   */
  const getBorderRadiusForControlHeight = height => {
    if (height <= 40) return 3
    return 4
  }

  /**
   * Get the text size for a control with a certain height.
   * @param {number} height
   * @return {number} text size of the control height.
   */
  const getTextSizeForControlHeight = height => {
    if (height <= 24) return 300
    if (height <= 28) return 300
    if (height <= 32) return 300
    if (height <= 36) return 400
    if (height <= 40) return 400
    if (height <= 48) return 500
    if (height <= 56) return 700
    return 800
  }

  /**
   * Get the size for a icon in a Button with a certain height.
   * @param {number} height
   * @return {number} icon size
   */
  const getIconSizeForButton = height => {
    if (height <= 28) return 12
    if (height <= 32) return 12
    if (height <= 40) return 16
    if (height <= 48) return 18
    return 20
  }

  // Use the same for input components.
  const getIconSizeForInput = getIconSizeForButton
  const getIconSizeForSelect = getIconSizeForButton

  /**
   * Get the size for a icon in a IconButton with a certain height.
   * @param {number} height
   * @return {number} icon size
   */
  const getIconSizeForIconButton = height => {
    if (height <= 28) return 12
    if (height <= 32) return 14 // Slightly bigger than getIconSizeForButton
    if (height <= 40) return 16
    if (height <= 48) return 18
    return 20
  }

  /**
   * Get background property.
   * @param {string} background
   * @return {string} background property.
   */
  const getBackground = background => {
    /**
     * Return one of theme presets or the original value.
     */
    return themedProperty(colors.background, background)
  }

  /**
   * Get box-shadow (elevation).
   * @param {string} level — level of elevation.
   * @return {string} elevation box-shadow.
   */
  const getElevation = level => {
    /**
     * There is no fallback, undefined will be returned.
     */
    return elevations[level]
  }

  /**
   * Get the color for an icon.
   * @param {string} color
   * @return {string} color of the icon
   */
  const getIconColor = color => {
    /**
     * Check if there is a preset in the theme for the icon color.
     */
    return themedProperty(colors.icon, color)
  }

  /**
   * Get the properties for an icon based on the intent.
   * @param {Intent} intent
   * @return {Object} properties
   */
  const getIconForIntent = intent => {
    switch (intent) {
      case Intent.SUCCESS:
        return { icon: 'tick-circle', color: 'success' }
      case Intent.DANGER:
        return { icon: 'error', color: 'danger' }
      case Intent.WARNING:
        return { icon: 'warning-sign', color: 'warning' }
      case Intent.NONE:
      default:
        return { icon: 'info-sign', color: 'info' }
    }
  }

  /**
   * Heading styles.
   * @param {number} size - 100–900. 500 is default.
   * @return {Object} heading style.
   */
  const getHeadingStyle = size => {
    return themedProperty(headings, String(size))
  }

  /**
   * Text styles for single line text.
   * This is used in the Text component. The Text component is used by:
   * - Small
   * - Strong
   * - Code
   * - ListItem
   * - Label
   * @param {number} size - 300–500. 400 is default.
   * @return {Object} text style.
   */
  const getTextStyle = size => {
    return themedProperty(text, String(size))
  }

  /**
   * Text styles for paragraphs (multi line text).
   * This is used in the Paragraph.
   * @param {number} size - 300–500. 400 is default.
   * @return {Object} text style.
   */
  const getParagraphStyle = size => {
    return themedProperty(paragraph, String(size))
  }

  /**
   * Get the font family. This is used to override the font family.
   * @param {string} fontFamily
   * @return {string} font family
   */
  const getFontFamily = fontFamily => {
    /**
     * Allow for passing in a custom fontFamily not in the theme.
     */
    return themedProperty(fontFamilies, fontFamily)
  }

  /**
   * Get the text color. This is used to override the color.
   * @param {string} fontFamily
   * @return {string} font family
   */
  const getTextColor = color => {
    /**
     * Allow for passing in a custom text color not in the theme.
     */
    return themedProperty(colors.text, color)
  }

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
   * @return {String} color
   */
  const getTextColorForIntent = (intent, defaultColor) => {
    switch (intent) {
      case Intent.SUCCESS:
        return colors.text.success
      case Intent.DANGER:
        return colors.text.danger
      case Intent.WARNING:
        return colors.text.warning
      default:
        return defaultColor || colors.text.default
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

  const primaryButtonGradients = {
    ...{
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
    },
    ...(config.primaryButtonGradients || {})
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
        return {
          linearGradient: getLinearGradientWithStates(startColor, endColor),
          focusColor: tinycolor(startColor)
            .setAlpha(0.4)
            .toString()
        }
      }
      case Intent.WARNING: {
        const { startColor, endColor } = primaryButtonGradients.warning
        return {
          linearGradient: getLinearGradientWithStates(startColor, endColor),
          focusColor: tinycolor(startColor)
            .setAlpha(0.4)
            .toString()
        }
      }
      case Intent.DANGER: {
        const { startColor, endColor } = primaryButtonGradients.danger
        return {
          linearGradient: getLinearGradientWithStates(startColor, endColor),
          focusColor: tinycolor(startColor)
            .setAlpha(0.4)
            .toString()
        }
      }
      default: {
        const { startColor, endColor } = primaryButtonGradients.none
        return {
          linearGradient: getLinearGradientWithStates(startColor, endColor),
          focusColor: tinycolor(startColor)
            .setAlpha(0.4)
            .toString()
        }
      }
    }
  }

  const defaultControlStyles = {
    disabled: {
      opacity: 0.8,
      backgroundImage: 'none',
      backgroundColor: scales.neutral.N2A,
      boxShadow: 'none',
      color: scales.neutral.N7A
    },
    base: {
      backgroundColor: 'white',
      backgroundImage: linearGradient('#FFFFFF', '#F4F5F7'),
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${
        scales.neutral.N2A
      }`
    },
    hover: {
      backgroundImage: linearGradient('#FAFBFB', '#EAECEE')
    },
    focus: {
      boxShadow: `0 0 0 3px ${scales.primary.P4A}, inset 0 0 0 1px ${
        scales.neutral.N5A
      }, inset 0 -1px 1px 0 ${scales.neutral.N4A}`
    },
    active: {
      backgroundImage: 'none',
      backgroundColor: scales.primary.P3A,
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 1px 1px 0 ${
        scales.neutral.N2A
      }`
    },
    focusAndActive: {
      boxShadow: `0 0 0 3px ${scales.primary.P4A}, inset 0 0 0 1px ${
        scales.neutral.N5A
      }, inset 0 1px 1px 0 ${scales.neutral.N2A}`
    }
  }

  /**
   * @param {number} size
   * @param {number} sizeLimitOneCharacter
   * @return {number} font size
   */
  const getAvatarInitialsFontSize = (size, sizeLimitOneCharacter) => {
    if (size <= sizeLimitOneCharacter) {
      return Math.ceil(size / 2.2)
    }
    return Math.ceil(size / 2.6)
  }

  return {
    // Colors.
    scales,
    palette,
    colors,
    fills,

    // Elevations.
    elevations,

    // Typography.
    fontFamilies,
    headings,
    text,
    paragraph,

    // Private Theme Helpers.
    linearGradient,
    getTextColorForIntent,
    getLinearGradientWithStates,
    getPrimaryButtonStylesForIntent,
    defaultControlStyles,

    // Public Theme Helpers.
    getBorderRadiusForControlHeight,
    getTextSizeForControlHeight,
    getIconSizeForButton,
    getIconSizeForInput,
    getIconSizeForSelect,
    getIconSizeForIconButton,
    getBackground,
    getElevation,
    getIconColor,
    getIconForIntent,
    getHeadingStyle,
    getTextStyle,
    getParagraphStyle,
    getFontFamily,
    getTextColor,
    getAvatarInitialsFontSize
  }
}
