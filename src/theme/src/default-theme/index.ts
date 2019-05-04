/**
 * Theme
 * ---
 * The theme object is used to style Evergreen.
 * It is passed into the  `<ThemeProvider theme={theme} />`.
 * ----
 * You can use this as a template for your own themes.
 */

/**
 * Foundational Styles.
 * ---
 * The following properties are NOT REQUIRED by Evergreen.
 * It's exposed for convenience and documentation.
 */
import {
  colors,
  elevations,
  fills,
  palette,
  scales
} from './foundational-styles'

/**
 * Typography.
 * ---
 * The following properties are NOT REQUIRED by Evergreen.
 * It's exposed for convenience and documentation.
 */
import { headings, text, fontFamilies, paragraph } from './typography'

/**
 * Component Specific.
 * ---
 * These ARE REQUIRED for Evergreen to work.
 */
import {
  avatarColors,
  badgeColors,
  spinnerColor,
  overlayBackgroundColor,
  getBadgeClassName,
  getButtonClassName,
  getLinkClassName,
  getCheckboxClassName,
  getRadioClassName,
  getTagInputClassName,
  getTextInputClassName,
  getTextareaClassName,
  getTextDropdownButtonClassName,
  getTabClassName,
  getTableCellClassName,
  getTooltipProps,
  getRowClassName,
  getMenuItemClassName,
  getSelectClassName,
  getSegmentedControlRadioClassName,
  getSwitchClassName,
  getAlertProps,
  getCodeProps,
  getAvatarProps,
  getBadgeProps,
  getAvatarInitialsFontSize
} from './component-specific'

/**
 * Theme Helpers.
 * ---
 * These ARE REQUIRED for Evergreen to work.
 */
import {
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
} from './theme-helpers'

export default {
  // Foundational Styles.
  colors,
  elevations,
  fills,
  palette,
  scales,

  // Component Specific.
  avatarColors,
  badgeColors,
  spinnerColor,
  overlayBackgroundColor,
  getBadgeClassName,
  getButtonClassName,
  getLinkClassName,
  getCheckboxClassName,
  getRadioClassName,
  getTagInputClassName,
  getTextInputClassName,
  getTextareaClassName,
  getTextDropdownButtonClassName,
  getTabClassName,
  getTableCellClassName,
  getTooltipProps,
  getRowClassName,
  getMenuItemClassName,
  getSelectClassName,
  getSegmentedControlRadioClassName,
  getSwitchClassName,
  getAlertProps,
  getCodeProps,
  getAvatarProps,
  getBadgeProps,
  getAvatarInitialsFontSize,

  // Theme Helpers.
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

  typography: {
    headings,
    text,
    fontFamilies,
    paragraph
  }
}
