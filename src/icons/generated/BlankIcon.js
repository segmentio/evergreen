import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = ['']
const svgPaths20 = ['']

export const BlankIcon = memo(
  forwardRef(function BlankIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="blank"
        {...props}
      />
    )
  })
)
