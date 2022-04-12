import React, { memo } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import { PaneOwnProps } from '../../layers/src/Pane'
import EditableCell from './EditableCell'
import SearchTableHeaderCell from './SearchTableHeaderCell'
import SelectMenuCell from './SelectMenuCell'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableHead from './TableHead'
import TableHeaderCell from './TableHeaderCell'
import TableRow from './TableRow'
import TableVirtualBody from './TableVirtualBody'
import TextTableCell from './TextTableCell'
import TextTableHeaderCell from './TextTableHeaderCell'

export interface TableOwnProps extends PaneOwnProps {}

export type TableProps = PolymorphicBoxProps<'div', TableOwnProps>

type TableComponent = React.FC<TableProps> & {
  Body: typeof TableBody
  VirtualBody: typeof TableVirtualBody
  Head: typeof TableHead
  HeaderCell: typeof TableHeaderCell
  TextHeaderCell: typeof TextTableHeaderCell
  SearchHeaderCell: typeof SearchTableHeaderCell
  Row: typeof TableRow
  Cell: typeof TableCell
  TextCell: typeof TextTableCell
  EditableCell: typeof EditableCell
  SelectMenuCell: typeof SelectMenuCell
}

const emptyObject = {}

const Table: TableComponent = (memo(function Table(props) {
  const { children, ...rest } = props
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"Table"' is not assignable to pa... Remove this comment to see the full error message
  const { className, ...boxProps } = useStyleConfig('Table', emptyObject, emptyObject, emptyObject)

  return (
    <Pane className={className} {...boxProps} {...rest}>
      {children}
    </Pane>
  )
}) as any) as TableComponent

Table.Body = TableBody
Table.VirtualBody = TableVirtualBody
Table.Head = TableHead
Table.HeaderCell = TableHeaderCell
Table.TextHeaderCell = TextTableHeaderCell
Table.SearchHeaderCell = SearchTableHeaderCell
Table.Row = TableRow
Table.Cell = TableCell
Table.TextCell = TextTableCell
Table.EditableCell = EditableCell
Table.SelectMenuCell = SelectMenuCell

export default Table
