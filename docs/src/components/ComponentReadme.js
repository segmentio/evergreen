import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ComponentBlock from './ComponentBlock'
import AppearanceOption from './AppearanceOption'
import PlaygroundExampleGroup from './PlaygroundExampleGroup'
import PlaygroundExample from './PlaygroundExample'

export default class ComponentReadme extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    introduction: PropTypes.node,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    designGuidelines: PropTypes.node,
    implementationDetails: PropTypes.node,
    appearanceOptions: PropTypes.array,
    examples: PropTypes.array,
    components: PropTypes.array,
    customExample: PropTypes.node
  }

  render() {
    const {
      name,
      title,
      subTitle,
      designGuidelines,
      examples,
      introduction,
      implementationDetails,
      appearanceOptions,
      components,
      customExample,
      ...props
    } = this.props

    return (
      <article className="ComponentReadme" {...props}>
        <div className="Container ComponentReadme-inner">
          <header className="ComponentReadme-header">
            <h1 className="ComponentReadme-title">{title} </h1>
            <p className="ComponentReadme-subtitle">
              {subTitle}{' '}
              <a
                className="ComponentReadme-githubLink"
                href={`https://github.com/segmentio/evergreen/tree/master/src/${name.toLowerCase()}`}
                target="_blank"
              >
                View on GitHub
              </a>.
            </p>
          </header>
          <div>
            {introduction && (
              <div className="Content">
                <h2 id="introduction">Introduction</h2>
                {introduction}
              </div>
            )}
            {designGuidelines && (
              <div className="Content">
                <h2 id="design-guidelines">Design Guidelines</h2>
                {designGuidelines}
              </div>
            )}
            {implementationDetails && (
              <div className="Content">
                <h2 id="implementation-details">Implementation Details</h2>
                {implementationDetails}
              </div>
            )}
            {customExample && customExample}
            {appearanceOptions && (
              <div>
                <div className="Content">
                  <h2 id="appearance-options">Appearance Options</h2>
                </div>
                <div>
                  {appearanceOptions.map(option => {
                    return (
                      <AppearanceOption
                        key={option.title}
                        title={option.title}
                        component={option.component}
                      >
                        {option.description}
                      </AppearanceOption>
                    )
                  })}
                </div>
              </div>
            )}
            {examples && (
              <div>
                <div className="Content">
                  <h2 id="examples">Examples</h2>
                </div>

                <PlaygroundExampleGroup>
                  {examples.map(example => {
                    return (
                      <PlaygroundExample
                        key={example.title}
                        title={example.title}
                        description={example.description}
                        codeText={example.codeText}
                        scope={example.scope}
                      />
                    )
                  })}
                </PlaygroundExampleGroup>
              </div>
            )}
            {components && (
              <div>
                <div className="Content">
                  <h2 id="component-examples">Component Examples</h2>
                  <p>
                    The following components are exported by Evergreen for this
                    UI pattern:
                  </p>
                  <ul>
                    {components.map(component => {
                      return (
                        <li key={component.name}>
                          <code>{component.name}</code>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                {components.map(component => (
                  <ComponentBlock
                    key={component.name}
                    name={component.name}
                    description={component.description}
                    examples={component.examples}
                    source={component.source}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    )
  }
}
