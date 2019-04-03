import { StackingOrder } from '../../constants'
import createAppearance from './createAppearance'
import missingStateWarning, { logMissingState } from './missingStateWarning'

interface IItems {
  base?: any
  hover?: any
  focus?: any
  active?: any
  disabled?: any
}

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

const disabledState = `[disabled], [data-disabled]`
const hoverState = '&:not([disabled]):not([data-disabled]):hover'
const focusState = '&:not([disabled]):not([data-disabled]):focus'
const activeState =
  '&:not([disabled]):not([data-disabled]):active, &:not([disabled]):not([data-disabled])[aria-expanded="true"], &:not([disabled]):not([data-disabled])[data-active]'

/**
 * @param {object} items - object with a set of items.
 * @return {object} the final appearance.
 */
const createButtonAppearance = (items: IItems = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'hover', 'focus', 'active', 'disabled'],
    cb: logMissingState('createTextDropdownButtonAppearance', items)
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
