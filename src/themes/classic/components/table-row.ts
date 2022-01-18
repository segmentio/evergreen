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

// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
const getBackgroundForIntentAndState = (intent: any, state: any) => colorMap[intent][state]

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
    backgroundColor: (_: any, props: any) => getBackgroundForIntentAndState(props.intent, 'base'),

    _hover: {
      backgroundColor: (_: any, props: any) => getBackgroundForIntentAndState(props.intent, 'hover')
    },

    _focus: {
      backgroundColor: (_: any, props: any) => getBackgroundForIntentAndState(props.intent, 'focus')
    },

    _active: {
      backgroundColor: (_: any, props: any) => getBackgroundForIntentAndState(props.intent, 'active')
    },

    _current: {
      backgroundColor: (_: any, props: any) => getBackgroundForIntentAndState(props.intent, 'current')
    }
  }
}

export default {
  baseStyle,
  appearances
}
