import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Positioner } from '../src/'

storiesOf('evergreen-positioner', module).add('Positioner', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Positioner />
  </Box>
))
