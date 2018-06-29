import React, { PureComponent } from 'react'
import { Pane } from '../../layers'
import { TableRowConsumer } from './TableRowContext'

export default class TableCell extends PureComponent {
  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes
  }

  static styles = {
    paddingX: 12,
    boxSizing: 'border-box',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden'
  }

  render() {
    const { children, ...props } = this.props

    return (
      <TableRowConsumer>
        {height => {
          return (
            <Pane height={height} {...TableCell.styles} {...props}>
              {children}
            </Pane>
          )
        }}
      </TableRowConsumer>
    )
  }
}
