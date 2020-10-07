import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { InlineAlert, Alert, Button, majorScale, Paragraph } from '../..'
import { Heading } from '../../typography'

/* eslint-disable react/prop-types */
const ErrorMessage = ({ cta, messaging, title }) => (
  <Alert appearance="card" intent="danger" title={title}>
    <Paragraph>{messaging}</Paragraph>
    {cta && (
      <Button appearance="primary" marginTop={majorScale(1)} onClick={() => {}}>
        {cta}
      </Button>
    )}
  </Alert>
)
/* eslint-enable react/prop-types */

storiesOf('alert', module)
  .add('Alert', () => (
    <div>
      <Box padding={40}>
        {(() => {
          document.body.style.margin = '0'
          document.body.style.height = '100vh'
        })()}
        {['default', 'card'].map(appearance => (
          <Box key={appearance}>
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
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="danger"
            >
              This Alert has no title
            </Alert>
            <ErrorMessage
              title="This is broken"
              messaging="You need to fix this"
              cta="Try again"
            />
          </Box>
        ))}
      </Box>
      <Box padding={40}>
        {['default'].map(appearance => (
          <Box key={appearance}>
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

      <Box>
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
