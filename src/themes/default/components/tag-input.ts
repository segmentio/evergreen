const baseStyle = {
  paddingY: '2px',
  backgroundColor: 'white',
  borderRadius: 'radii.1'
}

const appearances = {
  default: {
    border: (theme: any) => `1px solid ${theme.colors.gray400}`,
    _focused: {
      outline: 'none',
      zIndex: 'zIndices.focused',
      border: (theme: any) => `1px solid ${theme.colors.blue200}`,
      transition: 'box-shadow 80ms ease-in-out',
      boxShadow: 'shadows.focusRing'
    },
    _disabled: {
      cursor: 'not-allowed',
      backgroundColor: 'colors.gray100'
    }
  }
}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
