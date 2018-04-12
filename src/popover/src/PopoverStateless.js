import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../layers'

export default class PopoverStateless extends PureComponent {
  static propTypes = {
    /**
     * Composes the Card as the base.
     */
    ...Card.propTypes,

    /**
     * The content of the Popover.
     */
    children: PropTypes.node
  }

  render() {
    const { children, ...props } = this.props

    return (
      <Card
        role="dialog"
        elevation={3}
        overflow="hidden"
        minWidth={200}
        backgroundColor="white"
        {...props}
      >
        {children}
      </Card>
    )
  }
}
