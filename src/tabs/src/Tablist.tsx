import React, { forwardRef } from 'react'
import Box from 'ui-box'

const Tablist = forwardRef(function Tablist(props, ref) {
  // @ts-expect-error ts-migrate(2322) FIXME: Type '((instance: unknown) => void) | MutableRefOb... Remove this comment to see the full error message
  return <Box role="tablist" {...props} ref={ref} />
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
Tablist.propTypes = Box.propTypes

export default Tablist
