import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M13.287 5.958a1 1 0 00-.574-1.916l-10 3c-.95.285-.95 1.631 0 1.916l10 3a1 1 0 00.574-1.916L6.48 8l6.807-2.042z'
]
const svgPaths20 = [
  'M7.162 10l9.154 3.052a1 1 0 01-.632 1.897l-12-4c-.912-.304-.912-1.594 0-1.897l12-4a1 1 0 01.632 1.897L7.162 10z'
]

export const LessThanIcon = memo(
  forwardRef(function LessThanIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="less-than"
        {...props}
      />
    )
  })
)
