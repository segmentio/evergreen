import React from 'react'
import Component from '@reactions/component'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { SegmentedControl } from '..'

storiesOf('segmented-control', module).add('SegmentedControl', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Component
      initialState={{
        options: [
          { label: 'Hourly', value: 'hourly' },
          { label: 'Daily', value: 'daily' },
          { label: 'Monthly', value: 'monthly' }
        ],
        value: 'hourly'
      }}
    >
      {({ setState, state }) => (
        <SegmentedControl
          name="time"
          width={240}
          options={state.options}
          value={state.value}
          onChange={value => setState({ value })}
        />
      )}
    </Component>
    <Component
      initialState={{
        options: [
          { label: 'On', value: true },
          { label: 'Off', value: false }
        ],
        value: true
      }}
    >
      {({ setState, state }) => (
        <SegmentedControl
          name="switch"
          marginTop={24}
          width={80}
          height={24}
          options={state.options}
          value={state.value}
          onChange={value => {
            setState({ value })
          }}
        />
      )}
    </Component>
    <SegmentedControl
      marginTop={24}
      width={80}
      height={24}
      options={[
        { label: 'On', value: true },
        { label: 'Off', value: false }
      ]}
      defaultValue={false}
    />
  </Box>
))
