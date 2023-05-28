const colorMap = {
  none: {
    base: 'white',
    hover: 'colors.gray75',
    focus: 'colors.gray75',
    active: 'intents.info.background',
    current: 'intents.info.background'
  },

  danger: {
    base: 'intents.danger.background',
    hover: 'intents.danger.background',
    focus: 'colors.red100',
    active: 'colors.red100',
    current: 'colors.red100'
  },

  warning: {
    base: 'intents.warning.background',
    hover: 'intents.warning.background',
    focus: 'colors.orange100',
    active: 'colors.orange100',
    current: 'colors.orange100'
  },

  success: {
    base: 'intents.success.background',
    hover: 'intents.success.background',
    focus: 'colors.green100',
    active: 'colors.green100',
    current: 'colors.green100'
  }
}

const getBackgroundForIntentAndState = (intent, state) => colorMap[intent][state]

const baseStyle = {
  outline: 'none',
  textDecoration: 'none',
  height: 64,

  selectors: {
    _lastOfType: {
      borderBottom: 'none',
      borderBottomLeftRadius: 'radii.1',
      borderBottomRightRadius: 'radii.1'
    },

    _isSelectable: {
      cursor: 'pointer'
    }
  }
}

const appearances = {
  default: {
    backgroundColor: (_, props) => getBackgroundForIntentAndState(props.intent, 'base'),

    selectors: {
      _hover: {
        backgroundColor: (_, props) => getBackgroundForIntentAndState(props.intent, 'hover')
      },

      _focus: {
        backgroundColor: (_, props) => getBackgroundForIntentAndState(props.intent, 'focus')
      },

      _active: {
        backgroundColor: (_, props) => getBackgroundForIntentAndState(props.intent, 'active')
      },

      _current: {
        backgroundColor: (_, props) => getBackgroundForIntentAndState(props.intent, 'current')
      }
    }
  }
}

export default {
  baseStyle,
  appearances
}
