import React, { memo, forwardRef } from 'react'
import Badge from './Badge'

const Pill = memo(
  forwardRef(function Pill(props, ref) {
    return <Badge borderRadius={999} ref={ref} {...props} />
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Pill.propTypes = Badge.propTypes

export default Pill
