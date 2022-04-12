import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M0 1a1 1 0 011-1h4a1 1 0 010 2H2v3a1 1 0 01-2 0V1zm1 15a1 1 0 01-1-1v-4a1 1 0 112 0v3h3a1 1 0 110 2H1zm14 0a1 1 0 001-1v-4a1 1 0 10-2 0v3h-3a1 1 0 100 2h4zm0-16a1 1 0 011 1v4a1 1 0 11-2 0V2h-3a1 1 0 110-2h4zM8 11a3 3 0 100-6 3 3 0 000 6z'
]
const svgPaths20 = [
  'M0 1a1 1 0 011-1h5a1 1 0 010 2H2v4a1 1 0 01-2 0V1zm1 19a1 1 0 01-1-1v-5a1 1 0 112 0v4h4a1 1 0 110 2H1zm18 0a1 1 0 001-1v-5a1 1 0 10-2 0v4h-4a1 1 0 100 2h5zm0-20a1 1 0 011 1v5a1 1 0 11-2 0V2h-4a1 1 0 110-2h5zm-9 14a4 4 0 100-8 4 4 0 000 8z'
]

export const ClipIcon: IconComponent = memo(
  forwardRef(function ClipIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="clip" {...props} />
  })
)
