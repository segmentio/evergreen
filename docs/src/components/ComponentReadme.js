import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class ComponentReadme extends PureComponent {
  static propTypes = {
    packageJSON: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.any
  }

  render() {
    const { packageJSON, title, subTitle, children, ...props } = this.props

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
          <div className="Content">{children}</div>
        </div>
      </article>
    )
  }
}
