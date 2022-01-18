import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M10 4a2 2 0 112 2H4a1 1 0 000 2h8a4 4 0 10-4-4 1 1 0 002 0zM1 9a1 1 0 100 2h7.5a1.5 1.5 0 010 3c-.749 0-1.386-.538-1.52-1.199a1 1 0 10-1.96.398C5.35 14.82 6.83 16 8.5 16a3.5 3.5 0 100-7H1z'
]
const svgPaths20 = [
  'M12 6a3 3 0 113 3H4a1 1 0 000 2h11a5 5 0 10-5-5 1 1 0 102 0zM1 12a1 1 0 100 2h10a2 2 0 110 4c-.934 0-1.803-.614-2.057-1.333a1 1 0 10-1.886.666C7.627 18.944 9.321 20 11 20a4 4 0 000-8H1z'
]

export const WindIcon = memo(
  forwardRef(function WindIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="wind" {...props} />
  })
)
