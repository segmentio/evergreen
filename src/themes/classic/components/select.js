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
    fontSize: '12px',
    lineHeight: '16px'
  },
  medium: {
    height: 32,
    minWidth: 32,
    fontSize: '12px',
    lineHeight: '16px'
  },
  large: {
    height: 40,
    minWidth: 40,
    fontSize: '14px',
    lineHeight: '20px'
  }
}

export default { baseStyle, appearances, sizes }
