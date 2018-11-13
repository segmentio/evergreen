import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { DatePicker } from '..'

storiesOf('date-picker', module).add('DatePicker', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <DatePicker value={new Date()} />
  </Box>
))
