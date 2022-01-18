const baseStyle = {
  outline: 'none',
  textDecoration: 'none',
  display: 'flex',
  position: 'relative',
  paddingX: 12,

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

    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 2,
      borderRadius: '0px 2px 2px 0px',
      backgroundColor: 'colors.blue500',
      transition: '0.25s',
      transformOrigin: 'left center',
      transform: 'scaleX(0)'
    },

    _hover: {
      backgroundColor: 'colors.gray75'
    },

    _focus: {
      backgroundColor: 'colors.gray75'
    },

    _active: {
      backgroundColor: 'intents.info.background',

      '&:before': {
        transform: 'scaleX(1)'
      }
    },

    _current: {
      backgroundColor: 'intents.info.background',

      '&:before': {
        transform: 'scaleX(1)'
      }
    }
  }
}

export default {
  baseStyle,
  appearances
}
