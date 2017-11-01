import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'evergreen-layers'

export default class PopoverStateless extends PureComponent {
  static propTypes = {
    ...Card.propTypes,
    children: PropTypes.node,
  }

  static defaultProps = {
    oveflow: 'hidden',
    minWidth: 200,
    elevation: 3,
    backgroundColor: 'white',
  }

  render() {
    const { children, ...props } = this.props

    return (
      <Card role="dialog" {...props}>
        {children}
      </Card>
    )
  }
}
