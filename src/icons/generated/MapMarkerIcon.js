import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M8.46 0C5.42 0 2.95 2.39 2.95 5.33 2.95 8.28 8.46 16 8.46 16s5.51-7.72 5.51-10.67C13.96 2.39 11.5 0 8.46 0zm0 8a2.5 2.5 0 010-5 2.5 2.5 0 010 5z'
]
const svgPaths20 = [
  'M9.98 0c-3.87 0-7 2.98-7 6.67 0 3.68 7 13.33 7 13.33s7-9.65 7-13.33c0-3.68-3.14-6.67-7-6.67zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'
]

export const MapMarkerIcon = memo(
  forwardRef(function MapMarkerIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="map-marker"
        {...props}
      />
    )
  })
)
