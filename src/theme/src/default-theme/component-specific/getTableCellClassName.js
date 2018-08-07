import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import scales from '../foundational-styles/scales'

const Appearances = {}

Appearances.default = Themer.createTableCellAppearance({
  focus: {
    outline: 'none',
    backgroundColor: scales.primary.P2A,
    boxShadow: `inset 0 0 0 1px ${scales.primary.P7A}`
  }
})

/**
 * Get the appearance of a `TableCell`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */
const getAppearance = () => {
  return Appearances.default
}

/**
 * Get the className of a `Table.EditableCell`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getAppearance)
