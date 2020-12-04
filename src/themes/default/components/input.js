const baseStyle = {
  borderRadius: 'radii.1',
  fontFamily: 'fontFamilies.ui',
  lineHeight: 'lineHeights.0',
  fontSize: 'fontSizes.1',
  border: '1px solid transparent',
  color: 'colors.default',
  paddingX: 12,
  transition: 'box-shadow 80ms ease-in-out',

  _placeholder: {
    color: 'colors.gray600'
  },

  _disabled: {
    cursor: 'not-allowed',
    backgroundColor: 'colors.gray100',
    color: 'colors.muted'
  }
}

const appearances = {
  default: {
    backgroundColor: 'white',
    borderColor: 'colors.gray400',

    _focus: {
      zIndex: 'zIndices.focused',
      boxShadow: 'shadows.focusRing',
      borderColor: 'colors.blue200'
    },

    _invalid: {
      borderColor: 'colors.red500'
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
    height: 40,
    lineHeight: 'lineHeights.1'
  }
}

export default {
  baseStyle,
  appearances,
  sizes
}
