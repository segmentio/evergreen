import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import Box from 'ui-box'
import { Heading } from '../../typography'
import { Switch } from '..'

storiesOf('switch', module).add('Switch', () => {
  const [testOneChecked, setTestOneChecked] = useState(false)
  const [testTwoChecked, setTestTwoChecked] = useState(false)

  return (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Box>
        <Heading>Default usage, height 16</Heading>
        <Switch
          marginBottom={24}
          checked={testOneChecked}
          onChange={event => setTestOneChecked(event.target.checked)}
        />
        <Switch marginBottom={24} disabled />
        <Switch marginBottom={24} disabled checked />
      </Box>
      <Box>
        <Heading>Custom height 20</Heading>
        <Switch
          height={20}
          marginBottom={24}
          checked={testTwoChecked}
          onChange={event => setTestTwoChecked(event.target.checked)}
        />
        <Switch height={20} marginBottom={24} disabled />
        <Switch height={20} marginBottom={24} disabled checked />
      </Box>
    </Box>
  )
})
