import React, { forwardRef } from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'

export interface TabNavigationOwnProps {}

export type TabNavigationProps = PolymorphicBoxProps<'nav', TabNavigationOwnProps>

const TabNavigation: React.FC<TabNavigationProps> = forwardRef(function TabNavigation(props, ref) {
  return <Box is="nav" role="navigation" {...props} ref={ref} />
})

export default TabNavigation
