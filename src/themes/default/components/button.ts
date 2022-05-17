import { StyleModifiers } from '../../../types'

const baseStyle = {
  fontFamily: 'fontFamilies.ui',
  border: '1px solid transparent',
  borderRadius: 'radii.1',
  // TODO: This should really be typed to `Theme`, but indexing into the colors type is not very type-safe
  color: (theme: any, { color }: StyleModifiers): string => {
    const fallbackColor = color || 'colors.default'
    if (color != null) {
      return theme.colors[color] || fallbackColor
    }

    return fallbackColor
  },
  transition: 'box-shadow 80ms ease-in-out',

  _focus: {
    boxShadow: 'shadows.focusRing',
  },

  _disabled: {
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
}

const colorKeyForAppearanceOrIntent = (appearance: any, intent: any) => {
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

const colorKeyForIntent = (intent: any) => {
  if (intent === 'danger') {
    return `red500`
  } else if (intent === 'success') {
    return `green500`
  } else {
    return `gray800`
  }
}

const borderColorForIntent = (intent: any, isHover: any) => {
  if (intent === 'danger') {
    return `red${isHover ? 500 : 300}`
  } else if (intent === 'success') {
    return `green${isHover ? 400 : 300}`
  } else {
    return `gray${isHover ? 600 : 500}`
  }
}

const getPrimaryButtonAppearance = (appearance: any, intent: any, textColor: any, theme: any) => {
  const color = colorKeyForAppearanceOrIntent(appearance, intent)
  return {
    backgroundColor: `colors.${color}500`,
    borderColor: `colors.${color}500`,
    color: textColor || 'white',
    _hover: {
      backgroundColor: `colors.${color}600`,
      borderColor: `colors.${color}600`,
    },
    _disabled: {
      backgroundColor: `colors.${color}100`,
      borderColor: `colors.${color}100`,
    },
    _focus: {
      backgroundColor: `colors.${color}500`,
      boxShadow: `0 0 0 2px ${theme && theme.colors[`${color}100`]}`,
      borderColor: `colors.${color}500`,
    },
    _active: {
      backgroundColor: `colors.${color}700`,
      borderColor: `colors.${color}700`,
    },
  }
}

const appearances = {
  primary: (theme: any, { appearance, color, intent }: any) =>
    getPrimaryButtonAppearance(appearance, intent, color, theme),
  default: {
    backgroundColor: 'white',
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    border: (theme: any, props: any) => `1px solid ${theme.colors[borderColorForIntent(props.intent)]}`,
    color: (theme: any, props: any) => props.color || theme.colors[colorKeyForIntent(props.intent)],

    _disabled: {
      color: 'colors.gray500',
      borderColor: 'colors.gray300',
    },

    _hover: {
      border: (theme: any, props: any) => `1px solid ${theme.colors[borderColorForIntent(props.intent, true)]}`,
      backgroundColor: 'colors.gray50',
    },

    _active: {
      backgroundColor: 'colors.gray100',
    },
  },
  minimal: {
    backgroundColor: 'transparent',
    color: (theme: any, props: any) => props.color || theme.colors[colorKeyForIntent(props.intent)],

    _disabled: {
      color: 'colors.gray500',
      opacity: 0.6,
    },

    _hover: {
      backgroundColor: 'colors.gray100',
    },

    _active: {
      backgroundColor: 'colors.gray200',
    },
  },
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 4 arguments, but got 1.
  destructive: getPrimaryButtonAppearance('destructive'),
}

const sizes = {
  small: {
    height: 24,
    minWidth: 24,
    fontSize: 'fontSizes.1',
    lineHeight: '24px',
    paddingLeft: 12,
    paddingRight: 12,
  },
  medium: {
    height: 32,
    minWidth: 32,
    fontSize: 'fontSizes.1',
    lineHeight: '32px',
    paddingLeft: 16,
    paddingRight: 16,
  },
  large: {
    height: 40,
    minWidth: 40,
    fontSize: 'fontSizes.2',
    lineHeight: '40px',
    paddingLeft: 20,
    paddingRight: 20,
  },
}

export default {
  baseStyle,
  appearances,
  sizes,
}
