function getColors(theme: any, { color, hashValue }: any) {
  if (color === 'automatic') {
    const keys = Object.keys(theme.fills.subtle)

    if (hashValue) {
      return theme.fills.subtle[keys[hashValue % keys.length]]
    } else {
      return theme.fills.subtle[keys[Math.floor(Math.random() * keys.length)]]
    }
  }

  return theme.fills.subtle[color]
}

const baseStyle = (theme: any, props: any) => {
  return {
    borderRadius: props.shape === 'round' ? '100%' : 'radii.1',
    ...getColors(theme, props),
  }
}

const appearances = {}
const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes,
}
