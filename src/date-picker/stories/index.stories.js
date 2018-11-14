import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { DatePicker } from '..'
import { Paragraph } from '../../typography'

storiesOf('date-picker', module).add('DatePicker', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Paragraph marginY={16}>Default date picker</Paragraph>
    <DatePicker value={new Date()} />

    <Paragraph marginY={16}>Without Today button</Paragraph>
    <DatePicker value={new Date()} shouldShowTodayButton={false} />
  </Box>
))
