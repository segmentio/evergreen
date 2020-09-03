import palette from './palette'
import colors from './colors'

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
    color: palette.yellow.dark,
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

export default fills
