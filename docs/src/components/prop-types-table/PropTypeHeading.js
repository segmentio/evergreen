import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class PropTypeHeading extends PureComponent {
  static propTypes = {
    defaultValue: PropTypes.any,
    name: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.any
  }

  render() {
    const { defaultValue, name, required, type } = this.props

    return (
      <div className="PropTypeHeading">
        <code>
          <span className="PropTypeHeading-propType">{type.name}</span>
          <span className="PropTypeHeading-name">{name}</span>
        </code>
        {defaultValue ? (
          <code className="PropTypeHeading-defaultValue">
            {' '}
            = {defaultValue.value}
          </code>
        ) : null}
        {required ? (
          <span className="PropTypeHeading-required">required</span>
        ) : null}
      </div>
    )
  }
}
