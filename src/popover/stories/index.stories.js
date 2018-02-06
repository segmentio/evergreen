import { storiesOf } from '@storybook/react'
import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Popover } from '../../popover'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import { Button } from '../../buttons'

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
    {({ isOpen, toggle, getRef, key }) => (
      <Button
        // You need a key because this element is technically rendered
        // in an array, this is an unavoidable implementation detail
        key={key}
        // You can use `isOpen` to set a properties
        // Use with caution, calculations are based on the width
        // as soon as you toggle it
        isActive={isOpen}
        // Use toggle to show/hide the popover
        onClick={toggle}
        // GetRef is used to get the ref of the element we need to run
        // getBoundingClientRect() on
        innerRef={ref => getRef(ref)}
        width={80}
      >
        {isOpen ? 'is open' : 'open'}
      </Button>
    )}
  </Popover>
)

storiesOf('popover', module).add('Popover', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Popover content={<PopoverContent />}>
      <Button marginRight={20}>Trigger Popover</Button>
    </Popover>
    <Popover content={({ close }) => <ClosablePopoverContent close={close} />}>
      <Button marginRight={20}>Trigger Closable Popover</Button>
    </Popover>
    <Popover
      useSmartPositioning={false}
      content={({ close }) => <ClosablePopoverContent close={close} />}
    >
      <Button marginRight={20}>Disable Smart Positioning</Button>
    </Popover>
    {controlUsage}
    <Popover content={<PopoverContent />}>
      <Button position="absolute" left={40} bottom={40} marginRight={20}>
        Use Smart Positioning
      </Button>
    </Popover>
  </Box>
))
