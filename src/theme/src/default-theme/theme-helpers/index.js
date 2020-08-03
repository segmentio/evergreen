import themedProperty from '../utils/themedProperty'
import { colors, elevations } from '../foundational-styles'
import { fontFamilies, headings, paragraph, text } from '../typography'

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
  return 500
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
  getHeadingStyle,
  getTextStyle,
  getParagraphStyle,
  getFontFamily,
  getTextColor
}
