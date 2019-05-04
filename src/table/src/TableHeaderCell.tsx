import React, { PureComponent } from 'react'
import TableCell from './TableCell'

export default class TableHeaderCell extends PureComponent {
  static propTypes = {
    /**
     * Composes the TableCell component as the base.
     */
    ...TableCell.propTypes
  }

  render() {
    return <TableCell overflow="visible" borderBottom={null} {...this.props} />
  }
}
