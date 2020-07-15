import { storiesOf } from '@storybook/react'
import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Tooltip } from '../../tooltip'
import { TextInputField } from '../../text-input'
import { Pane } from '../../layers'
import { Heading, Paragraph, Text } from '../../typography'
import { Button } from '../../buttons'
import { Position } from '../../constants'
import { CircleArrowDownIcon } from '../../icons'
import { Popover } from '..'

// eslint-disable-next-line react/prop-types
const PopoverContent = ({ height = 240 }) => (
  <Pane
    width={240}
    height={height}
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <Text>PopoverContent</Text>
  </Pane>
)

const PopoverContentWithTextInput = () => (
  <Pane
    width={320}
    height={200}
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <TextInputField label="Auto focus" autoFocus width="80%" />
  </Pane>
)

const ClosablePopoverContent = ({ close }) => (
  <Pane
    width={240}
    height={240}
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
    {({ isShown, toggle, getRef }) => (
      <Button
        // You can use `isShown` to set a properties
        // Use with caution, calculations are based on the width
        // as soon as you toggle it
        isActive={isShown}
        // Use toggle to show/hide the popover
        onClick={toggle}
        // GetRef is used to get the ref of the element we need to run
        // getBoundingClientRect() on
        ref={getRef}
      >
        {isShown ? 'is open' : 'open'}
      </Button>
    )}
  </Popover>
)

storiesOf('popover', module)
  .add('positions', () => (
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
        <Box marginTop={40} display="flex" justifyContent="space-between">
          <Popover content={<PopoverContent />} position={Position.LEFT}>
            <Button marginRight={20}>LEFT</Button>
          </Popover>
          <Popover content={<PopoverContent />} position={Position.RIGHT}>
            <Button marginRight={20}>RIGHT</Button>
          </Popover>
        </Box>
      </Box>
    </Box>
  ))
  .add('usages', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Popover content={<PopoverContent />}>
        <Button position="absolute" right={16} top={40} marginRight={20}>
          Trigger Popover
        </Button>
      </Popover>
      <Popover content={<PopoverContent />}>
        <Button marginRight={20}>Trigger Popover</Button>
      </Popover>
      <Popover
        content={({ close }) => <ClosablePopoverContent close={close} />}
      >
        <Button marginRight={20}>Trigger Closable Popover</Button>
      </Popover>
      <Popover content={<PopoverContent />} shouldCloseOnExternalClick={false}>
        <Button marginRight={20}>No Close on Body Click</Button>
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
      <Popover
        content={<PopoverContent height={999} />}
        position={Position.TOP_LEFT}
      >
        <Button position="absolute" left={40} top={80} marginRight={20}>
          Compensated for shooting past the bottom
        </Button>
      </Popover>
    </Box>
  ))
  .add('auto focus text input', () => (
    <Box padding={120}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Popover content={<PopoverContentWithTextInput />}>
        <Button marginRight={20}>Trigger Popover</Button>
      </Popover>
    </Box>
  ))
  .add('test jitter', () => (
    <Box padding={120}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Popover
        position={Position.BOTTOM_RIGHT}
        content={
          <Pane padding={12.3}>
            <Text>
              Lorem ipsum dolar set amet. Some content that keeps on going.
            </Text>
          </Pane>
        }
      >
        <Button right={40} position="absolute">
          Trigger Popover
        </Button>
      </Popover>
    </Box>
  ))
  .add('toggle button with children', () => (
    <Box padding={120}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Popover content={<PopoverContentWithTextInput />}>
        <Button marginRight={20}>
          <CircleArrowDownIcon />
        </Button>
      </Popover>
    </Box>
  ))
  .add('Popover with tooltip', () => (
    <Box padding={120}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Popover content={<PopoverContentWithTextInput />}>
        <Tooltip content="Click me">
          <Button marginRight={20}>Tooltip Card + Popover</Button>
        </Tooltip>
      </Popover>
      <Popover content={<PopoverContentWithTextInput />}>
        <Tooltip
          appearance="card"
          content={
            <React.Fragment>
              <Heading>Heading</Heading>
              <Paragraph color="muted" marginTop={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Paragraph>
            </React.Fragment>
          }
          statelessProps={{
            paddingY: 24,
            paddingX: 24,
            maxWidth: 280
          }}
        >
          <Button>Tooltip + Popover</Button>
        </Tooltip>
      </Popover>
    </Box>
  ))
