import { get } from '../../../theme/src/theme-tools'

const baseStyle = (theme, { color }) => {
  return {
    fill:
      get(theme, `intents.${color}.icon`) ||
      get(theme, `colors.icon.${color}`) ||
      get(theme, `colors.${color}`) ||
      color
  }
}

const appearances = {}
const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
