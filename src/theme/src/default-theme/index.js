/**
 * Theme
 * ---
 * The theme object is used to style Evergreen.
 * It is passed into the  `<ThemeProvider value={theme} />`.
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
  buttonColors,
  checkboxColors,
  codeColors,
  defaultControlColors,
  rowColors,
  spinnerColor,
  switchColors,
  tabColors,
  tableColors,
  tagInputColors,
  textareaColors,
  textDropdownColors,
  textInputColors,
  overlayBackgroundColor,
  getBadgeClassName,
  getButtonClassName,
  getIcon,
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

import extend from './utils/extend'

const defaultTheme = {
  // Foundational Styles.
  colors,
  elevations,
  fills,
  palette,
  scales,

  // Component Specific.
  avatarColors,
  badgeColors,
  buttonColors,
  checkboxColors,
  codeColors,
  defaultControlColors,
  rowColors,
  spinnerColor,
  switchColors,
  tabColors,
  tableColors,
  tagInputColors,
  textareaColors,
  textDropdownColors,
  textInputColors,
  overlayBackgroundColor,
  getBadgeClassName,
  getButtonClassName,
  getIcon,
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

defaultTheme.extend = () => extend(defaultTheme)

export default defaultTheme
