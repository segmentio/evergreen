import React, { memo, forwardRef } from 'react'
import warning from '../../lib/warning'
import Tab from './Tab'

const SideBarTab = memo(
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
