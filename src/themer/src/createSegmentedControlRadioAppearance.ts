import { StackingOrder } from '../../constants'
import createAppearance from './createAppearance'
import missingStateWarning, { logMissingState } from './missingStateWarning'

interface Items {
  base?: any
  hover?: any
  focus?: any
  active?: any
  disabled?: any
}

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

const disabledState = '[disabled="true"], [data-disabled="true"]'
const hoverState = '&:not([disabled="true"]):not([data-disabled="true"]):hover'
const activeState =
  '&:not([disabled="true"]):not([data-disabled="true"]):active, &:not([disabled="true"]):not([data-disabled="true"])[data-popover-opened="true"], &:not([disabled="true"]):not([data-disabled="true"])[data-active="true"]'
const focusState = '& input:focus + label'

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createSegmentedControlRadioAppearance = (items: Items = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'hover', 'disabled', 'active', 'focus'],
    cb: logMissingState('createSegmentedControlRadioAppearance', items)
  })

  return {
    ...baseStyle,
    ...createAppearance(items.base),
    [disabledState]: {
      cursor: 'not-allowed',
      ...createAppearance(items.disabled)
    },
    [hoverState]: createAppearance(items.hover),
    [focusState]: {
      zIndex: StackingOrder.FOCUSED,
      ...createAppearance(items.focus)
    },
    [activeState]: createAppearance(items.active),
    '&[data-active="true"]': {
      cursor: 'default'
    }
  }
}

export default createSegmentedControlRadioAppearance
