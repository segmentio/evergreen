import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import { DatePicker } from '..'
import format from 'date-fns/format'
import { Paragraph } from '../../typography'
import { Popover } from '../../popover'
import { TextInput } from '../../text-input'

storiesOf('date-picker', module).add('DatePicker', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}

    <Box display="flex">
      <Box width="50%">
        <Paragraph marginY={16}>Default date picker</Paragraph>
        <DatePicker value={new Date(2018, 7, 1)} onChange={console.log} />
      </Box>
      <Box width="50%">
        <Paragraph marginY={16}>Without Today button</Paragraph>
        <DatePicker
          value={new Date(2019, 6, 1)}
          shouldShowTodayButton={false}
        />
      </Box>
    </Box>

    <Paragraph marginY={16}>Use with a popover</Paragraph>
    <Component initialState={{ date: new Date() }}>
      {({ state, setState }) => (
        <Popover
          content={
            <DatePicker
              value={state.date}
              onChange={date => setState({ date })}
            />
          }
        >
          <TextInput
            value={format(state.date, 'DD/MM/YYYY')}
            placeholder="Pick a date"
            readOnly
          />
        </Popover>
      )}
    </Component>
  </Box>
))
