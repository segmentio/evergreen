const baseStyle = {
  fontFamily: 'fontFamilies.ui',
  fontWeight: 500,
  padding: '8px',
  borderRadius: 'radii.1',
  color: 'colors.default',
  marginX: (_, props) => (props.direction === 'horizontal' ? '4px' : null),
  marginY: (_, props) => (props.direction === 'vertical' ? '4px' : null),

  _hover: {
    backgroundColor: 'colors.neutralAlpha.N2A'
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
  },

  _disabled: {
    pointerEvents: 'none',
    cursor: 'not-allowed',
    color: 'colors.neutralAlpha.N7A',

    '&[aria-current="page"], &[aria-selected="true"]': {
      backgroundColor: 'colors.neutralAlpha.N2A'
    }
  }
}

export default {
  baseStyle
}
