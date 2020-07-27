import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = ['M8 3a5 5 0 100 10A5 5 0 108 3z']
const svgPaths20 = ['M10 3a7 7 0 100 14 7 7 0 100-14z']

export const RecordIcon = memo(
  forwardRef(function RecordIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="record"
        {...props}
      />
    )
  })
)
