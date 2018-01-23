import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ComponentBlock from './ComponentBlock'
import AppearanceOption from './ApppearanceOption'

export default class ComponentReadme extends PureComponent {
  static propTypes = {
    packageJSON: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    designGuidelines: PropTypes.node,
    appearanceOptions: PropTypes.array,
    components: PropTypes.array
  }

  render() {
    const {
      packageJSON,
      title,
      subTitle,
      designGuidelines,
      appearanceOptions,
      components,
      ...props
    } = this.props

    return (
      <article className="ComponentReadme" {...props}>
        <div className="Container ComponentReadme-inner">
          <header className="ComponentReadme-header">
            <h1 className="ComponentReadme-title">{title}</h1>
            <p className="ComponentReadme-subtitle">{subTitle}</p>
            <dl>
              <dt>Install</dt>
              <dd>
                <code className="">yarn add {packageJSON.name}</code>
              </dd>
              <dt>Version</dt>
              <dd>
                <code className="">{packageJSON.version}</code>
              </dd>
              <dt>Links</dt>
              <dd>
                <a
                  href={`https://github.com/segmentio/evergreen/tree/master/packages/${
                    packageJSON.name
                  }`}
                  target="_blank"
                >
                  GitHub
                </a>
                {` `}&middot;{` `}
                <a
                  href={`https://www.npmjs.com/package/${packageJSON.name}`}
                  target="_blank"
                >
                  npm
                </a>
              </dd>
            </dl>
          </header>
          <div>
            {designGuidelines && (
              <div className="Content">
                <h2 id="design-guidelines">Design Guidelines</h2>
                {designGuidelines}
              </div>
            )}
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
            {components && (
              <div>
                <div className="Content">
                  <h2 id="code-and-examples">Code & Examples</h2>
                  <p>
                    The <code>{packageJSON.name}</code> package exports the
                    following documented components:
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
