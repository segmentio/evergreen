import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import PropTypeWrapper from './prop-types-table/PropTypeWrapper'
import PropTypeDescription from './prop-types-table/PropTypeDescription'
import PropTypeHeading from './prop-types-table/PropTypeHeading'

export default class PropsTable extends PureComponent {
  static propTypes = {
    of: PropTypes.string.isRequired,
    rename: PropTypes.string
  }

  isArrayOf = prop => {
    if (
      prop.type &&
      prop.type.name === 'arrayOf' &&
      typeof prop.type.value === 'object' &&
      typeof prop.type.value.raw === 'string'
    ) {
      return prop.type.value.raw
    }
  }

  /**
   * The StaticQuery loads all of the docs within Evergreen.
   * We find the docs for just the component we are looking for.
   */
  getDocsForComponent = data => {
    const result = data.allComponentMetadata.edges.find(({ node }) => {
      return node.displayName === this.props.of
    })

    if (result) return result.node
    return null
  }

  render() {
    return (
      /**
       * The plugin gatsby-transformer-react-docgen run react-docgen
       * on all of Evergreen and this query returns all of the data for
       * creating prop types.
       */
      <StaticQuery
        query={graphql`
          {
            allComponentMetadata {
              edges {
                node {
                  displayName
                  composes
                  description {
                    id
                  }
                  props {
                    id
                    name
                    docblock
                    defaultValue {
                      value
                      computed
                    }
                    type {
                      name
                      value
                      raw
                    }
                    required
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const componentDocs = this.getDocsForComponent(data)
          if (!componentDocs)
            return (
              <div>
                <p>
                  The properties table for this component can’t be rendered at
                  the moment, due to a bug.
                </p>
              </div>
            )
          return (
            <>
              <div className="Content">
                <h2 className="h2">
                  <code className="code">
                    {this.props.rename || componentDocs.displayName}
                  </code>{' '}
                  Props
                </h2>
                {componentDocs &&
                  componentDocs.composes &&
                  componentDocs.composes.length > 0 && (
                    <div className="PropTypesTable-composes">
                      <p>
                        <strong>This component composes </strong>
                        {componentDocs.composes.map(filePath => (
                          <code key={filePath}>
                            {filePath.slice(filePath.indexOf('/') + 1)}
                          </code>
                        ))}
                      </p>
                    </div>
                  )}
              </div>

              {componentDocs.props.map(prop => {
                const isArrayOf = this.isArrayOf(prop)
                // Figure out what makes sense here.
                return (
                  <PropTypeWrapper key={prop.name}>
                    <PropTypeHeading
                      name={prop.name}
                      required={prop.required}
                      defaultValue={prop.defaultValue}
                      type={prop.type || {}}
                      isArrayOf={isArrayOf}
                    />
                    {prop.docblock ? (
                      <PropTypeDescription>{prop.docblock}</PropTypeDescription>
                    ) : null}
                  </PropTypeWrapper>
                )
              })}
            </>
          )
        }}
      />
    )
  }
}
