import createAppearance from './createAppearance'
import missingStateWarning from './missingStateWarning'

const hoverState = '&[data-isselecteable="true"]:hover'
const focusState = '&[data-isselecteable="true"]:focus, &[aria-selected="true"]'
const activeState =
  '&[aria-current="true"], &[data-isselecteable="true"]:active'
const currentState = '&[aria-current="true"]'

const baseStyle = {
  '&[data-isselecteable="true"]': {
    cursor: 'pointer'
  },
  outline: 'none'
}

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createRowAppearance = (items = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'hover', 'active', 'focus', 'current'],
    cb: prop => {
      console.error(
        `Themer.createRowAppearance() is missing a ${prop} item `,
        items
      )
    }
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
