import { colors } from '../tokens'

const baseStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'colors.gray50',
  borderWidth: 1,
  borderRadius: 'radii.1',
  borderStyle: 'dashed',
  borderColor: 'colors.gray400',

  _focus: {
    outline: 'none', // Disable default browser focus outline
    borderStyle: 'solid',
    borderColor: 'colors.blue200',
    boxShadow: `0px 0px 0px 2px ${colors.blue100}`
  }
}

export default {
  baseStyle
}
