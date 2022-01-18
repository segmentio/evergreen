// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'theme' implicitly has an 'any' type.
const baseStyle = (theme, { intent = 'info' }) => ({
  backgroundColor: `intents.${intent}.background`,
  border: `1px solid ${theme.intents[intent].border}`,
  borderRadius: 'radii.2',
  color: theme.intents[intent].text
})

const appearances = {}
const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
