const baseStyle = {
  outline: 'none',
  textDecoration: 'none',
  display: 'flex',
  position: 'relative',
  backgroundColor: 'white',
  height: 32,
  borderBottom: theme => `1px solid ${theme.colors.border.muted}`,

  selectors: {
    _before: {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 2,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
      backgroundColor: 'colors.blue500',
      transition: '0.25s',
      transformOrigin: 'left center',
      transform: 'scaleX(0)'
    },

    _isSelectable: {
      cursor: 'pointer'
    },

    _hover: {
      backgroundColor: 'colors.gray75'
    },

    _focus: {
      backgroundColor: 'colors.gray75'
    },

    _active: {
      backgroundColor: 'intents.info.background'
    },

    _selected: {
      backgroundColor: 'intents.info.background',

      ' span': {
        color: 'intents.info.text'
      },

      '&:before': {
        transform: 'scaleX(1)'
      }
    },

    _disabled: {
      opacity: 0.5,
      pointerEvents: 'none',
      cursor: 'not-allowed'
    }
  }
}

export default {
  baseStyle
}
