import { defaultControlStyles } from '../deprecated/shared'

const baseStyle = {
  fontFamily: 'fontFamilies.ui',
  border: 'none',
  borderRadius: 'radii.1'
}

const appearances = {
  default: {
    color: 'colors.neutralAlpha.N8A',
    ...defaultControlStyles.base,
    _disabled: defaultControlStyles.disabled,
    _hover: defaultControlStyles.hover,
    _active: defaultControlStyles.active,
    _focus: defaultControlStyles.focus
  }
}

const sizes = {
  small: {
    height: 24,
    minWidth: 24,
    fontSize: 'fontSizes.1',
    lineHeight: 'lineHeights.0'
  },
  medium: {
    height: 32,
    minWidth: 32,
    fontSize: 'fontSizes.1',
    lineHeight: 'lineHeights.0'
  },
  large: {
    height: 40,
    minWidth: 40,
    fontSize: 'fontSizes.2',
    lineHeight: 'lineHeights.2'
  }
}

export default { baseStyle, appearances, sizes }
