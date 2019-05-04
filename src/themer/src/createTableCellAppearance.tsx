import createAppearance from './createAppearance'
import missingStateWarning from './missingStateWarning'

const focusState =
  '&[data-isselectable="true"]:focus, &[aria-expanded="true"][aria-haspopup="true"]'

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createTableCellAppearance = (items = {}) => {
  missingStateWarning({
    items,
    props: ['focus'],
    cb: prop => {
      console.error(
        `Themer.createTableCellAppearance() is missing a ${prop} item`,
        items
      )
    }
  })

  return {
    [focusState]: createAppearance(items.focus)
  }
}

export default createTableCellAppearance
