import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M2 8a1 1 0 112 0 1 1 0 01-2 0zm3.83-1a3.001 3.001 0 100 2h4.34a3.001 3.001 0 100-2H5.83zM13 7a1 1 0 100 2 1 1 0 000-2z'
]
const svgPaths20 = [
  'M2 10a1 1 0 112 0 1 1 0 01-2 0zm3.83-1a3.001 3.001 0 100 2h8.34a3.001 3.001 0 100-2H5.83zM17 9a1 1 0 100 2 1 1 0 000-2z'
]

export const OneToOneIcon = memo(
  forwardRef(function OneToOneIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="one-to-one" {...props} />
  })
)
