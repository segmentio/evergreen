const baseStyle = {
  fontFamily: 'fontFamilies.ui',
  border: '1px solid transparent',
  borderRadius: 'radii.1'
}

const colorKeyForAppearance = appearance =>
  appearance === 'destructive' ? 'red' : 'blue'

const getPrimaryButtonAppearance = appearance => {
  const color = colorKeyForAppearance(appearance)
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
      cursor: 'not-allowed',
      borderColor: `colors.${color}100`
    },
    _focus: {
      backgroundColor: `colors.${color}500`,
      boxShadow: theme => `0 0 0 2px ${theme.colors[`${color}100`]}`,
      borderColor: `colors.${color}500`
    },
    _active: {
      backgroundColor: `colors.${color}700`,
      borderColor: `colors.${color}700`
    }
  }
}

const appearances = {
  primary: getPrimaryButtonAppearance(),
  default: {
    backgroundColor: 'white',
    border: theme => `1px solid ${theme.colors.gray500}`,
    color: 'colors.gray800',

    _disabled: {
      cursor: 'not-allowed',
      color: 'colors.gray500',
      borderColor: 'colors.gray300'
    },

    _hover: {
      borderColor: 'colors.gray600',
      backgroundColor: 'colors.gray50'
    },

    _focus: {
      boxShadow: theme => `0 0 0 2px ${theme.colors.blue100}`
    },

    _active: {
      backgroundColor: 'colors.gray100'
    }
  },
  minimal: {
    backgroundColor: 'transparent',
    color: 'colors.gray800',

    _focus: {
      boxShadow: theme => `0 0 0 2px ${theme.colors.blue100}`
    },

    _disabled: {
      cursor: 'not-allowed',
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
