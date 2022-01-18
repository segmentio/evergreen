const baseStyle = (theme, { intent = 'info' }) => ({
  backgroundColor: 'white',
  boxShadow: `inset 0 0 0 1px ${theme.colors.neutralAlpha.N4A}`,
  color: theme.colors.dark,

  '&::before': {
    content: '""',
    width: '3px',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.intents[intent].border
  }
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
