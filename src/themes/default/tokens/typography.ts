const fontSizes = ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '32px']

// @ts-expect-error ts-migrate(2339) FIXME: Property 'body' does not exist on type 'string[]'.
fontSizes.body = '14px'
// @ts-expect-error ts-migrate(2339) FIXME: Property 'heading' does not exist on type 'string[... Remove this comment to see the full error message
fontSizes.heading = '16px'
// @ts-expect-error ts-migrate(2339) FIXME: Property 'caption' does not exist on type 'string[... Remove this comment to see the full error message
fontSizes.caption = '10px'

const typography = {
  fontFamilies: {
    display: `"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    ui: `"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace`
  },
  fontSizes,
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600
  },
  letterSpacings: {
    tightest: '-0.2px',
    tighter: '-0.07px',
    tight: '-0.05px',
    normal: '0',
    wide: '0.6px'
  },
  lineHeights: ['16px', '18px', '20px', '24px', '28px', '32px', '40px']
}

export default typography
