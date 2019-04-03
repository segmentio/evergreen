import createAppearance from './createAppearance'
import missingStateWarning, { logMissingState } from './missingStateWarning'

interface IItems {
  base?: any
  hover?: any
}

const hoverState = '&:hover'

const baseStyle = {
  cursor: 'pointer'
}

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createBadgeAppearance = (items: IItems = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'hover'],
    cb: logMissingState('createBadgeAppearance', items)
  })

  return {
    ...baseStyle,
    ...createAppearance(items.base),
    [hoverState]: createAppearance(items.hover)
  }
}

export default createBadgeAppearance
