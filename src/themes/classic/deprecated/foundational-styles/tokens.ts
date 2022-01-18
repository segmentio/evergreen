import fills from './fills'

const colorTokens = {
  // Grays / neutrals
  gray900: '#101840',
  gray800: '#474d66',
  gray700: '#696f8c',
  gray600: '#8f95b2',
  gray500: '#c1c4d6',
  gray400: '#d8dae5',
  gray300: '#E6E8F0',
  gray200: '#edeff5',
  gray100: '#F4F5F9',
  gray90: '#F4F6FA',
  gray75: '#F9FAFC',
  gray50: '#FAFBFF',

  // Blues
  blue900: '#0A1433',
  blue800: '#142966',
  blue700: '#1F3D99',
  blue600: '#2952CC',
  blue500: '#3366FF',
  blue400: '#5C85FF',
  blue300: '#85A3FF',
  blue200: '#ADC2FF',
  blue100: '#D6E0FF',
  blue50: '#EBF0FF',
  blue25: '#F3F6FF',

  // Reds
  red700: '#7D2828',
  red600: '#A73636',
  red500: '#D14343',
  red100: '#F9DADA',
  red25: '#FDF4F4',

  // Greens
  green900: '#10261E',
  green800: '#214C3C',
  green700: '#317159',
  green600: '#429777',
  green500: '#52BD95',
  green400: '#75CAAA',
  green300: '#97D7BF',
  green200: '#BAE5D5',
  green100: '#DCF2EA',
  green25: '#F5FBF8',

  // Oranges
  orange700: '#996A13',
  orange500: '#FFB020',
  orange100: '#F8E3DA',
  orange25: '#FFFAF2',

  // Purple
  purple600: '#6E62B6',
  purple100: '#E7E4F9',

  // Teals
  teal800: '#0F5156',
  teal100: '#D3F5F7',

  // Yellows
  yellow800: '#66460D',
  yellow100: '#FFEFD2'
}

const colors = {
  ...colorTokens,
  muted: colorTokens.gray700,
  default: colorTokens.gray800
}

const fontFamilies = {
  /**
   * @property {string} display - Used for headings larger than 20px.
   */
  display:
    '"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

  /**
   * @property {string} ui - Used for text and UI (which includes almost anything).
   */
  ui:
    '"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

  /**
   * @property {string} mono - Used for code and sometimes numbers in tables.
   */
  mono: '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace'
}

const text = {
  /**
   * It's useful to have 600 because `Link` uses the `Text` component.
   * A `Link` could be used as 600 in the context of a breadcrumb.
   */
  600: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.07px'
  },
  500: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px'
  },
  400: {
    // Default
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px'
  },
  300: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: '0'
  }
}

const paragraph = {
  500: {
    ...text['500'],
    lineHeight: '24px'
  },
  400: {
    ...text['400'],
    lineHeight: '21px'
  },
  300: {
    ...text['300'],
    lineHeight: '18px'
  }
}

// Lifted from v5 scales
const overlayBackgroundColor = 'rgba(67, 90, 111, 0.7)'
const codeBackgroundColor = 'rgba(16, 112, 202, 0.06)'
const codeBorderColor = 'rgba(16, 112, 202, 0.14)'

export default {
  colors,
  fontFamilies,
  text,
  paragraph,
  overlayBackgroundColor,
  codeBackgroundColor,
  codeBorderColor,
  // TODO support solid fills for v5 compat
  fills: fills.subtle,
  selectedOptionColor: colors.blue500,
  // Border radius used across input components
  borderRadius: 4,
  primary: {
    base: colors.blue500,
    hover: colors.blue600,
    active: colors.blue700
  },
  intents: {
    info: {
      background: colors.blue25,
      border: colors.blue500,
      text: colors.blue600,
      icon: colors.blue500
    },
    success: {
      background: colors.green25,
      border: colors.green500,
      text: colors.green700,
      icon: colors.green500
    },
    warning: {
      background: colors.orange25,
      border: colors.orange500,
      text: colors.orange700,
      icon: colors.orange500
    },
    danger: {
      background: colors.red25,
      border: colors.red500,
      text: colors.red600,
      icon: colors.red500
    }
  },
  states: {
    default: {
      icon: colors.gray800
    },
    muted: {
      icon: colors.gray700
    },
    dark: {
      icon: colors.gray900
    },
    disabled: {
      icon: colors.gray500
    },
    selected: {
      icon: colors.blue500
    }
  }
}
