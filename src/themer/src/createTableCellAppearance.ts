import createAppearance from './createAppearance'
import missingStateWarning, { logMissingState } from './missingStateWarning'

interface IItems {
  focus?: any
}

const focusState =
  '&[data-isselectable="true"]:focus, &[aria-expanded="true"][aria-haspopup="true"]'

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createTableCellAppearance = (items: IItems = {}) => {
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
