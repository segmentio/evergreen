const baseStyle = {}
const appearances = {
  default: {
    _base: {
      color: 'white',
      backgroundColor: 'white',
      boxShadow: theme => `inset 0 0 0 1px ${theme.colors.gray400}`
    },
    _disabled: {
      cursor: 'not-allowed',
      backgroundColor: 'colors.gray100',
      boxShadow: theme => `inset 0 0 0 1px ${theme.colors.gray100}`
    },
    _hover: {
      boxShadow: theme => `inset 0 0 0 1px ${theme.colors.gray600}`
    },
    _focus: {
      boxShadow: theme => `0 0 0 2px ${theme.colors.blue100}`
    },
    _active: {
      backgroundColor: 'colors.gray100',
      boxShadow: theme => `inset 0 0 0 1px ${theme.colors.gray500}`
    },
    _checked: {
      color: 'white',
      boxShadow: theme => `inset 0 0 0 -1px ${theme.colors.blue700}`,
      backgroundColor: 'colors.blue500'
    },
    _checkedHover: {
      color: 'white',
      backgroundColor: 'colors.blue600',
      boxShadow: theme => `inset 0 0 0 1px ${theme.colors.blue600}`
    },
    _checkedDisabled: {
      color: 'colors.gray600',
      backgroundColor: 'colors.gray100'
    },
    _checkedActive: {
      color: 'white',
      boxShadow: theme => `inset 0 0 0 -1px ${theme.colors.blue700}`,
      backgroundColor: 'colors.blue700'
    }
  }
}
const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
