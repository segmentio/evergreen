import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Alert } from '../../alert'
import { Heading } from '../../typography'

storiesOf('alert', module).add('Alert', () => (
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
))
