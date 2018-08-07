export default function createStyles(config = {}) {
  /**
   * Neutrals and Blue are special.
   * They need more variations to properly express all of our UI.
   */
  const scales = {
    ...{
      neutral: {
        N1: '#F9F9FB',
        N2: '#F5F6F7',
        N3: '#EDF0F2',
        N4: '#E4E7EB',
        N5: '#C7CED4',
        N6: '#A6B1BB',
        N7: '#7B8B9A', // Large Text AA
        N8: '#66788A', // Normal Text AA
        N9: '#425A70', // Normal Text AAA
        N10: '#234361', // Normal Text AAA

        // Transparent variants.
        N1A: 'rgba(67, 90, 111, 0.04)',
        N2A: 'rgba(67, 90, 111, 0.06)',
        N3A: 'rgba(67, 90, 111, 0.09)',
        N4A: 'rgba(67, 90, 111, 0.14)',
        N5A: 'rgba(67, 90, 111, 0.3)',
        N6A: 'rgba(67, 90, 111, 0.47)',
        N7A: 'rgba(67, 90, 111, 0.7)',
        N8A: 'rgba(67, 90, 111, 0.81)'
      },

      blue: {
        B1: '#f7f9fd',
        B2: '#f1f7fc',
        B3: '#e9f2fa',
        B4: '#ddebf7',
        B5: '#b7d4ef',
        B6: '#8fbce6',
        B7: '#579ad9', // Large Text AA
        B8: '#3d8bd4', // Normal Text AA
        B9: '#1070ca', // Normal Text AAA
        B10: '#084b8a', // Normal Text AAA

        // Transparent variants.
        B1A: 'rgba(16, 112, 202, 0.04)',
        B2A: 'rgba(16, 112, 202, 0.06)',
        B3A: 'rgba(16, 112, 202, 0.09)',
        B4A: 'rgba(16, 112, 202, 0.14)',
        B5A: 'rgba(16, 112, 202, 0.3)',
        B6A: 'rgba(16, 112, 202, 0.47)',
        B7A: 'rgba(16, 112, 202, 0.7)',
        B8A: 'rgba(16, 112, 202, 0.81)'
      }
    },
    ...(config.scales || {})
  }

  const palette = {
    ...{
      neutral: {
        lightest: scales.neutral.N1,
        light: scales.neutral.N4,
        base: scales.neutral.N9,
        dark: scales.neutral.N10
      },

      blue: {
        lightest: scales.blue.B1,
        light: scales.blue.B4,
        base: scales.blue.B9,
        dark: scales.blue.B10
      },

      red: {
        lightest: '#fef6f6',
        light: '#fae2e2',
        base: '#ec4c47',
        dark: '#bf0e08'
      },

      orange: {
        lightest: '#fdf8f3',
        light: '#fae3cd',
        base: '#d9822b',
        dark: '#95591e'
      },

      yellow: {
        lightest: '#fef8e7',
        light: '#fbe6a2',
        base: '#f7d154',
        dark: '#7e6514'
      },

      green: {
        lightest: '#f1faf5',
        light: '#d4eee2',
        base: '#47b881',
        dark: '#00783e'
      },

      teal: {
        lightest: '#f1fbfc',
        light: '#d2eef3',
        base: '#14b5d0',
        dark: '#007489'
      },

      purple: {
        lightest: '#f8f7fc',
        light: '#eae7f8',
        base: '#735dd0',
        dark: '#37248f'
      }
    },
    ...(config.palette || {})
  }

  /**
   * This object are functional colors being used the default theme.
   * A required property is required by the default theme NOT by Evergreen itself.
   */
  const colors = {
    /**
     * Available on Pane as `<Pane background="tint1" />`
     * @property {string} background.tint1 - Lightest tinted background color. Required property.
     * @property {string} background.tint2 - Slightly darker tinted background color. Required property.
     * @property {string} background.overlay - color used for the overlay
     */
    background: {
      tint1: scales.neutral.N1,
      tint2: scales.neutral.N2,
      overlay: scales.neutral.N7A,

      // Non required.
      yellowTint: palette.yellow.lightest,
      greenTint: palette.green.lightest,
      orangeTint: palette.orange.lightest,
      redTint: palette.red.lightest,
      blueTint: palette.blue.lightest,
      purpleTint: palette.purple.lightest,
      tealTint: palette.teal.lightest
    },

    /**
     * Available on Pane as `<Pane borderBottom borderRight="muted" />`
     * @property {string} text.default - Required property.
     * @property {string} text.muted - Slightly lighter color than default. Required property.
     */
    border: {
      default: scales.neutral.N4, // Was BorderColors.muted in v3 and under.
      muted: scales.neutral.N3 // Was BorderColors.extraMuted in v3 and under
    },

    /**
     * Text colors available on Text as `<Text color="muted" />`.
     * @property {string} text.muted - Required property.
     * @property {string} text.default - Required property. Default for text.
     * @property {string} text.dark - Required property. Default for headings.
     */
    text: {
      muted: scales.neutral.N8,
      default: scales.neutral.N9,
      dark: scales.neutral.N10,
      selected: palette.blue.base,

      // Intent.
      success: palette.green.dark,
      info: palette.blue.dark,
      danger: palette.red.dark,
      warning: palette.orange.dark
    },

    /**
     * Icon colors available on Icon.
     * @property {string} icon.default - Required property.
     * @property {string} icon.muted - Required property.
     * @property {string} icon.selected - Required property.
     */
    icon: {
      default: scales.neutral.N8,
      muted: scales.neutral.N7,
      disabled: scales.neutral.N5A,
      selected: palette.blue.base,

      // Intent.
      success: palette.green.base,
      info: palette.blue.base,
      danger: palette.red.base,
      warning: palette.orange.base
    },

    /**
     * Used for Alerts and other (future) componentes that express intent.
     * @property {string} intent.none - Required property.
     * @property {string} intent.success - Required property.
     * @property {string} intent.danger - Required property.
     * @property {string} intent.warning - Required property.
     */
    intent: {
      none: palette.blue.base,
      success: palette.green.base,
      danger: palette.red.base,
      warning: palette.orange.base
    }
  }

  /**
   * Fills are used in Avatars and Badges.
   */
  const fills = {}

  fills.solid = {
    neutral: {
      color: 'white',
      backgroundColor: palette.neutral.base
    },
    blue: {
      color: 'white',
      backgroundColor: palette.blue.base
    },
    red: {
      color: 'white',
      backgroundColor: palette.red.base
    },
    orange: {
      color: 'white',
      backgroundColor: palette.orange.base
    },
    yellow: {
      color: palette.yellow.darkest,
      backgroundColor: palette.yellow.base
    },
    green: {
      color: 'white',
      backgroundColor: palette.green.base
    },
    teal: {
      color: 'white',
      backgroundColor: palette.teal.base
    },
    purple: {
      color: 'white',
      backgroundColor: palette.purple.base
    }
  }

  fills.subtle = {
    neutral: {
      color: colors.text.default,
      backgroundColor: palette.neutral.light
    },
    blue: {
      color: palette.blue.dark,
      backgroundColor: palette.blue.light
    },
    red: {
      color: palette.red.dark,
      backgroundColor: palette.red.light
    },
    orange: {
      color: palette.orange.dark,
      backgroundColor: palette.orange.light
    },
    yellow: {
      color: palette.yellow.dark,
      backgroundColor: palette.yellow.light
    },
    green: {
      color: palette.green.dark,
      backgroundColor: palette.green.light
    },
    teal: {
      color: palette.teal.dark,
      backgroundColor: palette.teal.light
    },
    purple: {
      color: palette.purple.dark,
      backgroundColor: palette.purple.light
    }
  }

  fills.options = Object.keys(fills.solid)

  const borderShadowColor = scales.neutral.N5A // Used to be colors.neutral['80A'] in v3 and down.
  const blurryShadowColor = scales.neutral.N6A // Used to be colors.neutral['50A'] in v3 and down.

  /**
   * Elevation styles are applied as box shadows.
   * Available levels: 0, 1, 2, 3, 4.
   */
  const elevations = config.elevations || [
    `0 0 1px ${borderShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 2px 4px -2px ${blurryShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 5px 8px -4px ${blurryShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 8px 10px -4px ${blurryShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 16px 24px -8px ${blurryShadowColor}`
  ]

  const fontFamilies = {
    /**
     * @property {string} display - Used for headings larger than 20px.
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

  /**
   * Heading styles.
   * @property {Object} headings.900
   * @property {Object} headings.800
   * @property {Object} headings.700
   * @property {Object} headings.600
   * @property {Object} headings.500 - Default.
   * @property {Object} headings.400
   * @property {Object} headings.300
   * @property {Object} headings.200
   * @property {Object} headings.100
   */
  const headings = {
    '900': {
      fontSize: '35px',
      fontWeight: 500,
      lineHeight: '40px',
      letterSpacing: '-0.2px',
      marginTop: 52,
      fontFamily: fontFamilies.display,
      color: colors.text.dark
    },
    '800': {
      fontSize: '29px',
      fontWeight: 500,
      lineHeight: '32px',
      letterSpacing: '-0.2px',
      marginTop: 40,
      fontFamily: fontFamilies.display,
      color: colors.text.dark
    },
    '700': {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '28px',
      letterSpacing: '-0.07px',
      marginTop: 40,
      fontFamily: fontFamilies.display,
      color: colors.text.dark
    },
    '600': {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '-0.07px',
      marginTop: 28,
      fontFamily: fontFamilies.display,
      color: colors.text.dark
    },
    '500': {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 24,
      fontFamily: fontFamilies.ui,
      color: colors.text.dark
    },
    '400': {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 16,
      fontFamily: fontFamilies.ui,
      color: colors.text.dark
    },
    '300': {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      letterSpacing: '0',
      marginTop: 16,
      fontFamily: fontFamilies.ui,
      color: colors.text.dark
    },
    '200': {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      marginTop: 16,
      fontFamily: fontFamilies.ui,
      color: colors.text.muted
    },
    '100': {
      fontSize: '11px',
      fontWeight: 400,
      textTransform: 'uppercase',
      lineHeight: '16px',
      letterSpacing: '0.6px',
      marginTop: 16,
      fontFamily: fontFamilies.ui,
      color: colors.text.muted
    }
  }

  /**
   * Text styles for single line text.
   * This is used in the Text component. The Text component is used by:
   * - Small
   * - Strong
   * - Code
   * - ListItem
   * - Label
   * - Link
   * @property {Object} 600 - Required property.
   * @property {Object} 500 - Required property.
   * @property {Object} 400 - Required property. Default.
   * @property {Object} 300 - Required property.
   */
  const text = {
    /**
     * It's useful to have 600 because `Link` uses the `Text` component.
     * A `Link` could be used as 600 in the context of a breadcrumb.
     */
    '600': {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '-0.07px',
      marginTop: 28,
      /**
       * Use font family display because the font-size is 20px.
       */
      fontFamily: fontFamilies.display
    },
    '500': {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 16
    },
    '400': {
      // Default
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 12
    },
    '300': {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0',
      marginTop: 12
    }
  }

  /**
   * Text styles for paragraphs (multi line text).
   * This is used in the Paragraph.
   * @property {Object} text.500 - Required property.
   * @property {Object} text.400 - Required property. Default.
   * @property {Object} text.300 - Required property.
   */
  const paragraph = {
    '500': {
      ...text['500'],
      lineHeight: '24px'
    },
    '400': {
      ...text['400'],
      lineHeight: '21px'
    },
    '300': {
      ...text['300'],
      lineHeight: '18px'
    }
  }

  return {
    scales,
    palette,
    colors,
    fills,
    elevations,

    fontFamilies,
    headings,
    text,
    paragraph
  }
}
