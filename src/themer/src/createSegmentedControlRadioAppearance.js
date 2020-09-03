import { StackingOrder } from '../../constants'
import createAppearance from './createAppearance'
import missingStateWarning from './missingStateWarning'

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

const disabledState = '&[disabled]'
const hoverState = '&:not([disabled]):hover'
const activeState = '&:not([disabled]):active, &:not([disabled])[data-active]'
const focusState = '& input:focus + label'

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createSegmentedControlRadioAppearance = (items = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'hover', 'disabled', 'active', 'focus'],
    cb: prop => {
      console.error(
        `Themer.createSegmentedControlRadioAppearance() is missing a ${prop} item`,
        items
      )
    }
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
    '&[data-active]': {
      cursor: 'default'
    }
  }
}

export default createSegmentedControlRadioAppearance
