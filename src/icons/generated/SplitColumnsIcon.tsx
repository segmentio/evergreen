import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M12 10a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H9V2h3v1.71c.31-.13.64-.21 1-.21s.69.08 1 .21V1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2.71c.31-.13.64-.21 1-.21s.69.08 1 .21V2h3v5H3.41l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L3.41 9H7v5H4v-1.71c-.31.13-.64.21-1 .21s-.69-.08-1-.21V15c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2.71c-.31.13-.64.21-1 .21s-.69-.08-1-.21V14H9V9h3.59l-.29.29c-.19.18-.3.43-.3.71z'
]
const svgPaths20 = [
  'M15 13a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 00-1.42 1.42L16.59 9H11V2h5v2c.77 0 1.47.3 2 .78V1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v3.78C2.53 4.3 3.23 4 4 4V2h5v7H3.41L4.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 11H9v7H4v-2c-.77 0-1.47-.3-2-.78V19c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.78c-.53.48-1.23.78-2 .78v2h-5v-7h5.59l-1.29 1.29c-.19.18-.3.43-.3.71z'
]

export const SplitColumnsIcon: IconComponent = memo(
  forwardRef(function SplitColumnsIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="split-columns" {...props} />
  })
)
