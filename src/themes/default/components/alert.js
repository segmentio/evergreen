const baseStyle = (_theme, { intent = 'info' }) => ({
  borderColor: `intents.${intent}.border`,
  backgroundColor: `intents.${intent}.background`
})

const appearances = {}
const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
