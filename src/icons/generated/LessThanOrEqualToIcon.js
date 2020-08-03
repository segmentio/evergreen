import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M13.287 3.958a1 1 0 00-.575-1.916l-10 3c-.95.285-.95 1.63 0 1.916l10 3a1 1 0 00.575-1.916L6.48 6l6.807-2.042zM13 12H3a1 1 0 000 2h10a1 1 0 000-2z'
]
const svgPaths20 = [
  'M16.316 11.051L7.162 8l9.154-3.051a1 1 0 10-.632-1.898l-12 4c-.912.304-.912 1.594 0 1.898l12 4a1 1 0 10.632-1.898zM16 15H4a1 1 0 100 2h12a1 1 0 100-2z'
]

export const LessThanOrEqualToIcon = memo(
  forwardRef(function LessThanOrEqualToIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="less-than-or-equal-to"
        {...props}
      />
    )
  })
)
