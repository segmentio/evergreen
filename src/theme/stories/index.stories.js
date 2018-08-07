import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { createTheme, ThemeProvider } from '../'
import { Button } from '../../buttons'

const theme = createTheme({})

storiesOf('createTheme', module).add('example', () => (
  <ThemeProvider value={theme}>
    <Box>
      <Button marginRight={12} appearance="primary">
        Default
      </Button>
      <Button marginRight={12} appearance="primary" intent="success">
        Success
      </Button>
      <Button marginRight={12} appearance="primary" intent="warning">
        Warning
      </Button>
      <Button marginRight={12} appearance="primary" intent="danger">
        Warning
      </Button>
    </Box>
  </ThemeProvider>
))
