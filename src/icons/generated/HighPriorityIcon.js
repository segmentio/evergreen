import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = ['M9 14v2H7v-2h2zm1-14L9 12H7L6 0h4z']
const svgPaths20 = ['M12 16v4H8v-4h4zm1-16l-1 14H8L7 0h6z']

export const HighPriorityIcon = memo(
  forwardRef(function HighPriorityIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="high-priority" {...props} />
  })
)
