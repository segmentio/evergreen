import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M6.6 3.3C5.3 4.4 4.5 6.1 4.5 8s.8 3.6 2.1 4.7c-.5.2-1 .3-1.6.3-2.8 0-5-2.2-5-5s2.2-5 5-5c.6 0 1.1.1 1.6.3zm-1.96 8.68C3.92 10.83 3.5 9.46 3.5 8s.42-2.83 1.14-3.98C2.6 4.2 1 5.91 1 8s1.6 3.8 3.64 3.98zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c2.8 0 5 2.2 5 5s-2.2 5-5 5c-.6 0-1.1-.1-1.6-.3 1.3-1.1 2.1-2.9 2.1-4.7s-.8-3.5-2.1-4.7c.5-.2 1-.3 1.6-.3z'
]
const svgPaths20 = [
  'M8.7 4.7C7.4 6 6.5 7.9 6.5 10s.8 4 2.2 5.3c-.8.5-1.7.7-2.7.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 1.9.2 2.7.7zm-3.34 9.25c-.55-1.2-.86-2.54-.86-3.95s.31-2.75.86-3.95a4.001 4.001 0 000 7.9zM14 4c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1 0-1.9-.2-2.7-.7 1.3-1.3 2.2-3.2 2.2-5.3s-.8-3.9-2.2-5.3C12.1 4.2 13 4 14 4zm-4 1.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z'
]

export const RightJoinIcon: IconComponent = memo(
  forwardRef(function RightJoinIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="right-join" {...props} />
  })
)
