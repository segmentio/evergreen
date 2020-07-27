import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M7.58 5l.44-2.196a1 1 0 011.96.392L9.62 5H13a1 1 0 010 2H9.22l-.4 2H13a1 1 0 010 2H8.42l-.44 2.196a1 1 0 01-1.96-.392L6.38 11H3a1 1 0 010-2h3.78l.4-2H3a1 1 0 110-2h4.58z'
]
const svgPaths20 = [
  'M9.487 7l.532-3.196a1 1 0 011.962.392L11.513 7H16a1 1 0 010 2h-4.82l-.333 2H16a1 1 0 010 2h-5.487l-.532 3.196a1 1 0 01-1.962-.392L8.487 13H4a1 1 0 010-2h4.82l.333-2H4a1 1 0 110-2h5.487z'
]

export const NotEqualToIcon = memo(
  forwardRef(function NotEqualToIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="not-equal-to"
        {...props}
      />
    )
  })
)
