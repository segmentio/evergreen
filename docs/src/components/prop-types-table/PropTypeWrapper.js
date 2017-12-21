import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class PropTypeWrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props
    return <div className="PropTypeWrapper">{children}</div>
  }
}
