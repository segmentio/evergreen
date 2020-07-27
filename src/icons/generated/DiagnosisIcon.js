import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M3.2 1a1 1 0 01.117 1.993L3.2 3H3v3a2 2 0 001.85 1.995L5 8a2 2 0 001.995-1.85L7 6V3h-.2a1 1 0 01-.993-.883L5.8 2a1 1 0 01.883-.993L6.8 1H8a1 1 0 01.993.883L9 2v4a4.002 4.002 0 01-3.007 3.876v.007L6 10a3 3 0 005.995.176L12 10V7.792a2.5 2.5 0 112 0V10a5 5 0 01-10 0c0-.042.003-.084.008-.125A4 4 0 011.005 6.2L1 6V2a1 1 0 01.883-.993L2 1h1.2z'
]
const svgPaths20 = [
  'M4 2a1 1 0 01.117 1.993L4 4v5a2 2 0 001.85 1.995L6 11a2 2 0 001.995-1.85L8 9V4a1 1 0 01-.117-1.993L8 2h1a1 1 0 01.993.883L10 3v6a4.002 4.002 0 01-3 3.874V13a3 3 0 003 3 4 4 0 003.995-3.8L14 12V8.792a2.5 2.5 0 112 0V12a6 6 0 01-6 6 5 5 0 01-4.995-4.783L5 13v-.126A4.002 4.002 0 012.005 9.2L2 9V3a1 1 0 01.883-.993L3 2h1z'
]

export const DiagnosisIcon = memo(
  forwardRef(function DiagnosisIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="diagnosis"
        {...props}
      />
    )
  })
)
