import React from 'react'
import { Button } from '../../buttons'
import { HandUpIcon } from '../../icons'
import { Pane } from '../../layers'
import { Popover } from '../../popover'
import { majorScale } from '../../scales'
import { useTheme } from '../../theme'
import EmptyState from '../src/EmptyState'

const SmallMinimalExample = () => {
  const { colors } = useTheme()

  return (
    <Pane marginBottom={majorScale(50)}>
      <Popover
        content={
          <Pane width={300} height="auto">
            <EmptyState
              background="light"
              title="No source selected"
              orientation="vertical"
              image={<HandUpIcon color={colors.gray500} />}
            />
          </Pane>
        }
      >
        <Button>Trigger Popover</Button>
      </Popover>
    </Pane>
  )
}

export default SmallMinimalExample
