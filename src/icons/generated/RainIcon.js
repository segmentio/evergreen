import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M3.5 8a2.5 2.5 0 11.608-4.926 4.002 4.002 0 017.381-1.03A3 3 0 1112 8H3.501zM3 10a1 1 0 012 0v4a1 1 0 11-2 0v-4zm7-1a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm2 1a1 1 0 112 0v2a1 1 0 11-2 0v-2zM7 9a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z'
]
const svgPaths20 = [
  'M4 10a3 3 0 111.065-5.806A5.001 5.001 0 0114.63 3.11 3.5 3.5 0 1115.5 10H4zm0 2a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm9 1a1 1 0 10-2 0v6a1 1 0 102 0v-6zm3-1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-7 1a1 1 0 10-2 0v3a1 1 0 102 0v-3z'
]

export const RainIcon = memo(
  forwardRef(function RainIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="rain" {...props} />
  })
)
