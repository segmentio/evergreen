import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M7 0a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h6zM6 2H2v12h4V2zm2 5h4.59L11.3 5.71A.965.965 0 0111 5a1.003 1.003 0 011.71-.71l3 3c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-3 3a1.003 1.003 0 01-1.42-1.42L12.59 9H8V7z'
]
const svgPaths20 = [
  'M9 0a1 1 0 011 1v18a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h8zM8 2H2v16h6V2zm2 7h6.59L14.3 6.71A.965.965 0 0114 6a1.003 1.003 0 011.71-.71l4 4c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-4 4a1.003 1.003 0 01-1.42-1.42l2.3-2.29H10V9z'
]

export const DrawerLeftIcon = memo(
  forwardRef(function DrawerLeftIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="drawer-left" {...props} />
  })
)
