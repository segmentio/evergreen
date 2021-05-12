const baseStyle = {
  outline: 'none',
  textDecoration: 'none',

  _isSelectable: {
    cursor: 'pointer'
  },

  _disabled: {
    cursor: 'not-allowed',
    pointerEvents: 'none'
  }
}

const appearances = {
  default: {
    backgroundColor: 'white',

    _hover: {
      backgroundColor: 'colors.neutral.lightest'
    },

    _focus: {
      backgroundColor: 'colors.neutral.lightest'
    },

    _active: {
      backgroundColor: 'colors.blue.lightest'
    },

    _current: {
      backgroundColor: 'colors.blue.lightest'
    }
  }
}

export default {
  baseStyle,
  appearances
}
