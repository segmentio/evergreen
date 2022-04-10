import React from 'react'
import { LockIcon } from '../../icons'
import { Pane } from '../../layers'
import { useTheme } from '../../theme'
import EmptyState from '../src/EmptyState'

const BasicWithLinkExample = () => {
  const { colors } = useTheme()

  return (
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    <Pane maxWidth={1152}>
      <EmptyState
        background="dark"
        title="You need permission to access these sources"
        orientation="horizontal"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        icon={<LockIcon color={colors.orange500} />}
        iconBgColor={colors.orange100}
        description="If you believe you should have accesss to this page, please check with your Workspace Owner or request access below."
        primaryCta={<EmptyState.PrimaryButton>Request Access</EmptyState.PrimaryButton>}
        anchorCta={
          <EmptyState.LinkButton href="https://segment.com/docs/" target="_blank">
            Learn more about permission
          </EmptyState.LinkButton>
        }
      />
    </Pane>
  )
}

export default BasicWithLinkExample
