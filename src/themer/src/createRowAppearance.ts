import createAppearance from './createAppearance'
import missingStateWarning, { logMissingState } from './missingStateWarning'

interface Items {
  base?: any
  hover?: any
  focus?: any
  active?: any
  current?: any
}

const hoverState = '&[data-isselectable="true"]:hover'
const focusState = '&[data-isselectable="true"]:focus, &[aria-selected="true"]'
const activeState = '&[aria-current="true"], &[data-isselectable="true"]:active'
const currentState = '&[aria-current="true"]'

const baseStyle = {
  '&[data-isselectable="true"]': {
    cursor: 'pointer'
  },
  outline: 'none'
}

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createRowAppearance = (items: Items = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'hover', 'active', 'focus', 'current'],
    cb: logMissingState('createRowAppearance', items)
  })

  return {
    ...baseStyle,
    ...createAppearance(items.base),
    [hoverState]: createAppearance(items.hover),
    [focusState]: createAppearance(items.focus),
    [activeState]: createAppearance(items.active),
    [currentState]: createAppearance(items.current)
  }
}

export default createRowAppearance
