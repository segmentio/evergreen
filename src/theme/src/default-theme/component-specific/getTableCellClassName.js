import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import tableColors from './tableColors'

const Appearances = {}

Appearances.default = theme => {
  const cellFocusBg =
    theme?.tableColors?.cell?.focus?.backgroundColor ||
    tableColors.cell.focus.backgroundColor

  const cellFocusShadow =
    theme?.tableColors?.cell?.focus?.shadowColor ||
    tableColors.cell.focus.shadowColor

  return Themer.createTableCellAppearance({
    focus: {
      outline: 'none',
      backgroundColor: cellFocusBg,
      boxShadow: `inset 0 0 0 1px ${cellFocusShadow}`
    }
  })
}

/**
 * Get the appearance of a `TableCell`.
 * @param {string} appearance
 * @param {object} theme - the current theme
 * @return {string} the appearance object.
 */
const getAppearance = theme => {
  return Appearances.default(theme)
}

/**
 * Get the className of a `Table.EditableCell`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getAppearance)
