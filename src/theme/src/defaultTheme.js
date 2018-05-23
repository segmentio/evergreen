import tinycolor from 'tinycolor2'
import { css } from 'glamor'
import { Themer } from '../../themer/'

/**
 * Neutrals and Blue are special.
 * They need more variations to properly express all of our UI.
 */
const scales = {
  neutral: {
    N1: '#FAFAFA',
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
    N1A: 'rgba(67, 90, 111, 0.03)',
    N2A: 'rgba(67, 90, 111, 0.06)',
    N3A: 'rgba(67, 90, 111, 0.09)',
    N4A: 'rgba(67, 90, 111, 0.14)',
    N5A: 'rgba(67, 90, 111, 0.3)',
    N6A: 'rgba(67, 90, 111, 0.47)',
    N7A: 'rgba(67, 90, 111, 0.7)',
    N8A: 'rgba(67, 90, 111, 0.81)'
  },

  blue: {
    B1: '#f7fafd',
    B2: '#f1f7fc',
    B3: '#e9f2fa',
    B4: '#ddebf7',
    B5: '#b7d4ef',
    B6: '#8fbce6',
    B7: '#579ad9', // Large Text AA
    B8: '#3d8bd4', // Normal Text AA
    B9: '#1070ca', // Normal Text AAA
    B10: '#084b8a', // Normal Text AAA

    // Transparent variants.
    B1A: 'rgba(16, 112, 202, 0.03)',
    B2A: 'rgba(16, 112, 202, 0.06)',
    B3A: 'rgba(16, 112, 202, 0.09)',
    B4A: 'rgba(16, 112, 202, 0.14)',
    B5A: 'rgba(16, 112, 202, 0.3)',
    B6A: 'rgba(16, 112, 202, 0.47)',
    B7A: 'rgba(16, 112, 202, 0.7)',
    B8A: 'rgba(16, 112, 202, 0.81)'
  }
}

const palette = {
  neutral: {
    lightest: scales.neutral.N1,
    light: scales.neutral.N4,
    base: scales.neutral.N9,
    dark: scales.neutral.N10
  },

  blue: {
    lightest: scales.blue.B1,
    light: scales.blue.B4,
    base: scales.blue.B9,
    dark: scales.blue.B10
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
    base: '#735dd0;',
    dark: '#37248f'
  }
}

/**
 * The theme object is used to style Evergreen.
 * It is passed into the  `<ThemeProvider theme={theme} />`.
 * ----
 * You can use this as a template for your own themes.
 */
const theme = {}

theme.colors = {
  /**
   * Used for Alerts and other (future) componentes that express intent.
   * @property {string} intent.info - Required property.
   * @property {string} intent.success - Required property.
   * @property {string} intent.danger - Required property.
   * @property {string} intent.warning - Required property.
   */
  intent: {
    info: palette.blue.base,
    success: palette.green.base,
    danger: palette.red.base,
    warning: palette.orange.base
  },

  /**
   * Available on Pane as `<Pane background="tint1" />`
   * @property {string} background.tint1 - Lightest tinted background color. Required property.
   * @property {string} background.tint2 - Slightly darker tinted background color. Required property.
   */
  background: {
    tint1: scales.neutral.N1,
    tint2: scales.neutral.N2,

    // Non required.
    yellowTint: palette.yellow.lightest,
    greenTint: palette.green.lightest,
    orangeTint: palette.orange.lightest,
    redTint: palette.red.lightest,
    blueTint: palette.blue.lightest,
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

    // Intent.
    success: palette.green.dark,
    info: palette.blue.dark,
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
    selected: palette.blue.base,

    // Intent.
    success: palette.green.base,
    info: palette.blue.base,
    danger: palette.red.base,
    warning: palette.orange.base
  },

  /**
   * @property {string} overlay - Overlay background color.
   */
  overlay: scales.neutral.N8A
}

theme.getBackground = background => {
  /**
   * Return one of theme presets or the original value.
   */
  return theme.colors.background[background] || background
}

const borderShadowColor = scales.neutral.N5A // Used to be colors.neutral['80A'] in v3 and down.
const blurryShadowColor = scales.neutral.N6A // Used to be colors.neutral['50A'] in v3 and down.

