import { useMemo } from 'react'
import { css } from 'glamor'
import useTheme from '../useTheme'

const baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  boxSizing: 'border-box',
  textDecoration: 'none',
  transition: 'box-shadow 80ms ease-in-out',
  WebkitAppearance: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
}

const baseState = '& label'
const disabledState = '&[disabled]'
const hoverState = '&:not([disabled]):hover'
const selectedState = '&:not([disabled])[data-active]'
const activeState = '&:not([disabled]):active'
const focusState = '& input:focus + label'

const getSegmentedControlStyles = theme => {
  const {
    tokens: { primary, colors },
    segmentedControl
  } = theme

  const {
    base: baseStyles = {},
    hover: hoverStyles = {},
    diabled: disabledStyles = {},
    focus: focusStyles = {},
    active: activeStyles = {}
  } = segmentedControl || {}

  return {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',

    '&:not(:last-child)': {
      marginRight: 0
    },

    [baseState]: {
      ...baseStyle,
      position: 'relative',
      color: colors.gray700,
      backgroundColor: 'transparent',
      borderRadius: '4px',
      padding: '4px',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...baseStyles
    },

    [disabledState]: {
      opacity: 0.8,
      backgroundColor: colors.gray500,
      boxShadow: 'none',
      color: colors.gray600,
      pointerEvents: 'none',
      ...disabledStyles
    },
    [hoverState]: {
      '& label': {
        color: colors.gray800,
        backgroundColor: colors.gray100,
        ...hoverStyles
      }
    },
    [focusState]: {
      zIndex: 1,
      boxShadow: `0 0 0 2px ${colors.blue100}`,
      ...focusStyles
    },
    [activeState]: {
      '& label': {
        backgroundColor: colors.gray200,
        color: colors.gray800
      }
    },
    [selectedState]: {
      '& label': {
        backgroundColor: colors.blue50,
        color: primary.base,
        ...activeStyles
      }
    }
  }
}

function useSegmentedControlAppearance() {
  const theme = useTheme()
  const className = useMemo(
    () => css(getSegmentedControlStyles(theme)).toString(),
    [theme]
  )
  return className
}

export default useSegmentedControlAppearance
