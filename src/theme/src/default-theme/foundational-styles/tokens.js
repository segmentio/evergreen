const colors = {
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
  blue50: '#F5F8FF',

  // Reds
  red700: '#7D2828',
  red600: '#A73636',
  red500: '#D14343',
  red100: '#F9DADA',
  red50: '#FCF5F5',

  // Greens
  green700: '#317159',
  green500: '#52BD95',
  green50: '#F6FBF9',

  // Oranges
  orange700: '#996A13',
  orange500: '#FFB020',
  orange50: '#FFFBF4',
}

export default {
  ...colors,

  primary: {
    base: colors.blue500,
    hover: colors.blue600,
    active: colors.blue700
  },
  intents: {
    info: {
      background: colors.blue50,
      border: colors.blue500,
      text: colors.blue600,
      icon: colors.blue500
    },
    success: {
      background: colors.green50,
      border: colors.green500,
      text: colors.green700,
      icon: colors.green500
    },
    warning: {
      background: colors.orange50,
      border: colors.orange500,
      text: colors.orange700,
      icon: colors.orange500
    },
    danger: {
      background: colors.red50,
      border: colors.red500,
      text: colors.red600,
      icon: colors.red500
    }
  },
  states: {
    default: {
      icon: colors.gray800,
    },
    muted: {
      icon: colors.gray700,
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
