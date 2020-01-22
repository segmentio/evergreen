import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Heading } from '../../typography'
import { InlineAlert, Alert } from '..'

storiesOf('alert', module)
  .add('Alert', () => (
    <div>
      <Box padding={40}>
        {(() => {
          document.body.style.margin = '0'
          document.body.style.height = '100vh'
        })()}
        {['default', 'card'].map(appearance => (
          <Box key={appearance} float="left" marginRight={40}>
            <Heading marginBottom={16}>{appearance}</Heading>
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
        <InlineAlert intent="success" marginBottom={16}>
          Hooray! You did it. Your Source is now sending data.
        </InlineAlert>
        <InlineAlert intent="warning" marginBottom={16}>
          Changes will affect all Warehouses.
        </InlineAlert>
        <InlineAlert intent="danger" marginBottom={16}>
          We weren’t able to save your changes.
        </InlineAlert>
        <InlineAlert intent="none" marginBottom={16}>
          There are over 200 integrations available.
        </InlineAlert>
      </Box>
    </Box>
  ))
