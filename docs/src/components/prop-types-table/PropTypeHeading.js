import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class PropTypeHeading extends PureComponent {
  static propTypes = {
    defaultValue: PropTypes.any,
    name: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.any,
    isArrayOf: PropTypes.string
  }

  render() {
    const { defaultValue, name, required, type, isArrayOf } = this.props

    return (
      <div className="PropTypeHeading">
        <code>
          <span className="PropTypeHeading-name">{name}</span>
          <span className="PropTypeHeading-propType">{type.name}</span>
          {isArrayOf && (
            <span className="PropTypeHeading-arrayOf">{isArrayOf}</span>
          )}
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
