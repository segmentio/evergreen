import tinycolor from 'tinycolor2'
import { EnhancerProps } from 'ui-box'
import { get } from '../../../theme/src/theme-tools'

const baseStyle = {
  height: 16,
  paddingY: 0,
  paddingX: 6,
  borderRadius: 'radii.1',
  fontSize: '11.5px',
  textAlign: 'center' as EnhancerProps['textAlign'],
  textDecoration: 'none' as EnhancerProps['textDecoration'],
  textTransform: 'uppercase' as EnhancerProps['textTransform'],
}

const appearances = {
  subtle: (theme: any, props: any) => {
    const scheme = get(theme, `fills.${props.color}`, {
      backgroundColor: props.color,
      color: tinycolor(props.color).isLight() ? 'colors.dark' : 'white',
    })

    return {
      color: scheme.color,
      backgroundColor: scheme.backgroundColor,
    }
  },
}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes,
}
