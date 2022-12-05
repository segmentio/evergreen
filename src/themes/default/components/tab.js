const baseStyle = {
  fontFamily: 'fontFamilies.ui',
  fontWeight: 500,
  marginBottom: (_, props) => (props.direction === 'vertical' ? '8px' : null)
}

const appearances = {
  primary: {
    color: 'colors.muted',
    paddingTop: '6px',
    paddingBottom: '6px',
    paddingLeft: '2px',
    paddingRight: '2px',
    position: 'relative',

    selectors: {
      ':not(:last-child)': {
        marginRight: (_, props) => (props.direction === 'horizontal' ? '20px' : null)
      },

      _before: {
        content: '""',
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: '2px',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
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
        boxShadow: 'shadows.focusRing',
        color: 'colors.default'
      },

      _disabled: {
        pointerEvents: 'none',
        cursor: 'not-allowed',
        color: 'colors.gray500',

        '&:before': {
          backgroundColor: 'colors.gray500'
        }
      }
    }
  },

  secondary: {
    paddingX: '16px',
    paddingY: '8px',
    borderRadius: 'radii.1',
    color: 'colors.default',

    selectors: {
      ':not(:last-child)': {
        marginRight: (_, props) => (props.direction === 'horizontal' ? '8px' : null)
      },

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
      },

      _disabled: {
        pointerEvents: 'none',
        cursor: 'not-allowed',
        color: 'colors.gray500',

        '&[aria-current="page"],&[aria-selected="true"]': {
          backgroundColor: 'colors.gray100'
        }
      }
    }
  }
}

export default {
  baseStyle,
  appearances
}
