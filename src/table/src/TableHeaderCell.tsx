import React, { memo } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import TableCell, { TableCellOwnProps } from './TableCell'

export interface TableHeaderCellOwnProps extends TableCellOwnProps {}

export type TableHeaderCellProps = PolymorphicBoxProps<'div', TableHeaderCellOwnProps>

const TableHeaderCell: React.FC<TableHeaderCellProps> = memo(function TableHeaderCell(props) {
  return <TableCell overflow="visible" borderBottom={null} {...props} />
})

export default TableHeaderCell
