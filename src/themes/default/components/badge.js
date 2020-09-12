import tinycolor from 'tinycolor2'
import { get } from '../../../theme'

const baseStyle = {
  height: 16,
  paddingY: 0,
  paddingX: 6,
  borderRadius: 'radii.1',
  fontSize: 'fontSizes.0',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase'
}

const appearances = {
  subtle: (theme, props) => {
    const scheme = get(theme, `fills.${props.color}`, {
      backgroundColor: props.color,
      color: tinycolor(props.color).isLight() ? 'colors.dark' : 'white'
    })

    return {
      color: scheme.color,
      backgroundColor: scheme.backgroundColor
    }
  }
}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
