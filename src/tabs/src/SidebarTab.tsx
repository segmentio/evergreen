import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import warning from '../../lib/warning'
import Tab, { TabOwnProps } from './Tab'

/** @deprecated This component will be removed in the next major version of Evergreen */
export type SidebarTabProps = PolymorphicBoxProps<'span', TabOwnProps>

const SideBarTab: React.FC<SidebarTabProps> = memo(
  forwardRef(function Sidebartab(props, ref) {
    if (process.env.NODE_ENV !== 'production') {
      warning(
        true,
        '<SidebarTab> is deprecated and will be removed in the next major verison of Evergreen. Prefer composing with the `<Tab />` element directly.'
      )
    }
    return <Tab direction="vertical" {...props} ref={ref} />
  })
)

export default SideBarTab
