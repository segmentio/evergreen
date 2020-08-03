import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = ['M16 1.99l-16 6 16 6-4-6z']
const svgPaths20 = ['M20 3.02l-20 7 20 7-5-7z']

export const DirectionLeftIcon = memo(
  forwardRef(function DirectionLeftIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="direction-left"
        {...props}
      />
    )
  })
)
