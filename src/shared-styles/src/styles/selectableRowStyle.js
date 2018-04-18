import { colors } from '../../../colors'

const selectableRowStyle = {
  cursor: 'pointer',
  outline: 'none',

  '&:hover': {
    backgroundColor: colors.neutral['5A']
  },

  '&:focus, &[aria-selected="true"]': {
    backgroundColor: colors.blue['5A']
  },

  '&[aria-current="true"], &:active': {
    backgroundColor: colors.blue['10A'],
    color: colors.blue['500']
  },

  '&[aria-current="true"]': {
    cursor: 'default'
  }
}

export default selectableRowStyle
