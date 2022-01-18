import React, { memo } from 'react'
import TableCell from './TableCell'

const TableHeaderCell = memo(function TableHeaderCell(props) {
  // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
  return <TableCell overflow="visible" borderBottom={null} {...props} />
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
TableHeaderCell.propTypes = {
  /**
   * Composes the TableCell component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...TableCell.propTypes
}

export default TableHeaderCell
