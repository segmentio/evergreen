import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M2 2c.55 0 1 .45 1 1v3c0 1.66 1.34 3 3 3h5.59L10.3 7.71A.965.965 0 0110 7a1.003 1.003 0 011.71-.71l3 3c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-3 3a1.003 1.003 0 01-1.42-1.42l1.3-1.29H6c-2.76 0-5-2.24-5-5V3c0-.55.45-1 1-1z'
]
const svgPaths20 = [
  'M2 2c.55 0 1 .45 1 1v5c0 2.21 1.79 4 4 4h8.59L13.3 9.71A.965.965 0 0113 9a1.003 1.003 0 011.71-.71l4 4c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-4 4a1.003 1.003 0 01-1.42-1.42l2.3-2.29H7c-3.31 0-6-2.69-6-6V3c0-.55.45-1 1-1z'
]

export const NestIcon = memo(
  forwardRef(function NestIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="nest" {...props} />
  })
)
