const baseStyle = (theme, { intent = 'info' }) => ({
  backgroundColor: 'white',
  borderLeft: `3px solid ${theme.intents[intent].border}`,
  boxShadow: `inset 0 0 0 1px ${theme.colors.neutralAlpha.N4A}`,
  color: theme.colors.dark
})

const appearances = {
  card: {
    boxShadow: 'shadows.1',
    borderRadius: 'radii.1'
  }
}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
