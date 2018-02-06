import { colors } from '../../../colors'

const LinkAppearances = {
  blue: {
    color: colors.blue['500'],
    textDecoration: 'none',
    '&:hover': {
      color: colors.blue['300'],
      textDecoration: 'underline'
    },
    '&:active': {
      color: colors.blue['900'],
      textDecoration: 'none'
    }
  },
  green: {
    color: colors.green['500'],
    textDecoration: 'none',
    '&:hover': {
      color: colors.green['300'],
      textDecoration: 'underline'
    },
    '&:active': {
      color: colors.green['900'],
      textDecoration: 'none'
    }
  },
  neutral: {
    color: colors.neutral['500'],
    textDecoration: 'none',
    '&:hover': {
      color: colors.neutral['300'],
      textDecoration: 'underline'
    },
    '&:active': {
      color: colors.neutral['900'],
      textDecoration: 'none'
    }
  }
}

export default LinkAppearances
