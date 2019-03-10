import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import { IconButton } from 'evergreen-ui'
import GitHubButton from 'react-github-button'
import startupBanner from '../images/startup-banner.png'
import GitHubIcon from './GitHubIcon'
import SpectrumIcon from './SpectrumIcon'
import LogoWordmark from './LogoWordmark'
// eslint-disable-next-line import/no-unassigned-import
import 'react-github-button/assets/style.css'

const NativeLink = ({ ...props }) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default class TopBar extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {}

  constructor() {
    super()

    this.state = {
      isBannerOpen: true
    }
  }

  handleBannerClose = () => {
    this.setState({
      isBannerOpen: false
    })
  }

  render() {
    const { children, ...props } = this.props
    const { isBannerOpen } = this.state

    return (
      <div
        className={'TopBar ' + (isBannerOpen ? '' : 'TopBar-reduced-height')}
        {...props}
      >
        <div
          className={isBannerOpen ? 'TopBar-banner-show' : 'TopBar-banner-hide'}
        >
          <NativeLink className="Link" href="https://segment.com/startups">
            <img
              src={startupBanner}
              alt="Segment Startup Program"
              width="100%"
              height="100%"
            />
          </NativeLink>
          <IconButton
            icon="cross"
            className="IconBtn-cross"
            onClick={this.handleBannerClose}
          />
        </div>
        <div className="TopBar-nav-container">
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
      </div>
    )
  }
}
