import React, { forwardRef } from 'react'
import Box from 'ui-box'

const TabNavigation = forwardRef(function TabNavigation(props, ref) {
  // @ts-expect-error ts-migrate(2322) FIXME: Type '((instance: unknown) => void) | MutableRefOb... Remove this comment to see the full error message
  return <Box is="nav" role="navigation" {...props} ref={ref} />
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
TabNavigation.propTypes = Box.propTypes

export default TabNavigation
