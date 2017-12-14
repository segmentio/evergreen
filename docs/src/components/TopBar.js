import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import logo from '../images/evergreen-logo-wordmark.svg'

export default class TopBar extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {}

  constructor(props, context) {
    super(props, context)

    this.state = {}
  }

  render() {
    const { children, ...props } = this.props
    return (
      <div className="TopBar" {...props}>
        <img src={logo} alt="Evergreen" style={{ height: 24 }} />
        <nav className="TopBar-nav">
          <Link>Get Started</Link>
          <Link>Components</Link>
        </nav>
        {children}
      </div>
    )
  }
}
