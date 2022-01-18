const baseStyle = {
  borderRadius: 'radii.1',
  transition: '120ms all ease-in-out',
  color: (_, { color }) => {
    switch (color) {
      case 'neutral':
        return 'gray700'
      case 'default':
      default:
        return 'blue500'
    }
  },
  textDecoration: 'none',
  _hover: {
    color: (theme, { color }) => {
      switch (color) {
        case 'neutral':
          return theme.colors.gray800
        case 'default':
        default:
          return theme.colors.blue600
      }
    }
  },
  _active: {
    color: (theme, { color }) => {
      switch (color) {
        case 'neutral':
          return theme.colors.gray900
        case 'default':
        default:
          return theme.colors.blue700
      }
    }
  },
  _focus: {
    boxShadow: (theme, { color }) => {
      switch (color) {
        case 'neutral':
          return `0 0 0 2px ${theme.colors.gray300}`
        case 'default':
        default:
          return `0 0 0 2px ${theme.colors.blue200}`
      }
    }
  }
}

const appearances = {}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
