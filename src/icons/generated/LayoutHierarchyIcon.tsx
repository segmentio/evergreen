import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M14.5 12.07V9.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2-.93 0-1.71.64-1.93 1.5H9.93c-.18-.7-.73-1.25-1.43-1.43V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S6 .9 6 2c0 .93.64 1.71 1.5 1.93v2.14c-.7.18-1.25.73-1.43 1.43H3.93C3.71 6.64 2.93 6 2 6 .9 6 0 6.9 0 8c0 .93.64 1.71 1.5 1.93v2.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93V9.93c.7-.18 1.25-.73 1.43-1.43h2.14c.18.7.73 1.25 1.43 1.43v2.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93V9.93c.7-.18 1.25-.73 1.43-1.43h2.14c.18.7.73 1.25 1.43 1.43v2.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93z'
]
const svgPaths20 = [
  'M18.5 16.07v-4.14c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2-.93 0-1.71.64-1.93 1.5h-4.14c-.18-.7-.73-1.25-1.43-1.43V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S8 .9 8 2c0 .93.64 1.71 1.5 1.93v4.14c-.7.18-1.25.73-1.43 1.43H3.93C3.71 8.64 2.93 8 2 8c-1.1 0-2 .9-2 2 0 .93.64 1.71 1.5 1.93v4.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-4.14c.7-.18 1.25-.73 1.43-1.43h4.14c.18.7.73 1.25 1.43 1.43v4.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-4.14c.7-.18 1.25-.73 1.43-1.43h4.14c.18.7.73 1.25 1.43 1.43v4.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93z'
]

export const LayoutHierarchyIcon: IconComponent = memo(
  forwardRef(function LayoutHierarchyIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="layout-hierarchy" {...props} />
  })
)
