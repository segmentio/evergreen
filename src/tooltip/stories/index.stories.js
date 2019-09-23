import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Tooltip } from '..'
import { Text } from '../../typography'
import { Position } from '../../constants'
import { Button } from '../../buttons'

storiesOf('tooltip', module)
  .add('Tooltip', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Tooltip content="My tooltip content. Lorem ipsum dolar set amet.">
        <Text display="inline-block" cursor="help">
          Hover to trigger
        </Text>
      </Tooltip>
      <Tooltip content="My tooltip content">
        <Text marginLeft={40} display="inline-block" cursor="help">
          Hover to trigger
        </Text>
      </Tooltip>
      <Tooltip isShown={false} content="Should never see it">
        <Text marginLeft={40} display="inline-block" cursor="help">
          Disabled tooltip
        </Text>
      </Tooltip>
      <Tooltip showDelay={800} content="My delayed tooltip content">
        <Text marginLeft={40} display="inline-block" cursor="help">
          Delayed tooltip
        </Text>
      </Tooltip>
    </Box>
  ))
  .add('Positions', () => (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Box width={400} height={280}>
        <Box display="flex" justifyContent="space-between" marginBottom={40}>
          <Tooltip content="Hello world" position={Position.BOTTOM_LEFT}>
            <Button marginRight={20}>BOTTOM_LEFT</Button>
          </Tooltip>
          <Tooltip content="Hello world" position={Position.BOTTOM}>
            <Button marginRight={20}>BOTTOM</Button>
          </Tooltip>
          <Tooltip content="Hello world" position={Position.BOTTOM_RIGHT}>
            <Button marginRight={20}>BOTTOM_RIGHT</Button>
          </Tooltip>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Tooltip content="Hello world" position={Position.TOP_LEFT}>
            <Button marginRight={20}>TOP_LEFT</Button>
          </Tooltip>
          <Tooltip content="Hello world" position={Position.TOP}>
            <Button marginRight={20}>TOP</Button>
          </Tooltip>
          <Tooltip content="Hello world" position={Position.TOP_RIGHT}>
            <Button marginRight={20}>TOP_RIGHT</Button>
          </Tooltip>
        </Box>
        <Box marginTop={40} display="flex" justifyContent="space-between">
          <Tooltip content="Hello world" position={Position.LEFT}>
            <Button marginRight={20}>LEFT</Button>
          </Tooltip>
          <Tooltip content="Hello world" position={Position.RIGHT}>
            <Button marginRight={20}>RIGHT</Button>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  ))
