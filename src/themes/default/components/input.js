const baseStyle = {
  borderRadius: 'radii.1',
  fontFamily: 'fontFamilies.ui',
  lineHeight: '12px',
  border: '1px solid transparent'
}

const appearances = {
  default: {
    backgroundColor: 'white',
    borderColor: 'colors.gray400',

    _invalid: {
      borderColor: 'colors.red500'
    },

    _focus: {
      outline: 'none',
      transition: 'box-shadow 80ms ease-in-out',
      zIndex: 'zIndices.focused',
      borderColor: 'colors.blue200',
      boxShadow: theme => `0 0 0 2px ${theme.colors.blue100}`
    },

    _disabled: {
      cursor: 'not-allowed',
      backgroundColor: 'colors.gray100',
      color: 'colors.muted'
    },

    _placeholder: {
      color: 'colors.gray600'
    },

    _placeholderHover: {
      color: 'colors.gray700'
    }
  },
  none: {
    backgroundColor: 'transparent',
    _invalid: {},
    _placeholder: {
      color: 'colors.gray600'
    },
    _focus: {
      outline: 'none'
    },
    _disabled: {
      cursor: 'not-allowed',
      backgroundColor: 'colors.gray100',
      color: 'colors.muted'
    }
  }
}

const sizes = {
  small: {
    height: 24
  },
  medium: {
    height: 32
  },
  large: {
    height: 40
  }
}

export default {
  baseStyle,
  appearances,
  sizes
}
