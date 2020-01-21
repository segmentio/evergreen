import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Heading } from '../../typography'
import { Switch } from '..'

storiesOf('switch', module).add('Switch', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Box>
      <Heading>Default usage, height 16</Heading>
      <Switch marginBottom={24} onChange={value => console.log(value)} />
      <Switch marginBottom={24} checked />
      <Switch marginBottom={24} disabled />
      <Switch marginBottom={24} disabled checked />
    </Box>
    <Box>
      <Heading>Custom height 20</Heading>
      <Switch
        height={20}
        marginBottom={24}
        onChange={value => console.log(value)}
      />
      <Switch height={20} marginBottom={24} checked />
      <Switch height={20} marginBottom={24} disabled />
      <Switch height={20} marginBottom={24} disabled checked />
    </Box>
  </Box>
))
