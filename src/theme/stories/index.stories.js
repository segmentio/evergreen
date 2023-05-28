import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { ThemeProvider } from '..'
import { Button } from '../../buttons'
import { TextInput } from '../../text-input'
import { Textarea } from '../../textarea'
import defaultTheme from '../../themes/default'
import { Heading } from '../../typography'

const themeStory = storiesOf('theme', module)

themeStory.add('Theming components', () => (
  <Box padding={40}>
    <ThemeProvider value={defaultTheme}>
      <Heading>Text Inputs</Heading>
      <TextInput placeholder="Enter something..." marginY={24} />
      <Textarea placeholder="Enter something else..." marginY={24} />
      <Heading>Default Appearance</Heading>
      <Box marginTop={12}>
        <Button appearance="primary" marginRight={16}>
          Primary
        </Button>
        <Button marginRight={16} intent="success">
          Default
        </Button>
        <Button appearance="destructive" marginRight={16} intent="danger">
          Destructive
        </Button>
        <Button appearance="minimal" marginRight={16} intent="warning">
          Minimal
        </Button>
      </Box>
      <Heading marginTop={24}>Disabled Appearance</Heading>
      <Box marginTop={12}>
        <Button disabled appearance="primary" marginRight={16}>
          Primary
        </Button>
        <Button disabled marginRight={16} intent="success">
          Default
        </Button>
        <Button disabled appearance="destructive" marginRight={16} intent="danger">
          Destructive
        </Button>
        <Button disabled appearance="minimal" marginRight={16} intent="warning">
          Minimal
        </Button>
      </Box>
    </ThemeProvider>
  </Box>
))
