import React from 'react'
import { Popover } from '../'
import { Button } from '../../buttons'
import { Pane } from '../../layers'
import { TextInput } from '../../text-input'

function PopoverWithTextInputChild(props: any) {
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
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          <TextInput data-testid="popover-input" width="100%" />
        </Pane>
      }
      {...props}
    >
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <Button data-testid="popover-trigger">Trigger Popover</Button>
    </Popover>
  )
}

export default PopoverWithTextInputChild
