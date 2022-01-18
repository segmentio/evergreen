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
  const { className, ...boxProps } = useStyleConfig('Table', emptyObject, emptyObject, emptyObject)

  return (
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    <Pane className={className} {...boxProps} {...rest}>
      {children}
    </Pane>
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'Body' does not exist on type 'NamedExoti... Remove this comment to see the full error message
Table.Body = TableBody
// @ts-expect-error ts-migrate(2339) FIXME: Property 'VirtualBody' does not exist on type 'Nam... Remove this comment to see the full error message
Table.VirtualBody = TableVirtualBody
// @ts-expect-error ts-migrate(2339) FIXME: Property 'Head' does not exist on type 'NamedExoti... Remove this comment to see the full error message
Table.Head = TableHead
// @ts-expect-error ts-migrate(2339) FIXME: Property 'HeaderCell' does not exist on type 'Name... Remove this comment to see the full error message
Table.HeaderCell = TableHeaderCell
// @ts-expect-error ts-migrate(2339) FIXME: Property 'TextHeaderCell' does not exist on type '... Remove this comment to see the full error message
Table.TextHeaderCell = TextTableHeaderCell
// @ts-expect-error ts-migrate(2339) FIXME: Property 'SearchHeaderCell' does not exist on type... Remove this comment to see the full error message
Table.SearchHeaderCell = SearchTableHeaderCell
// @ts-expect-error ts-migrate(2339) FIXME: Property 'Row' does not exist on type 'NamedExotic... Remove this comment to see the full error message
Table.Row = TableRow
// @ts-expect-error ts-migrate(2339) FIXME: Property 'Cell' does not exist on type 'NamedExoti... Remove this comment to see the full error message
Table.Cell = TableCell
// @ts-expect-error ts-migrate(2339) FIXME: Property 'TextCell' does not exist on type 'NamedE... Remove this comment to see the full error message
Table.TextCell = TextTableCell
// @ts-expect-error ts-migrate(2339) FIXME: Property 'EditableCell' does not exist on type 'Na... Remove this comment to see the full error message
Table.EditableCell = EditableCell
// @ts-expect-error ts-migrate(2339) FIXME: Property 'SelectMenuCell' does not exist on type '... Remove this comment to see the full error message
Table.SelectMenuCell = SelectMenuCell

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
Table.propTypes = {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...Pane.propTypes
}

export default Table
