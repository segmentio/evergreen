import { defaultControlStyles } from '../deprecated/shared'

const baseStyle = {
  fontFamily: 'fontFamilies.ui',
  border: '1px solid transparent',
  borderRadius: 'radii.1'
}

const appearances = {
  default: {
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
    lineHeight: '24px',
    paddingLeft: 12,
    paddingRight: 12
  },
  medium: {
    height: 32,
    minWidth: 32,
    lineHeight: '32px',
    paddingLeft: 16,
    paddingRight: 16
  },
  large: {
    height: 40,
    minWidth: 40,
    lineHeight: '40px',
    paddingLeft: 20,
    paddingRight: 20
  }
}

export default { baseStyle, appearances, sizes }
