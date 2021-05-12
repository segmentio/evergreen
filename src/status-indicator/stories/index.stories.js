import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { StatusIndicator } from '..'
import { Heading } from '../../typography'

const StoryHeader = props => <Box marginBottom={16} {...props} />
const StoryHeading = props => <Heading size={600} marginBottom={0} {...props} />

storiesOf('status-indicator', module).add('Status Indicator', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Box marginBottom={40} display="flex" flexDirection="column">
      <StoryHeader>
        <StoryHeading>Intent Colors</StoryHeading>
      </StoryHeader>
      <StatusIndicator color="success">Success</StatusIndicator>
      <StatusIndicator color="warning">Warning</StatusIndicator>
      <StatusIndicator color="danger">Danger</StatusIndicator>
      <StatusIndicator color="info">Info</StatusIndicator>
      <StatusIndicator>None</StatusIndicator>

      <StoryHeader marginTop={32}>
        <StoryHeading>State Colors</StoryHeading>
      </StoryHeader>
      <StatusIndicator color="default">Default</StatusIndicator>
      <StatusIndicator color="muted">Muted</StatusIndicator>
      <StatusIndicator color="dark">Dark</StatusIndicator>
      <StatusIndicator color="disabled">Disabled</StatusIndicator>
      <StatusIndicator color="selected">Selected</StatusIndicator>

      <StoryHeader marginTop={32}>
        <StoryHeading>Custom Color</StoryHeading>
      </StoryHeader>
      <StatusIndicator color="#ED55C2">#ED55C2</StatusIndicator>
    </Box>
  </Box>
))
