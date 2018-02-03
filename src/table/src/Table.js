import React, { PureComponent } from 'react'
import { Pane } from 'evergreen-layers'

export default class Table extends PureComponent {
  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes
  }

  static defaultProps = {
    border: true
  }

  render() {
    const { children, ...props } = this.props
    return <Pane {...props}>{children}</Pane>
  }
}
