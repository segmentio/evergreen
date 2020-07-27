import React, { memo, forwardRef } from 'react'
import Badge from './Badge'

const Pill = memo(
  forwardRef(function Pill(props, ref) {
    return <Badge borderRadius={999} ref={ref} {...props} />
  })
)

Pill.propTypes = Badge.propTypes

export default Pill
