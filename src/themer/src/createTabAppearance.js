import createAppearance from './createAppearance'
import missingStateWarning from './missingStateWarning'

const hoverState = '&:hover'
const selectedState =
  '&[aria-current="page"], &[aria-selected="true"], &:active'
const currentState = '&[aria-current="page"], &[aria-selected="true"]'
const focusState = '&:focus'
const disabledState = '&[aria-disabled="true"]'

const baseStyle = {
  cursor: 'pointer',
  outline: 'none'
}

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createTabAppearance = (items = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'hover', 'active', 'focus', 'current', 'disabled'],
    cb: prop => {
      console.error(
        `Themer.createTabAppearance() is missing a ${prop} item `,
        items
      )
    }
  })

  return {
    ...baseStyle,
    ...createAppearance(items.base),
    [hoverState]: createAppearance(items.hover),
    [focusState]: createAppearance(items.focus),
    [selectedState]: createAppearance(items.active),
    [currentState]: {
      cursor: 'default',
      ...createAppearance(items.current)
    },
    [disabledState]: {
      cursor: 'not-allowed',
      ...createAppearance(items.disabled)
    }
  }
}

export default createTabAppearance
