const baseStyle = {
  outline: 'none',
  textDecoration: 'none',
  display: 'flex',
  position: 'relative',
  backgroundColor: 'white',
  borderBottom: (theme) => `1px solid ${theme.colors.border.muted}`,

  _before: {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: 'colors.blue.base',
    transition: '0.25s',
    transformOrigin: 'left center',
    transform: 'scaleX(0)'
  },

  _isSelectable: {
    cursor: 'pointer'
  },

  _hover: {
    backgroundColor: 'colors.neutral.lightest'
  },

  _focus: {
    backgroundColor: 'colors.neutral.lightest'
  },

  _active: {
    backgroundColor: 'colors.blue.lightest',
  },

  _current: {
    backgroundColor: 'colors.blue.lightest',

    '&:before': {
      transform: 'scaleX(1)'
    },
  },
}

export default {
  baseStyle,
}
