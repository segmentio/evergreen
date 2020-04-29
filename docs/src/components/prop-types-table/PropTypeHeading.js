import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const getSpecificPropTypes = ({ name, value }) => {
  switch (name) {
    // Enums are treated as just having simple values, so no recursive step needed.
    case 'enum':
      return value.map(val => val.value).join(' | ')
    case 'union':
      return value.map(val => getSpecificPropTypes(val)).join(' | ')
    case 'arrayOf':
      return `Array<${getSpecificPropTypes(value)}>`
    case 'shape':
      if (typeof value === 'object') {
        return `{ ${Object.keys(value)
          .map(
            key =>
              `${key}${value[key].required ? '' : '?'}: ${getSpecificPropTypes(
                value[key]
              )}`
          )
          .join(', ')} }`
      }

      return value

    // In the case that the type isn't one of these "nested" types,
    // i.e. it's just a primitive value, just return the name
    default:
      return name
  }
}

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
          <span className="PropTypeHeading-propType">
            {getSpecificPropTypes(type)}
          </span>
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
