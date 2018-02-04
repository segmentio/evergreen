import { colors } from '../../../colors'

const selectableRowStyle = {
  cursor: 'pointer',
  outline: 'none',

  '&:hover': {
    backgroundColor: colors.neutral['5A']
  },

  '&:focus': {
    // BackgroundColor: colors.neutral['5A'],
    backgroundColor: colors.blue['5A']
    // BoxShadow: `inset 0 0 0 2px ${colors.blue['15A']}`,
  },

  '&[aria-current], &[aria-selected="true"], &:active': {
    backgroundColor: colors.blue['10A'],
    color: colors.blue['500']
  },

  '&[aria-current], &[aria-selected="true"]': {
    cursor: 'default'
  }
}

export default selectableRowStyle
