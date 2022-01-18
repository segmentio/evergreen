import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M7.504 3.132l-7 4a1 1 0 000 1.736l7 4a1 1 0 00.992 0l7-4a1 1 0 000-1.736l-7-4a1 1 0 00-.992 0zM8 5.152L12.983 8 8 10.847 3.016 8 8 5.152z'
]
const svgPaths20 = [
  'M9.514 4.126l-9 5a1 1 0 000 1.748l9 5a1 1 0 00.972 0l9-5a1 1 0 000-1.748l-9-5a1 1 0 00-.972 0zM10 6.144l6.94 3.855L10 13.855 3.059 9.999 10 6.144z'
]

export const LayerOutlineIcon = memo(
  forwardRef(function LayerOutlineIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="layer-outline" {...props} />
  })
)
