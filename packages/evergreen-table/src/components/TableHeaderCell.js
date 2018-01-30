import React, { PureComponent } from 'react'
import TableCell from './TableCell'

export default class TableHeaderCell extends PureComponent {
  static propTypes = {
    /**
     * Composes the TableCell component as the base.
     */
    ...TableCell.propTypes
  }

  static defaultProps = {
    overflow: 'visible',
    borderBottom: null
  }

  render() {
    const { ...props } = this.props
    return <TableCell {...props} />
  }
}
