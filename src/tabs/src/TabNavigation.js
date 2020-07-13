import React, { forwardRef } from 'react'
import Box from 'ui-box'

const TabNavigation = forwardRef((props, ref) => {
  return <Box is="nav" role="navigation" {...props} ref={ref} />
})

TabNavigation.propTypes = Box.propTypes

export default TabNavigation
