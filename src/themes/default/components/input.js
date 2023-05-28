const baseStyle = {
  borderColor: 'colors.gray400',
  borderRadius: 'radii.1',
  borderStyle: 'solid',
  borderWidth: 1,
  color: 'colors.default',
  fontFamily: 'fontFamilies.ui',
  fontSize: 'fontSizes.1',
  lineHeight: 'lineHeights.0',
  paddingX: 12,
  transition: 'box-shadow 80ms ease-in-out',

  selectors: {
    _placeholder: {
      color: 'colors.gray600'
    },

    _disabled: {
      cursor: 'not-allowed',
      backgroundColor: 'colors.gray100',
      color: 'colors.muted'
    }
  }
}

const appearances = {
  default: {
    backgroundColor: 'white',
    borderColor: 'colors.gray400',

    selectors: {
      _focus: {
        zIndex: 'zIndices.focused',
        boxShadow: 'shadows.focusRing',
        borderColor: 'colors.blue200'
      },

      _invalid: {
        borderColor: 'colors.red500'
      }
    }
  },
  none: {
    borderColor: 'transparent',
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
