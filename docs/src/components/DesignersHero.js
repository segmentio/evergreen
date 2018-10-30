import React from 'react'
import { withPrefix } from 'gatsby'
import { Button } from '../../../src'
import spotIllustration from '../images/sketch-hero.png'
import sketchIcon from '../images/sketch-icon.png'

export default class DesignersHero extends React.PureComponent {
  trackDownload = () => {
    window.analytics.track('Download Sketch File')
  }

  render() {
    return (
      <section className="Hero">
        <div className="Hero-inner">
          <div className="Hero-left">
            <h1>Evergreen for Designers</h1>
            <p>
              We are happy to share a subset of our official design resource
              with the Evergreen community.
            </p>
            <div>
              <Button
                is="a"
                onClick={this.trackDownload}
                href={withPrefix('/Evergreen v4 Community.sketch')}
                iconBefore={
                  <img
                    src={sketchIcon}
                    height="16"
                    style={{
                      marginRight: 10,
                      marginLeft: -2
                    }}
                  />
                }
                height={40}
              >
                Download Sketch UI Kit
              </Button>
            </div>
          </div>
          <div className="Hero-right" style={{ marginBottom: -80 }}>
            <img
              src={spotIllustration}
              alt="Evergreen spot illustration"
              style={{ width: 540 }}
            />
          </div>
        </div>
      </section>
    )
  }
}
