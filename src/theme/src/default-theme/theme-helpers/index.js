import { Intent } from '../../../../constants'
import themedProperty from '../utils/themedProperty'
import { colors, elevations } from '../foundational-styles'
import { fontFamilies, headings, paragraph, text } from '../typography'

/**
 * Controls include:
 * - Button
 * - IconButton
 * - TextInput
 * @param {number} height
 * @param {Object} theme - the theme object
 * @return {number} border radius
 */
const getBorderRadiusForControlHeight = (height, _) => {
  if (height <= 40) return 3
  return 4
}

/**
 * Get the text size for a control with a certain height.
 * @param {number} height
 * @param {Object} theme - the theme object
 * @return {number} text size of the control height.
 */
const getTextSizeForControlHeight = (height, _) => {
  if (height <= 24) return 300
  if (height <= 28) return 300
  if (height <= 32) return 300
  if (height <= 36) return 400
  if (height <= 40) return 400
  return 500
}

/**
 * Get the size for a icon in a Button with a certain height.
 * @param {number} height
 * @param {Object} theme - the theme object
 * @return {number} icon size
 */
const getIconSizeForButton = (height, _) => {
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
 * @param {Object} theme - the theme object
 * @return {number} icon size
 */
const getIconSizeForIconButton = (height, _) => {
  if (height <= 28) return 12
  if (height <= 32) return 14 // Slightly bigger than getIconSizeForButton
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

/**
 * Get background property.
 * @param {string} background
 * @param {Object} theme - the theme object
 * @return {string} background property.
 */
const getBackground = (background, theme) => {
  const search =
    theme && theme.colors && theme.colors && theme.colors.background
      ? theme.colors.background
      : colors.background
  /**
   * Return one of theme presets or the original value.
   */
  return themedProperty(search, background)
}

/**
 * Get box-shadow (elevation).
 * @param {string} level — level of elevation.
 * @param {Object} theme - the theme object
 * @return {string} elevation box-shadow.
 */
const getElevation = (level, theme) => {
  const search = theme && theme.elevations ? theme.elevations : elevations
  /**
   * There is no fallback, undefined will be returned.
   */
  return search[level]
}

/**
 * Get the color for an icon.
 * @param {string} color
 * @param {Object} theme - the theme object
 * @return {string} color of the icon
 */
const getIconColor = (color, theme) => {
  const search =
    theme && theme.colors && theme.colors.icon ? theme.colors.icon : colors.icon
  /**
   * Check if there is a preset in the theme for the icon color.
   */
  return themedProperty(search, color)
}

/**
 * Get the properties for an icon based on the intent.
 * @param {Intent} intent
 * @param {Object} theme - the theme object
 * @return {Object} properties
 */
const getIconForIntent = (intent, _) => {
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
 * @param {Object} theme - the theme object
 * @return {Object} heading style.
 */
const getHeadingStyle = (size, theme) => {
  const search =
    theme && theme.typography && theme.typography.headings
      ? theme.typography.headings
      : headings
  return themedProperty(search, String(size))
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
 * @param {Object} theme - the theme object
 * @return {Object} text style.
 */
const getTextStyle = (size, theme) => {
  const search =
    theme && theme.typography && theme.typography.text
      ? theme.typography.text
      : text
  return themedProperty(search, String(size))
}

/**
 * Text styles for paragraphs (multi line text).
 * This is used in the Paragraph.
 * @param {number} size - 300–500. 400 is default.
 * @param {Object} theme - the theme object
 * @return {Object} text style.
 */
const getParagraphStyle = (size, theme) => {
  const search =
    theme && theme.typography && theme.typography.paragraph
      ? theme.typography.paragraph
      : paragraph
  return themedProperty(search, String(size))
}

/**
 * Get the font family. This is used to override the font family.
 * @param {string} fontFamily
 * @param {Object} theme - the theme object
 * @return {string} font family
 */
const getFontFamily = (fontFamily, theme) => {
  const search =
    theme && theme.typography && theme.typography.fontFamilies
      ? theme.typography.fontFamilies
      : fontFamilies
  /**
   * Allow for passing in a custom fontFamily not in the theme.
   */
  return themedProperty(search, fontFamily)
}

/**
 * Get the text color. This is used to override the color.
 * @param {string} color
 * @param {Object} theme - the theme object
 * @return {string} color
 */
const getTextColor = (color, theme) => {
  const search =
    theme && theme.colors && theme.colors.text ? theme.colors.text : colors.text
  /**
   * Allow for passing in a custom text color not in the theme.
   */
  return themedProperty(search, color)
}

export {
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
  getTextColor
}
