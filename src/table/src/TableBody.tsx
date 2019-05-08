import React, { PureComponent } from 'react'
import { Pane } from '../../layers'

export default class TableBody extends PureComponent<
  React.ComponentProps<typeof Pane>
> {
  render() {
    const { children, ...props } = this.props
    return (
      <Pane data-evergreen-table-body flex="1" overflowY="scroll" {...props}>
        {children}
      </Pane>
    )
  }
}
