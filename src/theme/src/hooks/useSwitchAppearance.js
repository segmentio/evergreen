import { useMemo } from 'react'
import { css } from 'glamor'
import useTheme from '../useTheme'

const disabledState = '&[disabled] + div'
const hoverState = '&:not([disabled]):hover + div'
const focusState = '&:not([disabled]):focus + div'
const activeState = '&:not([disabled]):active + div'
const checkedState = '&:checked + div'
const checkedHoverState = '&:checked:hover + div'
const checkedActiveState = '&:not([disabled]):checked:active + div'
const checkedDisabledState = '&[disabled]:checked + div'

const hiddenCheckboxStyle = {
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1',
  opacity: '0'
}

function getSwitchStyles(appearance, theme) {
  const { tokens } = theme

  const { primary } = tokens

  switch (appearance) {
    case 'default':
    default:
      return {
        ...hiddenCheckboxStyle,
        '& + div > svg': { display: 'none' },
        '& + div': {
          transition: 'all 120ms ease-in-out',
          cursor: 'pointer',
          color: 'white',
          backgroundColor: tokens.colors.gray400,
          borderRadius: 9999
        },
        [disabledState]: {
          cursor: 'not-allowed',
          opacity: 0.5
        },
        [hoverState]: {
          backgroundColor: tokens.colors.gray500
        },
        [focusState]: {
          boxShadow: `0 0 0 3px ${tokens.colors.blue100}`
        },
        [activeState]: {
          backgroundColor: tokens.colors.gray600
        },
        [checkedState]: {
          backgroundColor: primary.base,
          color: 'white',
          '& > svg': { display: 'block' }
        },
        [checkedHoverState]: {
          backgroundColor: primary.hover,
          color: 'white',
          '& > svg': { display: 'block' }
        },
        [checkedActiveState]: {
          backgroundColor: primary.active,
          color: 'white',
          '& > svg': { display: 'block' }
        },
        [checkedDisabledState]: {
          '& > svg': { display: 'block' }
        }
      }
  }
}

function useSwitchAppearance(appearance = 'default') {
  const theme = useTheme()
  const className = useMemo(() => css(getSwitchStyles(appearance, theme)), [
    appearance,
    theme
  ])
  return className
}

export default useSwitchAppearance
