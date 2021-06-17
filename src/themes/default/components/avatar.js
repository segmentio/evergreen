function getColor(theme, { color, hashValue }) {
  if (color === 'automatic') {
    const keys = Object.keys(theme.fills)

    if (hashValue) {
      return theme.fills[keys[hashValue % keys.length]]
    } else {
      return theme.fills[keys[Math.floor(Math.random() * keys.length)]]
    }
  }

  return theme.fills[color]
}

const baseStyle = (theme, props) => {
  return {
    borderRadius: props.shape === 'round' ? '100%' : 'radii.1',
    ...getColor(theme, props)
  }
}

const appearances = {}
const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
