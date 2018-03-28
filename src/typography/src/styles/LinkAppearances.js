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
    },
    '&:focus': {
      boxShadow: `0 0 0 2px ${colors.blue['100A']}`
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
    },
    '&:focus': {
      boxShadow: `0 0 0 2px ${colors.green['100A']}`
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
    },
    '&:focus': {
      boxShadow: `0 0 0 2px ${colors.neutral['100A']}`
    }
  }
}

export default LinkAppearances
