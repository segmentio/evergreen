import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as reactDocs from 'react-docgen'
import PropTypeWrapper from './PropTypeWrapper'
import PropTypeDescription from './PropTypeDescription'
import PropTypeHeading from './PropTypeHeading'

export default class PropTypesTable extends PureComponent {
  static propTypes = {
    componentSource: PropTypes.string
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    // Parsing the componentSrc is expensive, so we cache it in state rather than
    // computing it every time the component is rendered. Note the
    // componentWillReceiveProps method below where it is re-parsed as required.
    const componentDocs = reactDocs.parse(props.componentSource)
    this.state = { componentDocs }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.componentSource !== this.props.componentSource) {
      const componentDocs = reactDocs.parse(newProps.componentSource)
      this.setState({ componentDocs })
    }
  }

  render() {
    const { componentDocs } = this.state
    const propTypes = Object.keys(componentDocs.props)
    console.log('componentDocs', componentDocs)
    return (
      <div>
        <div className="Content">
          <h3>Props</h3>
          {componentDocs.composes.length > 0 && (
            <div className="PropTypesTable-composes">
              <p>
                <strong>This component composes </strong>
                {componentDocs.composes.map(filePath => (
                  <code key={filePath}>
                    {filePath.substring(filePath.indexOf('/') + 1)}
                  </code>
                ))}
              </p>
            </div>
          )}
        </div>

        {propTypes.map(propName => {
          const prop = componentDocs.props[propName]
          // Figure out what makes sense here.
          // const value = (prop.type || {}).value
          return (
            <PropTypeWrapper key={propName}>
              <PropTypeHeading
                name={propName}
                required={prop.required}
                defaultValue={prop.defaultValue}
                type={prop.type || {}}
              />
              {prop.description ? (
                <PropTypeDescription>{prop.description}</PropTypeDescription>
              ) : null}
            </PropTypeWrapper>
          )
        })}
      </div>
    )
  }
}
