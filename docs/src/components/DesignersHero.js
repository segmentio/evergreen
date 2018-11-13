import React from 'react'
import { withPrefix } from 'gatsby'
import { Button } from '../../../src'
import spotIllustration from '../images/sketch-hero.png'
import sketchIcon from '../images/sketch-icon.png'

const NativeLink = ({ ...props }) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

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
              Design products and side-projects with our official design
              resource for the Evergreen community.
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
            <div style={{ marginTop: 24, marginBottom: -32 }}>
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                <img
                  alt="Creative Commons License"
                  style={{ borderWidth: 0 }}
                  height="15"
                  src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
                />
              </a>
              <p style={{ fontSize: 11 }}>
                <br />
                This work is licensed under a{' '}
                <NativeLink
                  className="Link"
                  rel="license"
                  href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                >
                  Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                  International License
                </NativeLink>
                .
              </p>
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
