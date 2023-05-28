const baseStyle = {}

const appearances = {
  default: {
    selectors: {
      _base: {
        color: 'white',
        background: 'white',
        boxShadow: theme => `inset 0 0 0 1px ${theme.colors.gray400}`
      },
      _disabled: {
        cursor: 'not-allowed',
        background: 'colors.gray100',
        color: 'colors.gray100',
        boxShadow: theme => `inset 0 0 0 1px ${theme.colors.gray100}`
      },
      _hover: {
        boxShadow: theme => `inset 0 0 0 1px ${theme.colors.gray600}`
      },
      _focus: {
        boxShadow: theme => `0 0 0 2px ${theme.colors.blue100}`
      },
      _active: {
        background: 'colors.gray100',
        boxShadow: theme => `inset 0 0 0 1px ${theme.colors.gray500}`
      },
      _checked: {
        color: 'white',
        boxShadow: theme => `inset 0 0 0 -1px ${theme.colors.blue700}`,
        background: 'colors.blue500'
      },
      _checkedHover: {
        color: 'white',
        background: 'colors.blue600',
        boxShadow: theme => `inset 0 0 0 1px ${theme.colors.blue600}`
      },
      _checkedActive: {
        color: 'white',
        boxShadow: theme => `inset 0 0 0 -1px ${theme.colors.blue700}`,
        background: 'colors.blue700'
      },
      _checkedDisabled: {
        color: 'colors.gray600',
        background: 'colors.gray100'
      }
    }
  }
}
const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
