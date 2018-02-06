import React from 'react'
import Link from 'gatsby-link'
import { Button } from '../../../src'
import TopBar from '../components/TopBar'

const NativeLink = ({ ...props }) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default () => {
  return (
    <div className="MainLayout">
      <TopBar />
      <main className="MainLayout-main">
        <div className="MainLayout-content">
          <section className="Home">
            <div className="Home-inner">
              <h1>
                Evergreen is a pragmatic UI kit<br /> for building
                evolving&nbsp;products on&nbsp;the&nbsp;web.
              </h1>
              <p>
                It is build and maintained open&#8209;source&nbsp;by&nbsp;
                <NativeLink className="Link" href="https://segment.com/">
                  Segment
                </NativeLink>.
              </p>
              <div>
                <Button
                  is={Link}
                  to="/get-started/introduction"
                  appearance="green"
                  height={40}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
