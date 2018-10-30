import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import GitHubButton from 'react-github-button'
import GitHubIcon from './GitHubIcon'
import SpectrumIcon from './SpectrumIcon'
import LogoWordmark from './LogoWordmark'
// eslint-disable-next-line import/no-unassigned-import
import 'react-github-button/assets/style.css'

export default class TopBar extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {}

  render() {
    const { children, ...props } = this.props
    return (
      <div className="TopBar" {...props}>
        <Link to="/" className="focus-ring-link">
          <LogoWordmark width={115} />
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
            to="/components"
          >
            Components
          </Link>
          <Link
            className="TopBar-link TopBar-link--icon"
            activeClassName="is-active"
            to="/for-designers"
          >
            <span>For Designers</span>
          </Link>
        </nav>
        <div className="TopBar-navRight">
          <GitHubButton
            type="stargazers"
            size="default"
            namespace="segmentio"
            repo="evergreen"
          />
          <a
            className="TopBar-link TopBar-link--icon"
            href="https://spectrum.chat/evergreen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-holder">
              <SpectrumIcon />
            </span>
            <span className="hide-on-mobile">Spectrum</span>
          </a>
          <a
            className="TopBar-link TopBar-link--icon"
            href="https://github.com/segmentio/evergreen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-holder">
              <GitHubIcon />
            </span>
            <span className="hide-on-mobile">GitHub</span>
          </a>
        </div>
      </div>
    )
  }
}
