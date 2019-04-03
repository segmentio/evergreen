import missingStateWarning, { logMissingState } from './missingStateWarning'
import createAppearance from './createAppearance'

interface IItems {
  base?: any
  hover?: any
  focus?: any
  active?: any
}

const hoverState = '&:hover'
const activeState = '&:active'
const focusState = '&:focus'

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createLinkAppearance = (items: IItems = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'hover', 'active', 'focus'],
    cb: logMissingState('createLinkAppearance', items)
  })

  return {
    ...items.base,
    [hoverState]: createAppearance(items.hover),
    [activeState]: createAppearance(items.active),
    [focusState]: createAppearance(items.focus)
  }
}

export default createLinkAppearance
