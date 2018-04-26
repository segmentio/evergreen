import { colors } from '../../colors'

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
    info: colors.blue['500'],
    success: colors.green['500'],
    danger: colors.red['500'],
    warning: colors.yellow['500']
  },

  /**
   * Available on Pane as `<Pane background(Color)="tint1" />`
   * @property {string} background.tint1 - Lightest tinted background color. Required property.
   * @property {string} background.tint2 - Slightly darker tinted background color. Required property.
   * @property {string} background.tint3 - Even slightly more darker tinted background color. Required property.
   */
  background: {
    tint1: colors.neutral['3A'],
    tint2: colors.neutral['5A'],
    tint3: colors.neutral['7A']
  },

  /**
   * Available on Pane as `<Pane borderBottom borderRight="muted" />`
   * @property {string} text.default - Required property.
   * @property {string} text.muted - Slightly lighter color than default. Required property.
   * @property {string} text.darker - Slightly darker color than default.  Required property.
   */
  border: {
    default: colors.neutral['20A'], // Was BorderColors.muted in v3 and under
    muted: colors.neutral['10A'], // Was BorderColors.extraMuted in v3 and under.
    darker: colors.neutral['30A'] // Was BorderColors.default in v3 and under.
  },

  /**
   * Text colors available on Text as `<Text color="muted" />`
   * @property {string} text.default - Required property.
   * @property {string} text.muted - Required property.
   * @property {string} text.extraMuted - Required property.
   */
  text: {
    default: colors.neutral['500'],
    muted: colors.neutral['300A'],
    extraMuted: colors.neutral['200A']
  },

  /**
   * Heading colors available on Heading as `<Heading color="default" />`
   * @property {string} heading.default - Required property.
   */
  heading: {
    default: colors.neutral['800']
  },

  /**
   * Icon colors available on Icon.
   * @property {string} icon.default - Required property.
   * @property {string} icon.muted - Required property.
   * @property {string} icon.selected - Required property.
   */
  icon: {
    default: colors.neutral['200A'],
    muted: colors.neutral['60A'],
    selected: colors.blue['500']
  },

  /**
   * @property {string} overlay - Overlay background color.
   */
  overlay: colors.neutral['200A']
}

theme.fontFamilies = {
  /**
   * @property {string} display - Used for headings.
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

export default theme
