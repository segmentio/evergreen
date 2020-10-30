import React, { memo } from 'react'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
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

const emptyObject = {}

const Table = memo(function Table(props) {
  const { children, ...rest } = props
  const { className, ...boxProps } = useStyleConfig(
    'Table',
    emptyObject,
    emptyObject,
    emptyObject
  )

  return (
    <Pane className={className} {...boxProps} {...rest}>
      {children}
    </Pane>
  )
})

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

Table.propTypes = {
  ...Pane.propTypes
}

export default Table
