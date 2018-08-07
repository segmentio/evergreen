import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { createTheme, ThemeProvider } from '../'

const theme = createTheme()

storiesOf('createTheme', module).add('example', () => (
  <ThemeProvider theme={theme}>
    <Box>createTheme</Box>
  </ThemeProvider>
))
