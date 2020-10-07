const baseStyle = {
  fontFamily: 'fontFamilies.ui',
  border: '1px solid transparent',
  borderRadius: 'radii.1',
  color: (theme, { color }) => theme.colors[color] || color || 'colors.default',
  transition: 'box-shadow 80ms ease-in-out',

  _focus: {
    boxShadow: 'shadows.focusRing'
  },

  _disabled: {
    cursor: 'not-allowed',
    pointerEvents: 'none'
  }
}

const colorKeyForAppearanceOrIntent = (appearance, intent) => {
  if (appearance === 'destructive') {
    return 'red'
  }

  switch (intent) {
    case 'success':
      return 'green'
    case 'danger':
      return 'red'
    default:
      return 'blue'
  }
}

const colorKeyForIntent = (intent) => {
  if (intent === 'danger') {
    return `red500`
  } else if (intent === 'success') {
    return `green500`
  } else {
    return `gray800`
  }
}

const borderColorForIntent = (intent, isHover) => {
  if (intent === 'danger') {
    return `red${isHover ? 500 : 300}`
  } else if (intent === 'success') {
    return `green${isHover ? 400 : 300}`
  } else {
    return `gray${isHover ? 600 : 500}`
  }
}

const getPrimaryButtonAppearance = (appearance, intent, theme) => {
  const color = colorKeyForAppearanceOrIntent(appearance, intent)
  return {
    backgroundColor: `colors.${color}500`,
    borderColor: `colors.${color}500`,
    color: 'white',
    _hover: {
      backgroundColor: `colors.${color}600`,
      borderColor: `colors.${color}600`
    },
    _disabled: {
      backgroundColor: `colors.${color}100`,
      borderColor: `colors.${color}100`
    },
    _focus: {
      backgroundColor: `colors.${color}500`,
      boxShadow: `0 0 0 2px ${theme && theme.colors[`${color}100`]}`,
      borderColor: `colors.${color}500`
    },
    _active: {
      backgroundColor: `colors.${color}700`,
      borderColor: `colors.${color}700`
    }
  }
}

const appearances = {
  primary: (theme, { appearance, intent }) =>
    getPrimaryButtonAppearance(appearance, intent, theme),
  default: {
    backgroundColor: 'white',
    border: (theme, props) =>
      `1px solid ${theme.colors[borderColorForIntent(props.intent)]}`,
    color: (theme, props) => theme.colors[colorKeyForIntent(props.intent)],

    _disabled: {
      color: 'colors.gray500',
      borderColor: 'colors.gray300'
    },

    _hover: {
      border: (theme, props) =>
      `1px solid ${theme.colors[borderColorForIntent(props.intent, true)]}`,
      backgroundColor: 'colors.gray50'
    },

    _active: {
      backgroundColor: 'colors.gray100'
    }
  },
  minimal: {
    backgroundColor: 'transparent',
    color: (theme, props) => theme.colors[colorKeyForIntent(props.intent)],

    _disabled: {
      color: 'colors.gray500',
      borderColor: 'colors.gray300'
    },

    _hover: {
      backgroundColor: 'colors.gray100'
    },

    _active: {
      backgroundColor: 'colors.gray200'
    }
  },
  destructive: getPrimaryButtonAppearance('destructive')
}

const sizes = {
  small: {
    height: 24,
    minWidth: 24,
    fontSize: 'fontSizes.1',
    lineHeight: '24px',
    paddingLeft: 12,
    paddingRight: 12
  },
  medium: {
    height: 32,
    minWidth: 32,
    fontSize: 'fontSizes.1',
    lineHeight: '32px',
    paddingLeft: 16,
    paddingRight: 16
  },
  large: {
    height: 40,
    minWidth: 40,
    fontSize: 'fontSizes.2',
    lineHeight: '40px',
    paddingLeft: 20,
    paddingRight: 20
  }
}

export default {
  baseStyle,
  appearances,
  sizes
}
