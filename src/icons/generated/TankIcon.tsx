import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M3.7 3.4a1 1 0 01.8-.4h5.086a1 1 0 01.707.293L11 4h3a1 1 0 110 2h-3v1h2.5a2.5 2.5 0 010 5h-11a2.5 2.5 0 010-5H3V4.667a1 1 0 01.2-.6l.5-.667zM2.5 9h11a.5.5 0 010 1h-11a.5.5 0 110-1z'
]
const svgPaths20 = [
  'M3.956 4.47A1 1 0 014.804 4h6.392a1 1 0 01.848.47L13 6h5a1 1 0 010 2h-5v1h4a3 3 0 110 6H3a3 3 0 010-6V6.287a1 1 0 01.152-.53l.804-1.287zM3 11h14a1 1 0 110 2H3a1 1 0 110-2z'
]

export const TankIcon = memo(
  forwardRef(function TankIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="tank" {...props} />
  })
)
