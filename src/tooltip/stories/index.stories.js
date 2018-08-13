import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Tooltip } from '../../tooltip'
import { Text } from '../../typography'

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
    <Tooltip isShown={false} content="Should never see it">
      <Text marginLeft={40} display="inline-block" cursor="help">
        Disabled tooltip
      </Text>
    </Tooltip>
  </Box>
))
