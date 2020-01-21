import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Heading, Paragraph } from '../../typography'
import { SearchInput } from '..'

const StoryHeader = props => <Box marginBottom={16} {...props} />
const StoryHeading = props => <Heading size={600} marginBottom={0} {...props} />
const StoryDescription = props => (
  <Paragraph size={400} color="muted" {...props} />
)
const StorySection = props => <Box marginBottom={40} {...props} />

storiesOf('search-input', module).add('SearchInput', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <StorySection>
      <StoryHeader>
        <StoryHeading>Default usage (height 36)</StoryHeading>
      </StoryHeader>
      <SearchInput placeholder="Filter traits..." />
    </StorySection>
    <StorySection>
      <StoryHeader>
        <StoryHeading>Height 40</StoryHeading>
      </StoryHeader>
      <SearchInput height={40} placeholder="Filter traits..." />
    </StorySection>
    <StorySection>
      <StoryHeader>
        <StoryHeading>Height 32</StoryHeading>
      </StoryHeader>
      <SearchInput height={32} placeholder="Filter traits..." />
    </StorySection>
    <StorySection>
      <StoryHeader>
        <StoryHeading>Height 32 and Width 100%</StoryHeading>
      </StoryHeader>
      <SearchInput height={32} width="100%" placeholder="Long Input" />
    </StorySection>
    <StorySection>
      <StoryHeader>
        <StoryHeading>Appearance: neutral</StoryHeading>
        <StoryDescription>
          Use this on top of a white background
        </StoryDescription>
      </StoryHeader>
      <SearchInput appearance="neutral" placeholder="Filter traits..." />
    </StorySection>
  </Box>
))
