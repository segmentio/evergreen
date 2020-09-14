const baseStyle = {
  borderRadius: 'radii.1',
  fontFamily: 'fontFamilies.ui',
  lineHeight: '12px',
  border: '1px solid transparent',
  color: 'colors.default',
  transition: 'box-shadow 80ms ease-in-out',

  _placeholder: {
    color: 'colors.gray600'
  },

  _disabled: {
    cursor: 'not-allowed',
    backgroundColor: 'colors.gray100',
    color: 'colors.muted'
  },

  _focus: {
    zIndex: 'zIndices.focused',
    boxShadow: 'shadows.focusRing'
  }
}

const appearances = {
  default: {
    backgroundColor: 'white',
    borderColor: 'colors.gray400',

    _invalid: {
      borderColor: 'colors.red500'
    },

    _focus: {
      transition: 'box-shadow 80ms ease-in-out',
      zIndex: 'zIndices.focused',
      borderColor: 'colors.blue200',
      boxShadow: 'shadows.focusRing'
    },

    _placeholderHover: {
      color: 'colors.gray700'
    }
  },
  none: {
    backgroundColor: 'transparent'
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
