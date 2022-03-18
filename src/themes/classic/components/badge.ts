// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'tiny... Remove this comment to see the full error message
import tinycolor from 'tinycolor2'
import { get } from '../../../theme/src/theme-tools'

const baseStyle = {
  height: 16,
  paddingY: 0,
  paddingX: 6,
  borderRadius: 'radii.1',
  fontSize: '11.5px',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase'
}

function getContrastingColor(theme: any, props: any) {
  const scheme = get(theme, `fills.${props.appearance}.${props.color}`, {
    backgroundColor: props.color,
    color: tinycolor(props.color).isLight() ? 'colors.dark' : 'white'
  })

  return {
    color: scheme.color,
    backgroundColor: scheme.backgroundColor
  }
}

const appearances = {
  solid: getContrastingColor,
  subtle: getContrastingColor
}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}