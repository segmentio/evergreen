import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm6.5 4a.5.5 0 01.5.5V5a1 1 0 01.993.883L12 6v5a1 1 0 01-.883.993L11 12H5a1 1 0 01-.993-.883L4 11V6a1 1 0 01.883-.993L5 5v-.5a.5.5 0 011 0V5h4v-.5a.5.5 0 01.5-.5zm.5 3H5v4h6V7z'
]
const svgPaths20 = [
  'M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm2.5 5a.5.5 0 01.5.5V6h4v-.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V6h1a1 1 0 01.993.883L16 7v7a1 1 0 01-.883.993L15 15H5a1 1 0 01-.993-.883L4 14V7a1 1 0 01.883-.993L5 6h1v-.5a.5.5 0 01.5-.5h1zM15 9H5v5h10V9z'
]

export const ArrayDateIcon = memo(
  forwardRef(function ArrayDateIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="array-date" {...props} />
  })
)
