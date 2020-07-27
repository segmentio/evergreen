import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15 4H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 6H8V6h6v4z'
]
const svgPaths20 = [
  'M19 5H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 8h-8V7h8v6z'
]

export const SegmentedControlIcon = memo(
  forwardRef(function SegmentedControlIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="segmented-control"
        {...props}
      />
    )
  })
)
