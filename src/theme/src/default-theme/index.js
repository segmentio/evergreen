import tinycolor from 'tinycolor2'
// Glamor is used under the hood in Evergreen by `ui-box`.
// We are thinking to deprecate this in the future in favor of `emotion`.
import { css } from 'glamor'
import { Intent } from '../../../constants'

// Theme Related
// --- styles.
import colors from './colors'
import palette from './palette'
import elevations from './elevations'
import fontFamilies from './fontFamilies'

// --- typography.
import headings from './headings'
import text from './text'
import paragraph from './paragraph'

// --- appearances.
import getButtonAppearance from './getButtonAppearance'
import getLinkAppearance from './getLinkAppearance'

/**
 * Helper function for theming.
 * @param {Object} object - an object with theme presets.
 * @param {Object} keyOrValue - the key for the object, or an actual value.
 */
const themedProperty = (object, keyOrValue) => {
  // Check if there is a preset in the collection for the property.
  if (Object.prototype.hasOwnProperty.call(object, keyOrValue)) {
    return object[keyOrValue]
  }

  // If there is no preset, simply return the property as is.
  return keyOrValue
}

/**
 * The theme object is used to style Evergreen.
 * It is passed into the  `<ThemeProvider theme={theme} />`.
 * ----
 * You can use this as a template for your own themes.
 */
const theme = {}

/**
 * The property `theme.colors` is not a required property by Evergreen.
 * It's expoed for convenience and documentation.
 */
theme.colors = colors

/**
 * Controls include:
 * - Button
 * - IconButton
 * - TextInput
 * @param {Number} height
 * @return {Number} border radius
 */
theme.getBorderRadiusForControlHeight = height => {
  if (height <= 40) return 3
  return 4
}

/**
 * Get the text size for a control with a certain height.
 * @param {Number} height
 * @return {Number} text size of the control height.
 */
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

/**
 * Get the size for a icon in a Button with a certain height.
 * @param {Number} height
 * @return {Number} icon size
 */
theme.getIconSizeForButton = height => {
  if (height <= 28) return 12
  if (height <= 32) return 12
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

// Use the same for input components.
theme.getIconSizeForInput = theme.getIconSizeForButton

/**
 * Get the size for a icon in a IconButton with a certain height.
 * @param {Number} height
 * @return {Number} icon size
 */
theme.getIconSizeForIconButton = height => {
  if (height <= 28) return 12
  if (height <= 32) return 14 // Slightly bigger than getIconSizeForButton
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

/**
 * Get background property.
 * @param {String} background
 * @return {String} background property.
 */
theme.getBackground = background => {
  /**
   * Return one of theme presets or the original value.
   */
  return themedProperty(colors.background, background)
}

/**
 * Get box-shadow (elevation).
 * @param {String} level — level of elevation.
 * @return {String} elevation box-shadow.
 */
theme.getElevation = level => {
  /**
   * There is no fallback, undefined will be returned.
   */
  return elevations[level]
}

/**
 * Get the color for an icon.
 * @param {String} color
 * @return {String} color of the icon
 */
theme.getIconColor = color => {
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
theme.getIconForIntent = intent => {
  switch (intent) {
    case Intent.SUCCESS:
      return { icon: 'tick-circle', color: 'success' }
    case Intent.DANGER:
      return { icon: 'error', color: 'danger' }
    case Intent.WARNING:
      return { icon: 'warning-sign', color: 'warning' }
    case Intent.INFO:
    default:
      return { icon: 'info-sign', color: 'info' }
  }
}

/**
 * Expose for convenience and documentation.
 */
theme.fontFamilies = fontFamilies

/**
 * Expose for convenience and documentation.
 */
theme.typography = {
  headings,
  text,
  paragraph
}

/**
 * Heading styles.
 * @param {Number} size - 100–900. 500 is default.
 * @return {Object} heading style.
 */
theme.getHeadingStyle = size => {
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
 * @param {Number} size - 300–500. 400 is default.
 * @return {Object} text style.
 */
theme.getTextStyle = size => {
  return themedProperty(text, String(size))
}

/**
 * Text styles for paragraphs (multi line text).
 * This is used in the Paragraph.
 * @param {Number} size - 300–500. 400 is default.
 * @return {Object} text style.
 */
theme.getParagraphStyle = size => {
  return themedProperty(paragraph, String(size))
}

/**
 * Get the font family. This is used to override the font family.
 * @param {String} fontFamily
 * @return {String} font family
 */
theme.getFontFamily = fontFamily => {
  /**
   * Allow for passing in a custom fontFamily not in the theme.
   */
  return themedProperty(fontFamilies, fontFamily)
}

/**
 * Get the text color. This is used to override the color.
 * @param {String} fontFamily
 * @return {String} font family
 */
theme.getTextColor = color => {
  /**
   * Allow for passing in a custom text color not in the theme.
   */
  return themedProperty(colors.text, color)
}

/**
 * Memoize a function that takes string as args, and returns a string.
 * @param {Function} fn — function that return an appearance (object).
 * @return {String} a class name.
 */
const memoizeClassName = fn => {
  // Memo will hold a list of string keys with string values (classNames).
  const memo = {}

  // Return the wrapped function.
  return (...args) => {
    // Creat a key by joining all args.
    const key = args.join('_')

    // Check if is already memoized, if so return the result.
    if (memo[key]) return memo[key]

    // Create a new entry in the memo with the generated className.
    memo[key] = css(fn(...args)).toString()

    // Return the newly generated className.
    return memo[key]
  }
}

/**
 * Get the className of a Button|IconButton.
 * @param {String} appearance - default, primary, minimal.
 * @param {Intent} intent - none, success, warning, danger.
 * @return {Object} the appearance class name of the button.
 */
theme.getButtonClassName = memoizeClassName(getButtonAppearance)

/**
 * Get the className of a Link.
 * @param {String} color
 * @return {Object} the appearance class name of the button.
 */
theme.getLinkClassName = memoizeClassName(getLinkAppearance)

theme.getTooltipProps = () => {
  return {
    backgroundColor: tinycolor(palette.neutral.base)
      .setAlpha(0.95)
      .toString()
  }
}

export default theme
