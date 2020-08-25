import { useMemo } from 'react'
import { css } from 'glamor'
import useTheme from '../useTheme'

const hoverState = '&:hover'
const activeState = '&:active'
const focusState = '&:focus'

function getLinkStyle(color, theme) {
  const {
    tokens: { primary, colors }
  } = theme

  switch (color) {
    case 'neutral':
      return {
        color: colors.gray500,
        [hoverState]: {
          color: colors.gray400
        },
        [activeState]: {
          color: colors.gray600
        },
        [focusState]: {
          boxShadow: `0 0 0 2px ${colors.gray300}`
        }
      }

    case 'green':
      return {
        color: colors.green500,
        [hoverState]: {
          color: colors.green400
        },
        [activeState]: {
          color: colors.green600
        },
        [focusState]: {
          boxShadow: `0 0 0 2px ${colors.green300}`
        }
      }

    case 'blue':
    case 'default':
    default:
      return {
        color: primary.base,
        [hoverState]: {
          color: primary.hover
        },
        [activeState]: {
          color: primary.active
        },
        [focusState]: {
          boxShadow: `0 0 0 2px ${colors.blue300}`
        }
      }
  }
}

function useLinkAppearance(color) {
  const theme = useTheme()
  const className = useMemo(() => css(getLinkStyle(color, theme)).toString(), [
    color,
    theme
  ])
  return className
}

export default useLinkAppearance
