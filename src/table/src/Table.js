import React, { PureComponent } from 'react'
import { Pane } from '../../layers'

export default class Table extends PureComponent {
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
