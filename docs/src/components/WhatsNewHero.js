import React from 'react'
import { Button } from '../../../src'
import GitHubIcon from './GitHubIcon'

const WhatsNewHero = () => {
  const trackViewChangelog = () => {
    window.analytics.track('Clicked view Changelog')
  }

  return (
    <section className="Hero">
      <div className="Hero-inner">
        <div className="Hero-left">
          <h1>What&apos;s New in Evergreen</h1>
          <p>
            Evergreen is a living system, which means we are constently making updates to it.
            You can learn more about those changes, and up coming ones here.
          </p>
          <div>
            <Button
              is="a"
              onClick={trackViewChangelog}
              href="https://github.com/segmentio/evergreen/releases"
              iconBefore={
                <GitHubIcon width={16} height={16} style={{ marginRight: 10 }} />
              }
              height={40}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Changelog
            </Button>
            <Button
              is="a"
              appearance="minimal"
              onClick={trackViewChangelog}
              href="https://github.com/segmentio/evergreen/releases"
              height={40}
              target="_blank"
              rel="noopener noreferrer"
              marginLeft={8}
            >
              View Roadmap
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsNewHero
