import React from 'react'
import { Heading, Paragraph, Pane, Button, useTheme, Badge } from '../../../src'
import GitHubIcon from './GitHubIcon'

const WhatsNewHero = () => {
  const theme = useTheme()

  const trackViewChangelog = () => {
    window.analytics.track('Clicked view Changelog')
  }

  return (
    <Pane
      is="section"
      className="Hero"
      backgroundColor={theme.palette.purple.light}
    >
      <div className="Hero-inner">
        <div className="Hero-left">
          <Badge size={400} color="purple">
            Updates
          </Badge>
          <Heading is="h1" size={900}>
            What&apos;s New in Evergreen
          </Heading>
          <Paragraph>
            Evergreen is a living system, which means we are constently making
            updates to it. You can learn more about those changes, and up coming
            ones here.
          </Paragraph>
          <div>
            <Button
              is="a"
              onClick={trackViewChangelog}
              href="https://github.com/segmentio/evergreen/releases"
              iconBefore={
                <GitHubIcon
                  width={16}
                  height={16}
                  style={{ marginRight: 10 }}
                />
              }
              height={40}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Changelog
            </Button>
          </div>
        </div>
      </div>
    </Pane>
  )
}

export default WhatsNewHero
