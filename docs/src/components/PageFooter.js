import React from 'react'
import { openConsentManager } from '@segment/consent-manager'
import SegmentLogoWordmark from './SegmentLogoWordmark'

const NativeLink = props => (
  <a target="_blank" rel="noopener noreferrer" {...props} />
)

export default class PageFooter extends React.PureComponent {
  render() {
    return (
      <footer className="PageFooter bg-dark clearfix">
        <div className="Container PageFooter-inner">
          <div className="PageFooter-left">
            <SegmentLogoWordmark white width={100} height="auto" />
          </div>
          <div className="PageFooter-right">
            <p>
              Evergreen is an open source project developed at Segment.{' '}
              <NativeLink
                href="https://segment.com/jobs/"
                className="focus-ring-link-white"
              >
                We’re hiring designers and engineers!
              </NativeLink>
            </p>
          </div>
        </div>
        <div className="Container PageFooter-inner">
          <div className="PageFooter-left">
            <button type="button" onClick={openConsentManager}>
              Website Data Collection Preferences
            </button>
          </div>

          <div className="PageFooter-right">
            <p>© {new Date().getFullYear()}, Segment.io, Inc.</p>
          </div>
        </div>
      </footer>
    )
  }
}
