const baseStyle = {
  display: 'flex',
  flexDirection: 'row',
  height: 64,
  width: '100%',
  borderWidth: 1,
  borderRadius: 'radii.1',
  borderStyle: 'solid',
  borderColor: 'colors.gray400',
  alignItems: 'center',
  justifyContent: 'space-between',

  selectors: {
    _invalid: {
      backgroundColor: 'colors.red25',
      borderColor: 'colors.red500'
    }
  }
}

export default {
  baseStyle
}
