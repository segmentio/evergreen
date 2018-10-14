# Popover

`evergreen-popover` is a package exporting a `Popover` React component.
Popovers display floating content in relation to a target.
Popovers appear either at the top or bottom of their target.
The preferred and default side is the bottom.
Popovers use smart positioning if there is not enough space on the bottom.

## Key points

- Uses `Positioner` from `evergreen-positioner`
- Tooltips use `onMouseLeave` and `onMouseEnter` to show and hide the tooltip

### When creating a popover, you must specify both:

- its content, by setting the content prop, and
- its target, as a single child element or a function

When you pass a function to the content prop you will be able to close the popover inside of the content.

### Popovers close on:

- outside click
- escape key
- window resize
- something in content that calls the close function

## Design Example

The Card that is rendered is a `<Card elevation={3} />`.

![Popover example](https://user-images.githubusercontent.com/564463/31321453-2f0d15ce-ac3b-11e7-81a3-0471242bc76f.png)

## Prop types and default props

```js
static propTypes = {
  ...Positioner.propTypes,
  onOpen: PropTypes.func.isRequired,
  // Use isOpen to manually control the Popover
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  display: PropTypes.string,
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  statelessProps: PropTypes.objectOf(PopoverStateless.propTypes),
}

static defaultProps = {
  side: 'bottom',
  onOpen: () => {},
  onClose: () => {},
  minWidth: 200,
  minHeight: 40,
}
```

## Complete story

```jsx
import { storiesOf } from '@storybook/react'
import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Popover } from '../src/'
import { Pane } from 'evergreen-layers'
import { Text } from 'evergreen-typography'
import { Button } from 'evergreen-buttons'

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
        // You can use `isOpen` to set a properties
        // Use with caution, calculations are based on the width
        // as soon as you toggle it
        isActive={isOpen}
        // Use toggle to show/hide the popover
        onClick={toggle}
        // getRef is used to get the ref of the element we need to run
        // getBoundingClientRect() on
        innerRef={ref => getRef(ref)}
        // You need a key because this element is technically rendered
        // in an array, this is an unavoidable implementation detail
        key={key}
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
```
