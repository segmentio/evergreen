import palette from './palette'
import colors from './colors'

const FillAppearances = {}

FillAppearances.solid = {
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

FillAppearances.subtle = {
  neutral: {
    color: colors.text.default,
    backgroundColor: palette.neutral.light
  },
  blue: {
    color: colors.text.default,
    backgroundColor: palette.blue.light
  },
  red: {
    color: colors.text.default,
    backgroundColor: palette.red.light
  },
  orange: {
    color: colors.text.default,
    backgroundColor: palette.orange.light
  },
  yellow: {
    color: colors.text.default,
    backgroundColor: palette.yellow.light
  },
  green: {
    color: colors.text.default,
    backgroundColor: palette.green.light
  },
  teal: {
    color: colors.text.default,
    backgroundColor: palette.teal.light
  },
  purple: {
    color: colors.text.default,
    backgroundColor: palette.purple.light
  }
}

export default FillAppearances
