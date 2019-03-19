import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { InlineAlert, Alert } from '..'
import { Heading } from '../../typography'

const config = [
  {
    options: 'Info',
    intent: 'none',
    title: 'There are over 200 integrations available'
  },
  {
    options: 'Success',
    intent: 'success',
    title: 'Hooray! You did it. Your Source is now sending data.'
  },
  {
    options: 'Warning',
    intent: 'warning',
    title: 'Changes will affect all Warehouses.'
  },
  {
    options: 'Danger',
    intent: 'danger',
    title: 'HWe weren’t able to save your changes.'
  }
]

storiesOf('Components|Feedback Indicators/Alert', module)
  .add('Alert', () => (
    <div>
      <Box padding={40}>
        {(() => {
          document.body.style.margin = '0'
          document.body.style.height = '100vh'
        })()}
        <Box float="left" marginRight={40}>
          <Heading marginBottom={16}>Alert</Heading>
          {config.map(alert => (
            <Alert
              key={alert.intent}
              intent={alert.intent}
              title={alert.title}
              marginBottom={32}
            />
          ))}
        </Box>
        <Box float="left" marginRight={40}>
          <Heading marginBottom={16}>Alerts with description</Heading>
          {config.map(alert => (
            <Alert
              key={alert.intent}
              intent={alert.intent}
              title={alert.title}
              marginBottom={32}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Alert>
          ))}
        </Box>
      </Box>
      <Box padding={40}>
        {['default', 'card'].map(appearance => (
          <Box key={appearance} float="left" marginRight={40}>
            <Heading marginBottom={16}>{appearance}</Heading>
            <Alert
              appearance={appearance}
              marginBottom={32}
              title="A simple general message"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Alert>
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="success"
              title="Hooray! You did it. Your Source is now sending data."
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Alert>
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="warning"
              title="Changes will affect all Warehouses."
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Alert>
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="danger"
              title="We weren’t able to save your changes."
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Alert>
          </Box>
        ))}
      </Box>
    </div>
  ))
  .add('InlineAlert', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Box float="left" marginRight={40}>
        <Heading size={600} marginBottom={16}>
          InlineAlert component
        </Heading>
        {config.map(alert => (
          <InlineAlert
            key={alert.intent}
            intent={alert.intent}
            marginBottom={16}
          >
            {alert.title}
          </InlineAlert>
        ))}
      </Box>
    </Box>
  ))
