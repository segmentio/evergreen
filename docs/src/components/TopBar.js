import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import logo from '../images/evergreen-logo-wordmark.svg'
import logoStandalone from '../images/evergreen-logo-icon.svg'

export default class TopBar extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {}

  render() {
    const { children, ...props } = this.props
    return (
      <div className="TopBar" {...props}>
        <Link to="/">
          <picture>
            <source srcSet={logo} media="(min-width: 520px)" />
            <img src={logoStandalone} alt="Evergreen" style={{ height: 24 }} />
          </picture>
        </Link>
        <nav className="TopBar-nav">
          <Link
            to="/get-started/introduction"
            className="TopBar-link"
            activeClassName="is-active"
          >
            Get Started
          </Link>
          <Link
            className="TopBar-link"
            activeClassName="is-active"
            to="/components/buttons"
          >
            Components
          </Link>
        </nav>
        <div className="TopBar-navRight">
          <a
            className="TopBar-link TopBar-link--icon"
            href="https://github.com/segmentio/evergreen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-holder">
              <svg
                fill="currentColor"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 40 40"
                width="100%"
                height="100%"
              >
                <g>
                  <path d="m20 0c-11 0-20 9-20 20 0 8.8 5.7 16.3 13.7 19 1 0.2 1.3-0.5 1.3-1 0-0.5 0-2 0-3.7-5.5 1.2-6.7-2.4-6.7-2.4-0.9-2.3-2.2-2.9-2.2-2.9-1.9-1.2 0.1-1.2 0.1-1.2 2 0.1 3.1 2.1 3.1 2.1 1.7 3 4.6 2.1 5.8 1.6 0.2-1.3 0.7-2.2 1.3-2.7-4.5-0.5-9.2-2.2-9.2-9.8 0-2.2 0.8-4 2.1-5.4-0.2-0.5-0.9-2.6 0.2-5.3 0 0 1.7-0.5 5.5 2 1.6-0.4 3.3-0.6 5-0.6 1.7 0 3.4 0.2 5 0.7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8 0.4 4.8 0.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0 7.6-4.7 9.3-9.2 9.8 0.7 0.6 1.4 1.9 1.4 3.7 0 2.7 0 4.9 0 5.5 0 0.6 0.3 1.2 1.3 1 8-2.7 13.7-10.2 13.7-19 0-11-9-20-20-20z" />
                </g>
              </svg>
            </span>
            <span className="hide-on-mobile">GitHub</span>
          </a>
        </div>
      </div>
    )
  }
}
