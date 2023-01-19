import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import Position from '../../constants/src/Position'
import Tooltip from '../../tooltip/src/Tooltip'
import { Pulsar } from '../src/Pulsar'

storiesOf('pulsar', module).add('Pulsar', () => (
  <Box padding={40} display="flex" flexDirection="column" gap={32} alignItems="flex-start">
    <Box position="relative" display="inline-block">
      <Box>Pulsar</Box>
      <Pulsar />
    </Box>
    <Box position="relative" display="inline-block">
      <Box>Pulsar Top Left</Box>
      <Pulsar position={Position.TOP_LEFT} />
    </Box>
    <Box position="relative" display="inline-block">
      <Box>Pulsar Bottom Right</Box>
      <Pulsar position={Position.BOTTOM_RIGHT} />
    </Box>
    <Box position="relative" display="inline-block">
      <Box>Pulsar Bottom Left</Box>
      <Pulsar position={Position.BOTTOM_LEFT} />
    </Box>
    <Box position="relative" display="inline-block">
      <Box>Pulsar Custom Size</Box>
      <Pulsar size={21} />
    </Box>
    <Box position="relative" display="inline-block">
      <Box>Pulsar Custom Size</Box>
      <Pulsar size={4} />
    </Box>
    <Box position="relative">
      <Box>Pulsar with Tooltip</Box>
      <Tooltip content="Hello world">
        <Pulsar />
      </Tooltip>
    </Box>
  </Box>
))
