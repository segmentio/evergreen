import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = ['M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM6 14l1-5H4l6-7-1 5h3l-6 7z']
const svgPaths20 = ['M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM7 18l2-7H5l8-9-2 7h4l-8 9z']

export const OfflineIcon = memo(
  forwardRef(function OfflineIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="offline" {...props} />
  })
)
