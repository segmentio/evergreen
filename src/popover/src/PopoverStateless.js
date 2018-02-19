import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../layers'

export default class PopoverStateless extends PureComponent {
  static propTypes = {
    ...Card.propTypes,
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
