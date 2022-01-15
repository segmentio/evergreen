import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M8.5 0A1.5 1.5 0 007 1.5v7.837a3.5 3.5 0 103 0V1.5A1.5 1.5 0 008.5 0zM2 5.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM2.5 1a.5.5 0 000 1h3a.5.5 0 000-1h-3zM4 3.5a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM4.5 7a.5.5 0 000 1h1a.5.5 0 000-1h-1z'
]
const svgPaths20 = [
  'M11 0a2 2 0 00-2 2v10.535a4 4 0 104 0V2a2 2 0 00-2-2zM3 2.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM3.5 8a.5.5 0 000 1h4a.5.5 0 000-1h-4zM5 5.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm.5 5.5a.5.5 0 000 1h2a.5.5 0 000-1h-2z'
]

export const TemperatureIcon = memo(
  forwardRef(function TemperatureIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="temperature" {...props} />
  })
)
