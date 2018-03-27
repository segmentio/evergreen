import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import { SegmentedControl } from '../../segmented-control'

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
      {({ state, setState }) => (
        <SegmentedControl
          width={240}
          options={state.options}
          value={state.value}
          onChange={value => setState({ value })}
        />
      )}
    </Component>
    <Component
      initialState={{
        options: [{ label: 'On', value: 'on' }, { label: 'Off', value: 'off' }],
        value: 'on'
      }}
    >
      {({ state, setState }) => (
        <SegmentedControl
          marginTop={24}
          width={80}
          height={24}
          options={state.options}
          value={state.value}
          onChange={value => setState({ value })}
        />
      )}
    </Component>
  </Box>
))
