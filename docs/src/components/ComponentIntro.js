import React from 'react'
import PropTypes from 'prop-types'

export default class ComponentIntro extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.node
  }

  render() {
    const { name, children } = this.props

    return (
      <div className="Content ComponentIntro" style={{ marginBottom: 32 }}>
        <h3 style={{ marginBottom: 16 }}>
          <code>{name}</code> component
        </h3>
        <div className="ComponentIntro-body">{children}</div>
      </div>
    )
  }
}
