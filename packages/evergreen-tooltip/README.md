# Tooltip

`evergreen-tooltip` is a package exporting a `Tooltip` React component.
Tooltips display floating content in relation to a target.
Tooltip appear either at the top, bottom of their target.
The preferred and default side is the bottom.

## Design example

![tooltip](https://user-images.githubusercontent.com/564463/32260757-25a2fb58-be87-11e7-8759-b41ce4b09462.gif)

## Implementation details

* Uses `Positioner` from `evergreen-positioner`
* Tooltips use `onMouseLeave` and `onMouseEnter` to show and hide the tooltip
* Tooltips use a similar implementation to Popovers,

When creating a popover, you must specify both:

* its content, by setting the content prop, and
* its target, as a single child element or a function

## Usage

```jsx
<Tooltip content="My tooltip content. Lorem ipsum dolar set amet.">
  <Text display="inline-block" cursor="help">
    Hover to trigger
  </Text>
</Tooltip>
```

## Prop types

```js
static propTypes = {
  ...Positioner.propTypes,
  content: PropTypes.node,
  isShown: PropTypes.bool,
  children: PropTypes.node,
  tooltipProps: PropTypes.object,
  statelessProps: PropTypes.objectOf(TooltipStateless.propTypes),
}
```

## Complete Story

```jsx
import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Text } from 'evergreen-typography'
import { Tooltip } from '../src/'

storiesOf('tooltip', module).add('Tooltip', () => (
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
  </Box>
))
```
