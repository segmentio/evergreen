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
  scales,
  tokens
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
  getTextDropdownButtonClassName,
  getTableCellClassName,
  getRowClassName,
  getMenuItemClassName,
  getCodeProps,
  buttons,
  inputs
} from './component-specific'

/**
 * Theme Helpers.
 * ---
 * These ARE REQUIRED for Evergreen to work.
 */
import { getIconSizeForIconButton, getElevation } from './theme-helpers'

export default {
  // Foundational Styles.
  colors,
  elevations,
  fills,
  palette,
  scales,
  tokens,

  // Component Specific.
  avatarColors,
  badgeColors,
  getTextDropdownButtonClassName,
  getTableCellClassName,
  getRowClassName,
  getMenuItemClassName,
  getCodeProps,

  // Theme Helpers.
  getIconSizeForIconButton,
  getElevation,

  inputs,
  buttons,

  typography: {
    headings,
    text,
    fontFamilies,
    paragraph
  }
}
