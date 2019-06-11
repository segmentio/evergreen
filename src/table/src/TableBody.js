import React, { PureComponent } from 'react'
import { Pane } from '../../layers'

export default class TableBody extends PureComponent {
  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes
  }

  render() {
    const { children, ...props } = this.props
    return (
      <Pane data-evergreen-table-body flex="1" overflowY="auto" {...props}>
        {children}
      </Pane>
    )
  }
}
