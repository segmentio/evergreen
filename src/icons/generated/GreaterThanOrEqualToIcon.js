import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M2.713 3.958a1 1 0 01.574-1.916l10 3c.95.285.95 1.63 0 1.916l-10 3a1 1 0 01-.574-1.916L9.52 6 2.713 3.958zM3 12h10a1 1 0 010 2H3a1 1 0 010-2z'
]
const svgPaths20 = [
  'M3.684 11.051a1 1 0 00.632 1.898l12-4c.912-.304.912-1.594 0-1.898l-12-4a1 1 0 00-.632 1.898L12.838 8l-9.154 3.051zM4 15h12a1 1 0 110 2H4a1 1 0 010-2z'
]

export const GreaterThanOrEqualToIcon = memo(
  forwardRef(function GreaterThanOrEqualToIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="greater-than-or-equal-to"
        {...props}
      />
    )
  })
)
