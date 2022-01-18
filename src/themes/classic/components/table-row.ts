const colorMap = {
  none: {
    base: 'white',
    hover: 'colors.neutral.lightest',
    focus: 'colors.neutral.lightest',
    active: 'colors.blue.lightest',
    current: 'colors.blue.lightest'
  },

  danger: {
    base: 'colors.red.lightest',
    hover: 'colors.red.lightest',
    focus: 'colors.red.light',
    active: 'colors.red.light',
    current: 'colors.red.light'
  },

  warning: {
    base: 'colors.yellow.lightest',
    hover: 'colors.yellow.lightest',
    focus: 'colors.yellow.light',
    active: 'colors.yellow.light',
    current: 'colors.yellow.light'
  },

  success: {
    base: 'colors.green.lightest',
    hover: 'colors.green.lightest',
    focus: 'colors.green.light',
    active: 'colors.green.light',
    current: 'colors.green.light'
  }
}

const getBackgroundForIntentAndState = (intent, state) => colorMap[intent][state]

const baseStyle = {
  outline: 'none',
  textDecoration: 'none',
  height: 48,

  _isSelectable: {
    cursor: 'pointer'
  }
}

const appearances = {
  default: {
    backgroundColor: (_, props) => getBackgroundForIntentAndState(props.intent, 'base'),

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

export default {
  baseStyle,
  appearances
}
