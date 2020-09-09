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
 */
import { headings, text, fontFamilies, paragraph } from './typography'

/**
 * Component Specific.
 * ---
 * These ARE REQUIRED for Evergreen to work.
 */
import {
  getRowClassName,
  getMenuItemClassName,
  buttons,
  inputs
} from './component-specific'

export default {
  // Foundational Styles.
  colors,
  elevations,
  fills,
  palette,
  scales,
  tokens,

  getRowClassName,
  getMenuItemClassName,

  inputs,
  buttons,

  typography: {
    headings,
    text,
    fontFamilies,
    paragraph
  }
}
