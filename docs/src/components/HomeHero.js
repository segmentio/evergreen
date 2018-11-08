import React from 'react'
import { Link } from 'gatsby'
import { Button } from '../../../src'
import spotIllustration from '../images/evergreen-spot-illustration.png'
import GitHubIcon from './GitHubIcon'
import LogoWordmark from './LogoWordmark'

const NativeLink = ({ ...props }) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default class HomeHero extends React.PureComponent {
  render() {
    return (
      <section className="Hero">
        <div className="Hero-inner">
          <div className="Hero-left">
            <LogoWordmark style={{ marginBottom: 12 }} width={134} />
            <h1>A Design System for the Web</h1>
            <p>
              Evergreen is a React UI Framework for building ambitious products
              on the web. Brought to you by
              {` `}
              <NativeLink className="Link" href="https://segment.com/">
                Segment
              </NativeLink>
              .
            </p>
            <div>
              <Button
                is={Link}
                to="/components/"
                appearance="primary"
                height={40}
                marginRight={20}
              >
                Browse Components
              </Button>
              <Button
                is="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/segmentio/evergreen"
                iconBefore={
                  <GitHubIcon
                    width="16"
                    height="16"
                    style={{
                      marginRight: 10,
                      marginLeft: -2
                    }}
                  />
                }
                height={40}
              >
                GitHub
              </Button>
            </div>
          </div>
          <div className="Hero-right">
            <img
              src={spotIllustration}
              alt="Evergreen spot illustration"
              height="396"
            />
          </div>
        </div>
      </section>
    )
  }
}
