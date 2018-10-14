import React, { PureComponent } from 'react'
import { Pane } from '../../layers'
import TableBody from './TableBody'
import TableVirtualBody from './TableVirtualBody'
import TableCell from './TableCell'
import TableHead from './TableHead'
import TableHeaderCell from './TableHeaderCell'
import TableRow from './TableRow'
import TextTableCell from './TextTableCell'
import TextTableHeaderCell from './TextTableHeaderCell'
import SearchTableHeaderCell from './SearchTableHeaderCell'
import EditableCell from './EditableCell'
import SelectMenuCell from './SelectMenuCell'

export default class Table extends PureComponent {
  static Body = TableBody

  static VirtualBody = TableVirtualBody

  static Head = TableHead

  static HeaderCell = TableHeaderCell

  static TextHeaderCell = TextTableHeaderCell

  static SearchHeaderCell = SearchTableHeaderCell

  static Row = TableRow

  static Cell = TableCell

  static TextCell = TextTableCell

  static EditableCell = EditableCell

  static SelectMenuCell = SelectMenuCell

  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes
  }

  render() {
    const { children, ...props } = this.props
    return <Pane {...props}>{children}</Pane>
  }
}
