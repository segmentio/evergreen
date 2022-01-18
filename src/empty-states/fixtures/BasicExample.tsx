import React from 'react'
import { LockIcon } from '../../icons'
import { Pane } from '../../layers'
import { useTheme } from '../../theme'
import EmptyState from '../src/EmptyState'

const BasicExample = () => {
  const { colors } = useTheme()

  return (
    <Pane maxWidth={1152}>
      <EmptyState
        background="dark"
        title="You need permission to access these sources"
        orientation="horizontal"
        icon={<LockIcon color={colors.orange500} />}
        iconBgColor={colors.orange100}
        description="If you believe you should have accesss to this page, please check with your Workspace Owner or request access below."
        primaryCta={<EmptyState.PrimaryButton>Request Access</EmptyState.PrimaryButton>}
      />
    </Pane>
  )
}

export default BasicExample
