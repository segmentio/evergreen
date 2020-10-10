import { storiesOf } from '@storybook/react'
import React from 'react'
import Component from '@reactions/component'
import Box from 'ui-box'
import { SegmentedControl } from '../../segmented-control'
import { Image } from '../../image'
import { Stack } from '..'

storiesOf('stack', module).add('Stack', () => (
  <Box padding={40}>
    <Component
      initialState={{
        spaces: [
          { label: 'Space 8', value: 8 },
          { label: 'Space 24', value: 24 },
          { label: 'Space 48', value: 48 }
        ],
        alignements: [
          { label: 'Left', value: 'left' },
          { label: 'Center', value: 'center' },
          { label: 'right', value: 'right' }
        ],
        space: 32,
        align: 'left'
      }}
    >
      {({ state, setState }) => (
        <React.Fragment>
          <Stack space={24} marginBottom={24}>
            <SegmentedControl
              width={280}
              options={state.spaces}
              value={state.space}
              onChange={space => setState({ space: Number(space) })}
            />
            <SegmentedControl
              width={280}
              options={state.alignements}
              value={state.align}
              onChange={align => setState({ align })}
            />
          </Stack>
          <Stack space={state.space} align={state.align}>
            <Image src="https://picsum.photos/300/160" />
            <Image src="https://picsum.photos/200/160" />
            <Image src="https://picsum.photos/100/160" />
          </Stack>
        </React.Fragment>
      )}
    </Component>
  </Box>
))
