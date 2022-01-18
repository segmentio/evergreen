import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm7 6a1 1 0 01.993.883L12 7v2a1 1 0 01-.883.993L11 10H5a1 1 0 01-.993-.883L4 9V7a1 1 0 01.883-.993L5 6h6zm0 1H8v2h3V7z'
]
const svgPaths20 = [
  'M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm10 7a1 1 0 01.993.883L16 8v4a1 1 0 01-.883.993L15 13H5a1 1 0 01-.993-.883L4 12V8a1 1 0 01.883-.993L5 7h10zm0 1h-5v4h5V8z'
]

export const ArrayBooleanIcon = memo(
  forwardRef(function ArrayBooleanIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="array-boolean" {...props} />
  })
)
