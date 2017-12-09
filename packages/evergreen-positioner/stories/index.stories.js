import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import React from 'react'
import Box from 'ui-box'
// Import { Positioner } from '../src/'

storiesOf('positioner', module).add('Positioner', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Box>See popover or tooltip story for now.</Box>
  </Box>
))
