import React, { PureComponent } from 'react'
import { Pane } from '../../layers'

export default class TableBody extends PureComponent {
  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes
  }

  static defaultProps = {
    overflowY: 'scroll',
    flex: '1'
  }

  render() {
    const { children, ...props } = this.props
    return <Pane {...props}>{children}</Pane>
  }
}
