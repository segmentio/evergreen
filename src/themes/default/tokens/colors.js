const colorScales = {
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
  ...colorScales,

  muted: colorScales.gray700,
  default: colorScales.gray800,
  dark: colorScales.gray900,
  selected: colorScales.blue500,

  tint1: colorScales.gray50,
  tint2: colorScales.gray75,
  overlay: 'rgba(67, 90, 111, 0.7)',

  yellowTint: colorScales.yellow100,
  greenTint: colorScales.green25,
  orangeTint: colorScales.orange25,
  redTint: colorScales.red25,
  blueTint: colorScales.blue25,
  purpleTint: colorScales.purple100,
  tealTint: colorScales.teal100,

  border: {
    default: colorScales.gray300,
    muted: colorScales.gray200
  },

  icon: {
    default: colorScales.gray700,
    muted: colorScales.gray600,
    disabled: colorScales.gray400,
    selected: colorScales.blue500
  }
}

export default colors
