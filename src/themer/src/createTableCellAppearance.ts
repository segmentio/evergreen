import createAppearance from './createAppearance'
import missingStateWarning, { logMissingState } from './missingStateWarning'

interface Items {
  focus?: any
}

const focusState =
  '&[data-isselectable="true"]:focus, &[aria-expanded="true"][aria-haspopup="true"]'

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createTableCellAppearance = (items: Items = {}) => {
  missingStateWarning({
    items,
    props: ['focus'],
    cb: logMissingState('createTableCellAppearance', items)
  })

  return {
    [focusState]: createAppearance(items.focus)
  }
}

export default createTableCellAppearance
