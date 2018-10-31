import createAppearance from './createAppearance'
import missingStateWarning from './missingStateWarning'

const hoverState = '&:hover'

const baseStyle = {
  cursor: 'pointer'
}

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createBadgeAppearance = (items = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'hover'],
    cb: prop => {
      console.error(
        `Themer.createBadgeAppearance() is missing a ${prop} item `,
        items
      )
    }
  })

  return {
    ...baseStyle,
    ...createAppearance(items.base),
    [hoverState]: createAppearance(items.hover)
  }
}

export default createBadgeAppearance
