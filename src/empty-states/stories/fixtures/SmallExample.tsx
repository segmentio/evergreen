import React from 'react'
import { Button } from '../../../buttons'
import { LockIcon } from '../../../icons'
import { Pane } from '../../../layers'
import { Popover } from '../../../popover'
import { majorScale } from '../../../scales'
import { useTheme } from '../../../theme'
import EmptyState from '../../src/EmptyState'

const SmallExample = (props: any) => {
  const { colors } = useTheme()

  return (
    <Pane marginBottom={majorScale(20)}>
      <Popover
        {...props.popoverProps}
        content={
          <Pane width={450} height="auto">
            <EmptyState
              background="light"
              title="You need permission to access these sources"
              orientation="vertical"
              icon={<LockIcon color={colors.blue300} />}
              iconBgColor={colors.blue100}
              description="If you believe you should have access to this page, please check with your Workspace Owner or request access below."
              primaryCta={<EmptyState.PrimaryButton appearance="primary">Request Access</EmptyState.PrimaryButton>}
            />
          </Pane>
        }
      >
        <Button>Trigger Popover</Button>
      </Popover>
    </Pane>
  )
}
export default SmallExample
