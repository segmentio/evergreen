import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import React from 'react'
import Box from 'ui-box'
import { Text } from 'evergreen-typography'
import { Tooltip } from '../src/'

storiesOf('tooltip', module).add('Tooltip', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Tooltip content="My tooltip content. Lorem ipsum dolar set amet.">
      <Text display="inline-block" cursor="help">
        Hover to trigger
      </Text>
    </Tooltip>
    <Tooltip content="My tooltip content">
      <Text marginLeft={40} display="inline-block" cursor="help">
        Hover to trigger
      </Text>
    </Tooltip>
  </Box>
))
