import React, { PureComponent } from 'react'
import TableCell from './TableCell'

export default class TableHeaderCell extends PureComponent<
  React.ComponentProps<typeof TableCell>
> {
  render() {
    return <TableCell overflow="visible" borderBottom={null} {...this.props} />
  }
}
