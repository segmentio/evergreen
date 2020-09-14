const baseStyle = {
  fontFamily: 'fontFamilies.ui'
}

const appearances = {
  primary: {
    color: 'colors.muted',
    paddingTop: '6px',
    paddingBottom: '16px',
    paddingLeft: '2px',
    paddingRight: '2px',
    position: 'relative',

    ':not(:last-child)': {
      marginRight: '20px'
    },
    
    ':before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      right: 0,
      height: '2px',
      borderRadius: '2px 2px 0px 0px',
      backgroundColor: 'colors.blue500',
      width: '100%',
      transition: '0.25s',
      transform: 'scaleY(0)',
      transformOrigin: 'bottom center'
    },

    _hover: {
      color: 'colors.default'
    },

    _current: {
      color: 'colors.blue500',

      '&:before': {
        transform: 'scaleY(1)'
      },

      '&:focus': {
        color: 'colors.blue600'
      }
    },

    _focus: {
      color: 'colors.default'
    }
  },

  secondary: {
    paddingX: '16px',
    paddingY: '8px',
    borderRadius: 'radii.1',
    color: 'colors.default',

    _hover: {
      backgroundColor: 'colors.gray100',
      color: 'colors.gray800'
    },

    _active: {
      backgroundColor: 'colors.gray200'
    },

    _current: {
      backgroundColor: 'colors.blue50',
      color: 'colors.blue500'
    },

    _focus: {
      boxShadow: 'shadows.focusRing'
    }
  }
}

export default {
  baseStyle,
  appearances
}
