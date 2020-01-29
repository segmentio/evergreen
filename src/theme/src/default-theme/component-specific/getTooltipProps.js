import tinycolor from 'tinycolor2'
import palette from '../foundational-styles/palette'

const getTooltipProps = (appearance, theme) => {
  const neutralBase = theme?.palette?.neutral?.base || palette.neutral.base

  switch (appearance) {
    case 'card':
      return {
        backgroundColor: 'white',
        elevation: 3
      }
    case 'default':
    default:
      return {
        color: 'white',
        backgroundColor: tinycolor(neutralBase)
          .setAlpha(0.95)
          .toString()
      }
  }
}

export default getTooltipProps
