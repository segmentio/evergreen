import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15.2 6.4h-1.44c-.13-.47-.32-.92-.56-1.34L14.26 4c.31-.31.31-.82 0-1.13l-1.13-1.13a.803.803 0 00-1.13 0L10.94 2.8c-.42-.24-.86-.42-1.34-.56V.8c0-.44-.36-.8-.8-.8H7.2c-.44 0-.8.36-.8.8v1.44c-.5.14-.96.34-1.4.59l-1-1c-.3-.3-.79-.3-1.09 0L1.83 2.91c-.3.3-.3.79 0 1.09l1 1c-.25.44-.45.9-.59 1.4H.8c-.44 0-.8.36-.8.8v1.6c0 .44.36.8.8.8h1.44c.13.47.32.92.56 1.34L1.74 12c-.31.31-.31.82 0 1.13l1.13 1.13c.31.31.82.31 1.13 0l1.06-1.06c.42.24.86.42 1.34.56v1.44c0 .44.36.8.8.8h1.6c.44 0 .8-.36.8-.8v-1.44c.5-.14.96-.33 1.4-.59l1 1c.3.3.79.3 1.09 0l1.09-1.09c.3-.3.3-.79 0-1.09l-1-1c.25-.43.45-.9.59-1.4h1.44c.44 0 .8-.36.8-.8V7.2a.818.818 0 00-.81-.8zM8 12c-2.21 0-4-1.79-4-4s1.79-4 4-4v8z'
]
const svgPaths20 = [
  'M19 8h-1.26c-.19-.73-.48-1.42-.85-2.06l.94-.94a.996.996 0 000-1.41l-1.41-1.41a.996.996 0 00-1.41 0l-.94.94c-.65-.38-1.34-.67-2.07-.86V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.26c-.76.2-1.47.5-2.13.89L5 2.28a.972.972 0 00-1.36 0L2.28 3.64c-.37.38-.37.98 0 1.36l.87.87c-.39.66-.69 1.37-.89 2.13H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.26c.19.73.48 1.42.85 2.06l-.94.94a.996.996 0 000 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l.94-.94c.64.38 1.33.66 2.06.85V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.26c.76-.2 1.47-.5 2.13-.89l.88.87c.37.37.98.37 1.36 0l1.36-1.36c.37-.38.37-.98 0-1.36l-.87-.87c.4-.65.7-1.37.89-2.13H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 7c-2.76 0-5-2.24-5-5s2.24-5 5-5v10z'
]

export const ContrastIcon: IconComponent = memo(
  forwardRef(function ContrastIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="contrast" {...props} />
  })
)
