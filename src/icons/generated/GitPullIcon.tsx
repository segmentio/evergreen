import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M3 1C1.34 1 0 2.34 0 4c0 1.3.84 2.4 2 2.82v3.37C.84 10.6 0 11.7 0 13c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V6.82C5.16 6.4 6 5.3 6 4c0-1.66-1.34-3-3-3zm0 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm11 5.18V6c0-1.66-1.34-3-3-3H9.41l1.29-1.29c.19-.18.3-.43.3-.71A1.003 1.003 0 009.29.29l-3 3C6.11 3.47 6 3.72 6 4c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L9.41 5H11c.55 0 1 .45 1 1v4.18A2.996 2.996 0 0013 16c1.66 0 3-1.34 3-3 0-1.3-.84-2.4-2-2.82zM13 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
]
const svgPaths20 = [
  'M17 14.18V7c0-2.21-1.79-4-4-4h-2.59l1.29-1.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C7.11 3.47 7 3.72 7 4c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L10.41 5H13c1.1 0 2 .9 2 2v7.18A2.996 2.996 0 0016 20c1.66 0 3-1.34 3-3 0-1.3-.84-2.4-2-2.82zM16 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4 1C2.34 1 1 2.34 1 4c0 1.3.84 2.4 2 2.82v7.37C1.84 14.6 1 15.7 1 17c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V6.82C6.16 6.4 7 5.3 7 4c0-1.66-1.34-3-3-3zm0 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
]

export const GitPullIcon: IconComponent = memo(
  forwardRef(function GitPullIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="git-pull" {...props} />
  })
)
