import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M7.99-.01c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1v-14c0-.55-.45-1-1-1zm-3 3h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm10 0h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm0 3h-4v-2h4v2zm0 3h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm0 3h-4v-2h4v2zm-10-3h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M6 8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm13-6h-5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 3h-5V3h5v2zM6 14H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zM6 2H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm4-2c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm9 14h-5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm0 3h-5v-2h5v2zm0-9h-5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm0 3h-5V9h5v2z'
]

export const ComparisonIcon = memo(
  forwardRef(function ComparisonIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="comparison"
        {...props}
      />
    )
  })
)
