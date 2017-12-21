import React from 'react'
import PropTypes from 'prop-types'

export default class AppearanceOption extends React.PureComponent {
  static propTypes = {
    component: PropTypes.node,
    children: PropTypes.node,
    title: PropTypes.string
  }

  render() {
    return (
      <div className="AppearanceOption">
        <div className="AppearanceOption-component">{this.props.component}</div>
        <div className="AppearanceOption-description Content">
          <h3>{this.props.title}</h3>
          {this.props.children}
        </div>
      </div>
    )
  }
}
