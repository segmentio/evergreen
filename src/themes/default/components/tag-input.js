const baseStyle = {
  paddingY: '2px',
  backgroundColor: 'white',
  borderRadius: 'radii.1'
}

const appearances = {
  default: {
    border: theme => `1px solid ${theme.colors.gray400}`,
    _focused: {
      outline: 'none',
      zIndex: 'zIndices.focused',
      border: theme => `1px solid ${theme.colors.blue200}`,
      transition: 'box-shadow 80ms ease-in-out',
      boxShadow: theme => `0 0 0 2px ${theme.colors.blue100}`
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
