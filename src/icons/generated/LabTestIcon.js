import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M11 1a1 1 0 010 2v3l3 7v1.25a.75.75 0 01-.75.75H2.75a.75.75 0 01-.75-.75V13l3-7V3a1 1 0 110-2h6zM9 3H7v3l-1.714 4h5.428L9 6V3z'
]
const svgPaths20 = [
  'M13 2a1 1 0 010 2v4l4 8v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1l4-8V4a1 1 0 110-2h6zm-2 2H9v4l-2 4h6l-2-4V4z'
]

export const LabTestIcon = memo(
  forwardRef(function LabTestIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="lab-test"
        {...props}
      />
    )
  })
)
