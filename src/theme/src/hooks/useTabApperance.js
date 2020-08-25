import { useMemo } from 'react'
import { css } from 'glamor'
import useTheme from '../useTheme'

const baseStyles = {
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '16px',
  alignItems: 'center',
  textDecoration: 'none',
  cursor: 'pointer'
}

const hoverState = '&:hover'
const currentState = '&[aria-current="page"], &[aria-selected="true"]'
const focusState = '&:focus'
const activeState = '&:active'

const getTabStyles = (apperance, direction, theme) => {
  const {
    tokens: { primary, colors }
  } = theme

  const display = direction === 'horizontal' ? 'inline-flex' : 'flex'
  const width = direction === 'horizontal' ? 'auto' : '100%'
  const spacing =
    direction === 'horizontal'
      ? { marginRight: '8px' }
      : { marginBottom: '8px' }

  switch (apperance) {
    case 'primary':
      return {
        ...baseStyles,
        color: colors.muted,
        paddingTop: '6px',
        paddingBottom: '16px',
        paddingLeft: '2px',
        paddingRight: '2px',
        position: 'relative',
        display,
        width,

        ':not(:last-child)': {
          marginRight: '20px'
        },

        ':before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          right: 0,
          height: '2px',
          borderRadius: '2px 2px 0px 0px',
          backgroundColor: primary.base,
          width: '100%',
          transition: '0.25s',
          transform: 'scaleY(0)',
          transformOrigin: 'bottom center'
        },

        [hoverState]: {
          color: colors.default
        },

        [currentState]: {
          color: primary.base,

          '&:before': {
            transform: 'scaleY(1)'
          },

          '&:focus': {
            color: primary.hover
          }
        },

        [focusState]: {
          outline: 'none',
          color: colors.default
        }
      }
    default:
      return {
        ...baseStyles,
        padding: '8px 16px',
        borderRadius: '4px',
        color: colors.default,
        display,
        width,

        ':not(:last-child)': spacing,

        [hoverState]: {
          backgroundColor: colors.gray100,
          color: colors.gray800
        },

        [activeState]: {
          backgroundColor: colors.gray200
        },

        [currentState]: {
          backgroundColor: colors.blue50,
          color: colors.blue500
        },

        [focusState]: {
          outline: 'none',
          boxShadow: `0 0 0 2px ${colors.blue100}`
        }
      }
  }
}

function useTabAppearance(appearance, direction) {
  const theme = useTheme()
  const className = useMemo(
    () => css(getTabStyles(appearance, direction, theme)).toString(),
    [appearance, direction, theme]
  )

  return className
}

export default useTabAppearance
