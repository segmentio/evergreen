import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = ['M-.01 6.66l7.34 2 2 7.33 6.66-16z']
const svgPaths20 = ['M0 8.33l9.17 2.5 2.5 9.17L20 0z']

export const GeolocationIcon = memo(
  forwardRef(function GeolocationIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="geolocation"
        {...props}
      />
    )
  })
)
