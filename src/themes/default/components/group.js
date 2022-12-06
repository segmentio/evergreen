const baseStyle = {
  selectors: {
    _child: {
      selectors: {
        '&:focus': {
          zIndex: 'zIndices.focused'
        },
        '&:active': {
          zIndex: 'zIndices.focused'
        }
      }
    },

    _firstChild: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },

    _middleChild: {
      borderRadius: 0,
      marginLeft: '-1px'
    },

    _lastChild: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      marginLeft: '-1px'
    }
  }
}

const appearances = {}
const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
