import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { Button } from '../../buttons'
import Position from '../../constants/src/Position'
import { Popover } from '../../popover'
import { minorScale } from '../../scales'
import { Link, Text } from '../../typography'
import { Nudge } from '../src/Nudge'
import { Pulsar } from '../src/Pulsar'

storiesOf('nudge', module)
  .add('Nudge', () => (
    <Box padding={40} display="flex" flexDirection="column" gap={32} alignItems="flex-start">
      <Nudge isShown={true} tooltipContent="Example tooltip content">
        <Box>Example Nudge Usage</Box>
      </Nudge>
      <Nudge isShown={true} tooltipContent="Top Left" position={Position.TOP_LEFT}>
        <Box>Example Nudge Usage</Box>
      </Nudge>
      <Nudge isShown={true} tooltipContent="Bottom Right" position={Position.BOTTOM_RIGHT}>
        <Box>Example Nudge Usage</Box>
      </Nudge>
      <Nudge isShown={true} tooltipContent="Bottom Left" position={Position.BOTTOM_LEFT}>
        <Box>Example Nudge Usage</Box>
      </Nudge>
      <Popover
        content={({ close }) => (
          <Box maxWidth={300} padding={minorScale(3)}>
            <Text>
              Bacon ipsum dolor amet rump porchetta strip steak, bresaola chuck boudin beef ribs short ribs buffalo
              meatball tenderloin tail. Porchetta cow buffalo pork loin jerky. Swine turkey boudin tri-tip corned beef
              bacon pig landjaeger alcatra.
            </Text>
            <Button display="block" marginTop={minorScale(2)} onClick={close}>
              Close
            </Button>
          </Box>
        )}
      >
        {({ getRef, isShown, toggle }) => (
          <Nudge
            isShown={!isShown}
            position={Position.BOTTOM_LEFT}
            tooltipContent="Click here for more info"
            onClick={e => {
              e.stopPropagation()
              toggle()
            }}
          >
            <Link cursor="pointer" onClick={toggle} ref={getRef}>
              Example Nudge Usage
            </Link>
          </Nudge>
        )}
      </Popover>
    </Box>
  ))
  .add('Pulsar', () => (
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
    </Box>
  ))
