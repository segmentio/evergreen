import React, { PureComponent } from 'react'
import { Pane } from '../../layers'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableHead from './TableHead'
import TableHeaderCell from './TableHeaderCell'
import TableRow from './TableRow'
import TextTableCell from './TextTableCell'
import TextTableHeaderCell from './TextTableHeaderCell'
import SearchTableHeaderCell from './SearchTableHeaderCell'

export default class Table extends PureComponent {
  static Body = TableBody
  static Head = TableHead
  static HeaderCell = TableHeaderCell
  static TextHeaderCell = TextTableHeaderCell
  static SearchHeaderCell = SearchTableHeaderCell
  static Row = TableRow
  static Cell = TableCell
  static TextCell = TextTableCell

  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes
  }

  render() {
    const { children, ...props } = this.props
    return (
      <Pane border {...props}>
        {children}
      </Pane>
    )
  }
}
