import React from 'react'
import { Popover } from '../'
import { Button } from '../../buttons'
import { Pane } from '../../layers'
import { TextInput } from '../../text-input'

function PopoverWithTextInputChild(props) {
  return (
    <Popover
      content={
        <Pane
          data-testid="popover-container"
          width={320}
          height={320}
          paddingX={40}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <TextInput data-testid="popover-input" width="100%" />
        </Pane>
      }
      {...props}
    >
      <Button data-testid="popover-trigger">Trigger Popover</Button>
    </Popover>
  )
}

export default PopoverWithTextInputChild
