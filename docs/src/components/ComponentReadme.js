import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class ComponentReadme extends PureComponent {
  static propTypes = {
    packageJSON: PropTypes.object,
    name: PropTypes.string,
    designGuidelines: PropTypes.node
  }

  constructor(props, context) {
    super(props, context)

    this.state = {}
  }

  render() {
    const { children, packageJSON, designGuidelines, ...props } = this.props
    console.log(packageJSON)
    return (
      <article className="ComponentReadme" {...props}>
        <div className="ComponentReadme-inner">
          <header className="ComponentReadme-header">
            <h1 className="ComponentReadme-title">Buttons</h1>
            <p className="ComponentReadme-subtitle">
              This package exports a <code>Button</code> and a{' '}
              <code>IconButton</code> component
            </p>
            <nav className="ComponentReadme-nav">
              <a href="#" aria-selected="true">
                Design Guidelines
              </a>
              <a href="#">Code & Examples</a>
            </nav>
          </header>
          <div>{React.createElement(designGuidelines)}</div>
        </div>
      </article>
    )
  }
}
