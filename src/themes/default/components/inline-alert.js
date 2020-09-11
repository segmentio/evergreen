const baseStyle = (theme, { intent = 'info' }) => ({
  color: theme.intents[intent].text
})

const appearances = {}
const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
