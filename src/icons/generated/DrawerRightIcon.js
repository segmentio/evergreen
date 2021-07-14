import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15 0a1 1 0 011 1v14a1 1 0 01-1 1H9a1 1 0 01-1-1V1a1 1 0 011-1h6zm-1 2h-4v12h4V2zM8 7H3.41L4.7 5.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 9H8V7z'
]
const svgPaths20 = [
  'M19 0a1 1 0 011 1v18a1 1 0 01-1 1h-8a1 1 0 01-1-1V1a1 1 0 011-1h8zm-1 2h-6v16h6V2zm-8 7H3.41L5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L3.41 11H10V9z'
]

export const DrawerRightIcon = memo(
  forwardRef(function DrawerRightIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="drawer-right" {...props} />
  })
)
