import React from 'react'
import PropTypes from 'prop-types'

class Feature extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="Feature">
        <h2 className="h3 Feature-title">{this.props.title}</h2>
        <p className="Feature-description">{this.props.children}</p>
      </div>
    )
  }
}

export default class Features extends React.PureComponent {
  render() {
    return (
      <section className="Features bg-green color-white clearfix">
        <div className="Container Features-grid">
          <Feature title="Works out of the box">
            Evergreen contains a set of polished React components that work out
            of the box.
          </Feature>
          <Feature title="Flexible & composable">
            Evergreen components are built on top of a React UI Primitive for
            endless composability.
          </Feature>
          <Feature title="Enterprise-grade">
            Evergreen features a UI design language for enterprise-grade web
            applications.
          </Feature>
        </div>
      </section>
    )
  }
}
