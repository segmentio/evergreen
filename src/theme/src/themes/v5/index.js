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
 */
import { headings, text, fontFamilies, paragraph } from './typography'

/**
 * Component Specific.
 */
import {
  getRowClassName,
  getMenuItemClassName,
  buttons,
  checkbox,
  inputs,
  segmentedControl
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

  // Component-specific
  buttons,
  checkbox,
  segmentedControl,
  inputs,

  typography: {
    headings,
    text,
    fontFamilies,
    paragraph
  }
}
