import React from 'react'
import PropTypes from 'prop-types'

export default class AppearanceOption extends React.PureComponent {
  static propTypes = {
    component: PropTypes.node,
    children: PropTypes.node
  }

  render() {
    return (
      <div className="AppearanceOption">
        <div className="AppearanceOption-component">{this.props.component}</div>
        <div className="AppearanceOption-description">
          {this.props.children}
        </div>
      </div>
    )
  }
}
