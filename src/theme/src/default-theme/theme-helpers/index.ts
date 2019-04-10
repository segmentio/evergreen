import { Intent, IntentType } from '../../../../constants'
import { colors, elevations } from '../foundational-styles'
import { fontFamilies, headings, paragraph, text } from '../typography'
import themedProperty from '../utils/themedProperty'

/**
 * Controls include:
 * - Button
 * - IconButton
 * - TextInput
 */
const getBorderRadiusForControlHeight = (height: number): number => {
  if (height <= 40) return 3
  return 4
}

// Get the text size for a control with a certain height.
const getTextSizeForControlHeight = (height: number): number => {
  if (height <= 24) return 300
  if (height <= 28) return 300
  if (height <= 32) return 300
  if (height <= 36) return 400
  if (height <= 40) return 400
  return 500
}

// Get the size for a icon in a Button with a certain height.
const getIconSizeForButton = (height: number): number => {
  if (height <= 28) return 12
  if (height <= 32) return 12
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

// Use the same for input components.
const getIconSizeForInput = getIconSizeForButton
const getIconSizeForSelect = getIconSizeForButton

// Get the size for a icon in a IconButton with a certain height.
const getIconSizeForIconButton = (height: number): number => {
  if (height <= 28) return 12
  if (height <= 32) return 14 // Slightly bigger than getIconSizeForButton
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

// Get background property.
const getBackground = (background: string): string => {
  // Return one of theme presets or the original value.
  return themedProperty(colors.background, background)
}

// Get box-shadow (elevation).
const getElevation = (level: number): string => {
  // There is no fallback, undefined will be returned.
  return elevations[level]
}

// Get the color for an icon.
const getIconColor = (color: string): string => {
  // Check if there is a preset in the theme for the icon color.
  return themedProperty(colors.icon, color)
}

// Get the properties for an icon based on the intent.
const getIconForIntent = (intent: IntentType): { [key: string]: any } => {
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

// Heading styles.
const getHeadingStyle = (size: number): { [key: string]: any } => {
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
 */
const getTextStyle = (size: number): { [key: string]: any } => {
  return themedProperty(text, String(size))
}

/**
 * Text styles for paragraphs (multi line text).
 * This is used in the Paragraph.
 */
const getParagraphStyle = (size: number): { [key: string]: any } => {
  return themedProperty(paragraph, String(size))
}

// Get the font family. This is used to override the font family.
const getFontFamily = (fontFamily: string): string => {
  // Allow for passing in a custom fontFamily not in the theme.
  return themedProperty(fontFamilies, fontFamily)
}

// Get the text color. This is used to override the color.
const getTextColor = (color: string): string => {
  // Allow for passing in a custom text color not in the theme.
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
  getIconForIntent,
  getHeadingStyle,
  getTextStyle,
  getParagraphStyle,
  getFontFamily,
  getTextColor
}
