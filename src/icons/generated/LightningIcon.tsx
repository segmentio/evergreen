import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M7 9H5a1 1 0 01-1-1L4.89.876A1 1 0 015.884 0h4.27a.847.847 0 01.793 1.144L9.125 6h2.05a.825.825 0 01.754 1.16L8.16 15.64A.606.606 0 017 15.394V9z'
]
const svgPaths20 = [
  'M9 11H6a1 1 0 01-1-1L5.91.9a1 1 0 01.995-.9h6.256a.839.839 0 01.779 1.15L11.2 8h2.978a.822.822 0 01.748 1.162l-4.764 10.481A.608.608 0 019 19.392V11z'
]

export const LightningIcon = memo(
  forwardRef(function LightningIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="lightning" {...props} />
  })
)
