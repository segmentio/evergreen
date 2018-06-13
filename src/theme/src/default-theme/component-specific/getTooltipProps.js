import tinycolor from 'tinycolor2'
import palette from '../foundational-styles/palette'

const getTooltipProps = () => {
  return {
    backgroundColor: tinycolor(palette.neutral.base)
      .setAlpha(0.95)
      .toString()
  }
}

export default getTooltipProps
