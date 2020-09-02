import { StackingOrder } from '../../constants'
import createAppearance from './createAppearance'
import missingStateWarning from './missingStateWarning'

const baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  verticalAlign: 'middle',
  textDecoration: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  background: 'none'
}

const disabledState = `&[disabled]`
const hoverState = '&:not([disabled]):hover'
const focusState = '&:not([disabled]):focus'
const activeState =
  '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]'

/**
 * @param {object} items - object with a set of items.
 * @return {object} the final appearance.
 */
const createButtonAppearance = (items = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'hover', 'focus', 'active', 'disabled'],
    cb: prop => {
      console.error(
        `Themer.createTextDropdownButtonAppearance() is missing a ${prop} state in items:`,
        items
      )
    }
  })

  return {
    ...baseStyle,
    ...createAppearance(items.base),
    [disabledState]: createAppearance(items.disabled),
    [hoverState]: createAppearance(items.hover),
    [focusState]: {
      zIndex: StackingOrder.FOCUSED,
      ...createAppearance(items.focus)
    },
    [activeState]: createAppearance(items.active)
  }
}

export default createButtonAppearance
