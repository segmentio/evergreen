const baseStyle = {
  outline: 'none',
  textDecoration: 'none',
  display: 'flex',
  position: 'relative',
  paddingX: 12,

  selectors: {
    _isSelectable: {
      cursor: 'pointer'
    },

    _disabled: {
      cursor: 'not-allowed',
      userSelect: 'none'
    }
  }
}

const appearances = {
  default: {
    backgroundColor: 'white',

    selectors: {
      '&:before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 2,
        borderRadiusTopLeft: 0,
        borderRadiusTopRight: 2,
        borderRadiusBottomRight: 2,
        borderRadiusBottomLeft: 0,
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

        selectors: {
          '&:before': {
            transform: 'scaleX(1)'
          }
        }
      },

      _current: {
        backgroundColor: 'intents.info.background',

        selectors: {
          '&:before': {
            transform: 'scaleX(1)'
          }
        }
      }
    }
  }
}

export default {
  baseStyle,
  appearances
}
