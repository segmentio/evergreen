import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'

export default ({ scales }) => {
  const Appearances = {}

  Appearances.default = Themer.createTableCellAppearance({
    focus: {
      outline: 'none',
      backgroundColor: scales.blue.B2A,
      boxShadow: `inset 0 0 0 1px ${scales.blue.B7A}`
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
  return memoizeClassName(getAppearance)
}
