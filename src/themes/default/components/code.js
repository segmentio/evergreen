const baseStyle = {}

const appearances = {
  default: {
    backgroundColor: 'tokens.codeBackgroundColor',
    boxShadow: (theme, _props) =>
      `inset 0 0 0 1px ${theme.tokens.codeBorderColor}`,
    paddingX: 6,
    paddingY: 3,
    borderRadius: 'tokens.borderRadius'
  }
}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
