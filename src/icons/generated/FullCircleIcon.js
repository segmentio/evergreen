import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = ['M8 0a8 8 0 100 16A8 8 0 108 0z']
const svgPaths20 = ['M9.96 0a10 10 0 100 20 10 10 0 100-20z']

export const FullCircleIcon = memo(
  forwardRef(function FullCircleIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="full-circle"
        {...props}
      />
    )
  })
)
