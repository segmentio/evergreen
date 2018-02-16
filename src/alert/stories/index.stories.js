import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { InlineAlert, Alert } from '../../alert'
import { Heading } from '../../typography'

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
              type="success"
              title="Hooray! You did it. Your Source is now sending data."
            />
            <Alert
              appearance={appearance}
              marginBottom={32}
              type="warning"
              title="Changes will affect all Warehouses."
            />
            <Alert
              appearance={appearance}
              marginBottom={32}
              type="danger"
              title="We weren’t able to save your changes."
            />
            <Alert
              appearance={appearance}
              marginBottom={32}
              type="question"
              title="There are over 180 integrations available."
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
              type="success"
              title="Hooray! You did it. Your Source is now sending data."
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Alert>
            <Alert
              appearance={appearance}
              marginBottom={32}
              type="warning"
              title="Changes will affect all Warehouses."
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Alert>
            <Alert
              appearance={appearance}
              marginBottom={32}
              type="danger"
              title="We weren’t able to save your changes."
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Alert>
            <Alert
              appearance={appearance}
              marginBottom={32}
              type="question"
              title="There are over 180 integrations available."
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
        <InlineAlert type="success" marginBottom={16}>
          Hooray! You did it. Your Source is now sending data.
        </InlineAlert>
        <InlineAlert type="warning" marginBottom={16}>
          Changes will affect all Warehouses.
        </InlineAlert>
        <InlineAlert type="danger" marginBottom={16}>
          We weren’t able to save your changes.
        </InlineAlert>
        <InlineAlert type="question" marginBottom={16}>
          There are over 200 integrations available.
        </InlineAlert>
      </Box>
    </Box>
  ))
