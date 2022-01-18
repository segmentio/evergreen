import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = ['M12 6H4a2 2 0 100 4h8a2 2 0 100-4zM4 4a4 4 0 100 8h8a4 4 0 000-8H4z']
const svgPaths20 = ['M15 7H5a3 3 0 000 6h10a3 3 0 100-6zM5 5a5 5 0 000 10h10a5 5 0 000-10H5z']

export const StadiumGeometryIcon = memo(
  forwardRef(function StadiumGeometryIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="stadium-geometry" {...props} />
  })
)
