import { storiesOf } from '@storybook/react'
import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Popover } from '../../popover'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import { Button } from '../../buttons'
import { Position } from '../../positioner'

const PopoverContent = () => (
  <Pane
    width="240px"
    height="240px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <Text>PopoverContent</Text>
  </Pane>
)

const ClosablePopoverContent = ({ close }) => (
  <Pane
    width="240px"
    height="240px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <Text>ClosablePopoverContent</Text>
    <Button onClick={close}>Close</Button>
  </Pane>
)

ClosablePopoverContent.propTypes = {
  close: PropTypes.func
}

// Using it with a function for complete control
const controlUsage = (
  <Popover
    content={({ close }) => <ClosablePopoverContent close={close} />}
    display="inline-block"
  >
    {({ isOpen, toggle, getRef }) => (
      <Button
        // You can use `isOpen` to set a properties
        // Use with caution, calculations are based on the width
        // as soon as you toggle it
        isActive={isOpen}
        // Use toggle to show/hide the popover
        onClick={toggle}
        // GetRef is used to get the ref of the element we need to run
        // getBoundingClientRect() on
        innerRef={ref => getRef(ref)}
      >
        {isOpen ? 'is open' : 'open'}
      </Button>
    )}
  </Popover>
)

storiesOf('popover', module)
  .add('Popover', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Popover content={<PopoverContent />}>
        <Button marginRight={20}>Trigger Popover</Button>
      </Popover>
      <Popover
        content={({ close }) => <ClosablePopoverContent close={close} />}
      >
        <Button marginRight={20}>Trigger Closable Popover</Button>
      </Popover>
      <Popover
        useSmartPositioning={false}
        content={({ close }) => <ClosablePopoverContent close={close} />}
      >
        <Button marginRight={20}>Disable Smart Positioning</Button>
      </Popover>
      <Pane overflowY="scroll" height={400} appearance="tint3">
        <Box height={800} paddingTop={200}>
          <Popover
            position={Position.BOTTOM_LEFT}
            content={({ close }) => <ClosablePopoverContent close={close} />}
          >
            <Button marginRight={20}>Inside Scrolling Container</Button>
          </Popover>
        </Box>
      </Pane>
      {controlUsage}
      <Popover content={<PopoverContent />}>
        <Button position="absolute" left={40} bottom={40} marginRight={20}>
          Use Smart Positioning
        </Button>
      </Popover>
    </Box>
  ))
  .add('Positioning Sides', () => (
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
          <Popover content={<PopoverContent />} position={Position.BOTTOM_LEFT}>
            <Button marginRight={20}>BOTTOM_LEFT</Button>
          </Popover>
          <Popover content={<PopoverContent />} position={Position.BOTTOM}>
            <Button marginRight={20}>BOTTOM</Button>
          </Popover>
          <Popover
            content={<PopoverContent />}
            position={Position.BOTTOM_RIGHT}
          >
            <Button marginRight={20}>BOTTOM_RIGHT</Button>
          </Popover>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Popover content={<PopoverContent />} position={Position.TOP_LEFT}>
            <Button marginRight={20}>TOP_LEFT</Button>
          </Popover>
          <Popover content={<PopoverContent />} position={Position.TOP}>
            <Button marginRight={20}>TOP</Button>
          </Popover>
          <Popover content={<PopoverContent />} position={Position.TOP_RIGHT}>
            <Button marginRight={20}>TOP_RIGHT</Button>
          </Popover>
        </Box>
      </Box>
    </Box>
  ))
