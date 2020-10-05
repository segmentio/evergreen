import loadable from '@loadable/component'
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import GitHubButton from 'react-github-button'
import { CommentIcon } from '../../../src'
import GitHubIcon from './GitHubIcon'
import LogoWordmark from './LogoWordmark'
// eslint-disable-next-line import/no-unassigned-import
import 'react-github-button/assets/style.css'

// ConsentManager uses a package `@segment/in-regions` that breaks SSR
// so we need to use `@loadable/component` as a shim
const ConsentManager = loadable(() => import('./ConsentManager'))

const TopBar = memo(({ children, ...props }) => {
  return (
    <div>
      <ConsentManager />
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
          <Link
            className="TopBar-link TopBar-link--icon"
            activeClassName="is-active"
            to="/whats-new"
          >
            <span>What&apos;s New</span>
          </Link>
        </nav>
        <div className="TopBar-navRight">
          <GitHubButton
            type="stargazers"
            namespace="segmentio"
            repo="evergreen"
          />
          <a
            className="TopBar-link TopBar-link--icon"
            href="https://github.com/segmentio/evergreen/discussions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-holder">
              <CommentIcon />
            </span>
            <span className="hide-on-mobile">Discussions</span>
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
    </div>
  )
})

TopBar.propTypes = {
  children: PropTypes.node
}

export default TopBar