/**
 * Elevation styles are applied as box shadows.
 * Available levels: 0, 1, 2, 3, 4.
 */
theme.elevations = [
  `0 0 1px ${borderShadowColor}`,
  `0 0 1px ${borderShadowColor}, 0 2px 4px -2px ${blurryShadowColor}`,
  `0 0 1px ${borderShadowColor}, 0 5px 8px -4px ${blurryShadowColor}`,
  `0 0 1px ${borderShadowColor}, 0 8px 10px -4px ${blurryShadowColor}`,
  `0 0 1px ${borderShadowColor}, 0 16px 24px -8px ${blurryShadowColor}`
]

const Helpers = {
  linearGradient: (top, bottom) => {
    return `linear-gradient(to bottom, ${top}, ${bottom})`
  },
  getTextColorForIntent: intent => {
    switch (intent) {
      case 'success':
        return theme.colors.text.success
      case 'danger':
        return theme.colors.text.danger
      case 'warning':
        return theme.colors.text.warning
      default:
        return theme.colors.text.default
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
      case 'success': {
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
      case 'warning': {
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
      case 'danger': {
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

theme.getElevation = level => {
  /**
   * There is no fallback, undefined will be returned.
   */
  return theme.elevations[level]
}

/**
 * Controls include:
 * - Button
 * - IconButton
 * - TextInput
 */
theme.getBorderRadiusForControlHeight = height => {
  if (height <= 40) return 3
  return 4
}

theme.getTextSizeForControlHeight = height => {
  if (height <= 24) return 300
  if (height <= 28) return 300
  if (height <= 32) return 300
  if (height <= 36) return 400
  if (height <= 40) return 400
  if (height <= 48) return 500
  if (height <= 56) return 700
  return 800
}

theme.getIconColor = color => {
  if (Object.prototype.hasOwnProperty.call(theme.colors.icon, color)) {
    return theme.colors.icon[color]
  }
  return color
}

theme.getIconSizeForButton = height => {
  if (height <= 28) return 12
  if (height <= 32) return 12
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

theme.getIconSizeForIconButton = height => {
  if (height <= 28) return 12
  if (height <= 32) return 14
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

theme.getIconForIntent = intent => {
  switch (intent) {
    case 'success':
      return { icon: 'tick-circle', color: 'success' }
    case 'info':
    default:
      return { icon: 'info-sign', color: 'info' }
    case 'danger':
      return { icon: 'error', color: 'danger' }
    case 'warning':
      return { icon: 'warning-sign', color: 'warning' }
  }
}

theme.getIconSizeForInput = theme.getIconSizeForButton

theme.fontFamilies = {
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

theme.typography = {}

/**
 * Heading styles.
 * @property {Object} headings.900 - Required property.
 * @property {Object} headings.800 - Required property.
 * @property {Object} headings.700 - Required property.
 * @property {Object} headings.600 - Required property.
 * @property {Object} headings.500 - Required property. Default.
 * @property {Object} headings.400 - Required property.
 * @property {Object} headings.300 - Required property.
 * @property {Object} headings.200 - Required property.
 * @property {Object} headings.100 - Required property.
 */
theme.typography.headings = {
  '900': {
    fontSize: '35px',
    fontWeight: 500,
    lineHeight: '40px',
    letterSpacing: '-0.2px',
    marginTop: 52,
    fontFamily: theme.fontFamilies.display,
    color: theme.colors.text.dark
  },
  '800': {
    fontSize: '29px',
    fontWeight: 500,
    lineHeight: '32px',
    letterSpacing: '-0.2px',
    marginTop: 40,
    fontFamily: theme.fontFamilies.display,
    color: theme.colors.text.dark
  },
  '700': {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '28px',
    letterSpacing: '-0.07px',
    marginTop: 40,
    fontFamily: theme.fontFamilies.display,
    color: theme.colors.text.dark
  },
  '600': {
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    marginTop: 28,
    fontFamily: theme.fontFamilies.display,
    color: theme.colors.text.dark
  },
  '500': {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 24,
    fontFamily: theme.fontFamilies.ui,
    color: theme.colors.text.dark
  },
  '400': {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 16,
    fontFamily: theme.fontFamilies.ui,
    color: theme.colors.text.dark
  },
  '300': {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: '0',
    marginTop: 16,
    fontFamily: theme.fontFamilies.ui,
    color: theme.colors.text.dark
  },
  '200': {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
    marginTop: 16,
    fontFamily: theme.fontFamilies.ui,
    color: theme.colors.text.muted
  },
  '100': {
    fontSize: '11px',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '16px',
    letterSpacing: '0.6px',
    marginTop: 16,
    fontFamily: theme.fontFamilies.ui,
    color: theme.colors.text.muted
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
 * @property {Object} text.500 - Required property.
 * @property {Object} text.400 - Required property. Default.
 * @property {Object} text.300 - Required property.
 */
theme.typography.text = {
  '500': {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 16
  },
  '400': {
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
theme.typography.paragraph = {
  '500': {
    ...theme.typography.text['500'],
    lineHeight: '24px'
  },
  '400': {
    ...theme.typography.text['400'],
    lineHeight: '21px'
  },
  '300': {
    ...theme.typography.text['300'],
    lineHeight: '16px'
  }
}

theme.getHeadingStyle = size => {
  /**
   * Typography.headings is a required API.
   */
  return theme.typography.headings[String(size)]
}

theme.getFontFamily = fontFamily => {
  /**
   * Allow for passing in a custom fontFamily not in the theme.
   */
  return theme.fontFamilies[fontFamily] || fontFamily
}

theme.getTextColor = color => {
  /**
   * Allow for passing in a custom fontFamily not in the theme.
   */
  return theme.colors.text[color] || color
}

theme.getTextStyle = size => {
  return theme.typography.text[String(size)]
}

/**
 * Appearances.
 */

theme.appearances = {
  link: {},
  button: {}
}

/**
 * Link Appearances.
 */
theme.appearances.link.blue = Themer.createLinkAppearance({
  base: {
    color: palette.blue.base
  },
  hover: {
    color: tinycolor(palette.blue.base)
      .lighten(10)
      .toString()
  },
  active: {
    color: tinycolor(palette.blue.base)
      .darken(10)
      .toString()
  },
  focus: {
    boxShadow: `0 0 0 2px ${tinycolor(palette.blue.base)
      .setAlpha(0.4)
      .toString()}`
  }
})

theme.appearances.link.green = Themer.createLinkAppearance({
  base: {
    color: palette.green.base
  },
  hover: {
    color: tinycolor(palette.green.base)
      .lighten(10)
      .toString()
  },
  active: {
    color: tinycolor(palette.green.base)
      .darken(10)
      .toString()
  },
  focus: {
    boxShadow: `0 0 0 2px ${tinycolor(palette.green.base)
      .setAlpha(0.4)
      .toString()}`
  }
})

/**
 * Default theme uses green as the default color for links.
 */
theme.appearances.link.default = theme.appearances.link.green

theme.appearances.link.neutral = Themer.createLinkAppearance({
  base: {
    color: palette.neutral.base
  },
  hover: {
    color: tinycolor(palette.neutral.base)
      .lighten(10)
      .toString()
  },
  active: {
    color: tinycolor(palette.neutral.base)
      .darken(10)
      .toString()
  },
  focus: {
    boxShadow: `0 0 0 2px ${tinycolor(palette.neutral.base)
      .setAlpha(0.4)
      .toString()}`
  }
})

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
 * Memoize a function that takes string as args, and returns a string.
 */
function memoizeClassName(fn) {
  // Memo will hold a list of string keys with string values (classNames).
  const memo = {}

  // Return the wrapped function.
  return (...args) => {
    // Creat a key by joining all args.
    const key = args.join('_')

    // Check if is already memoized, if so return the result.
    if (memo[key]) return memo[key]

    // Creat a new entry in the memo with the generated className.
    memo[key] = css(fn(...args)).toString()

    // Return the newly generated className.
    return memo[key]
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

/**
 * Get the classname of the current
 * @param {String} appearance - default, primary, minimal.
 * @param {String} intent - none, success, warning, danger.
 * @return {Object} the appearance of the button.
 */
theme.getButtonClassName = memoizeClassName(getButtonAppearance)

theme.getTooltipProps = () => {
  return {
    backgroundColor: tinycolor(palette.neutral.base)
      .setAlpha(0.95)
      .toString()
  }
}

export default theme
