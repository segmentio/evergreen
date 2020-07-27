import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = ['M8 5a3 3 0 100 6 3 3 0 100-6z']
const svgPaths20 = ['M10 6a4 4 0 100 8 4 4 0 100-8z']

export const DotIcon = memo(
  forwardRef(function DotIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="dot"
        {...props}
      />
    )
  })
)
