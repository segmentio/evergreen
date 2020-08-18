import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Heading } from '../../typography'
import { StatusIndicator } from '..'

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
        <StoryHeading>Status Indicator</StoryHeading>
      </StoryHeader>
      <StatusIndicator intent="success">Success</StatusIndicator>
      <StatusIndicator intent="warning">Warning</StatusIndicator>
      <StatusIndicator intent="danger">Danger</StatusIndicator>
      <StatusIndicator>Info</StatusIndicator>
      <StatusIndicator disabled>Disabled</StatusIndicator>
    </Box>
  </Box>
))
