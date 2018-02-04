import { colors } from '../../../colors'

const selectableTabStyle = {
  cursor: 'pointer',
  outline: 'none',

  '&:hover': {
    backgroundColor: colors.neutral['5A']
  },

  '&[aria-current], &[aria-selected="true"], &:active': {
    backgroundColor: colors.blue['10A'],
    color: colors.blue['500']
  },

  '&[aria-current], &[aria-selected="true"]': {
    cursor: 'default'
  },

  '&:focus': {
    boxShadow: `0 0 0 2px ${colors.blue['50A']}`
  }
}

export default selectableTabStyle
