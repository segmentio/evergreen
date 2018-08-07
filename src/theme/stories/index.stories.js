import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { createTheme, ThemeProvider } from '../'
import { Button } from '../../buttons'

const theme = createTheme({})

storiesOf('createTheme', module).add('example', () => (
  <ThemeProvider value={theme}>
    <Box>
      <Button>Default</Button>
      <Button appearance="primary" intent="danger">
        Default
      </Button>
    </Box>
  </ThemeProvider>
))
