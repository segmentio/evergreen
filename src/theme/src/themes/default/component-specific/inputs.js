import tokens from '../foundational-styles/tokens'

const inputs = {
  default: {
    base: {
      backgroundColor: 'white',
      border: `1px solid ${tokens.colors.gray400}`
    },
    invalid: {
      boxShadow: ``
    },
    placeholder: {
      color: tokens.colors.gray600
    },
    hoverPlaceholder: {
      color: tokens.colors.gray700
    },
    focus: {
      outline: 'none',
      transition: 'box-shadow 80ms ease-in-out',
      border: `1px solid ${tokens.colors.blue200}`,
      boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
    },
    disabled: {
      cursor: 'not-allowed',
      backgroundColor: tokens.colors.gray100
    }
  },
  none: {
    base: {
      backgroundColor: 'white'
    },
    invalid: {},
    placeholder: {
      color: tokens.colors.gray600
    },
    focus: {
      outline: 'none'
    },
    disabled: {
      backgroundColor: tokens.colors.gray100
    }
  }
}

export default inputs
