import missingStateWarning from './missingStateWarning'
import createAppearance from './createAppearance'

const hoverState = '&:hover'
const activeState = '&:active'
const focusState = '&:focus'

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createLinkAppearance = (items = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'hover', 'active', 'focus'],
    cb: prop => {
      console.error(
        `Themer.createLinkAppearance() is missing a ${prop} item`,
        items
      )
    }
  })

  return {
    ...items.base,
    [hoverState]: createAppearance(items.hover),
    [activeState]: createAppearance(items.active),
    [focusState]: createAppearance(items.focus)
  }
}

export default createLinkAppearance
