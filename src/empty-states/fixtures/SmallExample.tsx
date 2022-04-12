import React from 'react'
import { Button } from '../../buttons'
import { LockIcon } from '../../icons'
import { Pane } from '../../layers'
import { Popover } from '../../popover'
import { majorScale } from '../../scales'
import { useTheme } from '../../theme'
import EmptyState from '../src/EmptyState'

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
              description="If you believe you should have accesss to this page, please check with your Workspace Owner or request access below."
              // @ts-expect-error ts-migrate(2339) FIXME: Property 'PrimaryButton' does not exist on type 'F... Remove this comment to see the full error message
              primaryCta={<EmptyState.PrimaryButton appearance="primary">Request Access</EmptyState.PrimaryButton>}
            />
          </Pane>
        }
      >
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Button>Trigger Popover</Button>
      </Popover>
    </Pane>
  )
}
export default SmallExample
