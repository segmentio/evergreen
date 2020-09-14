const baseStyle = {
  fontFamily: 'fontFamilies.ui',
  fontWeight: 500,
  paddingX: '16px',
  paddingY: '8px',
  borderRadius: 'radii.1',
  color: 'colors.default',

  _hover: {
    backgroundColor: 'colors.neutralAlpha.N2A',
  },

  _active: {
    backgroundColor: 'colors.neutralAlpha.N3A'
  },

  _current: {
    color: 'colors.blue.base',
    backgroundColor: 'colors.blueAlpha.B3A'
  },

  _focus: {
    boxShadow: 'shadows.focusRing'
  }
}

export default {
  baseStyle
}
