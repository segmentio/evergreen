import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M2 6.03a2 2 0 100 4 2 2 0 100-4zM14 6.03a2 2 0 100 4 2 2 0 100-4zM8 6.03a2 2 0 100 4 2 2 0 100-4z'
]
const svgPaths20 = [
  'M3.5 8a2.5 2.5 0 100 5 2.5 2.5 0 100-5zM17.5 8a2.5 2.5 0 100 5 2.5 2.5 0 100-5zM10.5 8a2.5 2.5 0 100 5 2.5 2.5 0 100-5z'
]

export const MoreIcon = memo(
  forwardRef(function MoreIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="more"
        {...props}
      />
    )
  })
)
