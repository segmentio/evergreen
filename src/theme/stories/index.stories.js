import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { createTheme, ThemeProvider } from '../'
import { Button } from '../../buttons'
import { Alert } from '../../alert'

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
    <Box padding={40}>
      {['default', 'card'].map(appearance => (
        <Box key={appearance} float="left" marginRight={40}>
          <Alert
            appearance={appearance}
            marginBottom={32}
            title="A simple general message"
          />
          <Alert
            appearance={appearance}
            marginBottom={32}
            intent="success"
            title="Hooray! You did it. Your Source is now sending data."
          />
          <Alert
            appearance={appearance}
            marginBottom={32}
            intent="warning"
            title="Changes will affect all Warehouses."
          />
          <Alert
            appearance={appearance}
            marginBottom={32}
            intent="danger"
            title="We weren’t able to save your changes."
          />
        </Box>
      ))}
    </Box>
  </ThemeProvider>
))
