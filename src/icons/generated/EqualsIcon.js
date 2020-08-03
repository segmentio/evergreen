import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M3 5h10a1 1 0 010 2H3a1 1 0 110-2zm0 4h10a1 1 0 010 2H3a1 1 0 010-2z'
]
const svgPaths20 = [
  'M4 7h12a1 1 0 010 2H4a1 1 0 110-2zm0 4h12a1 1 0 010 2H4a1 1 0 010-2z'
]

export const EqualsIcon = memo(
  forwardRef(function EqualsIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="equals"
        {...props}
      />
    )
  })
)
