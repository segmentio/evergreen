const baseStyle = {
  fontFamily: 'fontFamilies.ui',
  borderRadius: 'radii.1',
  border: 0
}

const appearances = {
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
      boxShadow: 'shadows.focusRing'
    },

    _active: {
      backgroundColor: 'colors.gray100'
    }
  }
}

const sizes = {
  small: {
    height: 24,
    lineHeight: '24px'
  },
  medium: {
    height: 32,
    lineHeight: '32px'
  },
  large: {
    height: 40,
    lineHeight: '40px'
  }
}

export default { baseStyle, appearances, sizes }
