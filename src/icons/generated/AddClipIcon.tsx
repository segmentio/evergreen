import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M12 0a1 1 0 00-1 1v2H9a1 1 0 000 2h2v2a1 1 0 102 0V5h2a1 1 0 100-2h-2V1a1 1 0 00-1-1zM0 4a1 1 0 011-1h3.5a1 1 0 010 2H2v2a1 1 0 01-2 0V4zm1 12a1 1 0 01-1-1v-3a1 1 0 112 0v2h2.5a1 1 0 110 2H1zm11 0a1 1 0 001-1v-3a1 1 0 10-2 0v2H9a1 1 0 100 2h3zm-5.5-4a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
]
const svgPaths20 = [
  'M15 0a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0V6h-3a1 1 0 110-2h3V1a1 1 0 011-1zM1 4a1 1 0 00-1 1v4a1 1 0 002 0V6h3a1 1 0 000-2H1zM0 19a1 1 0 001 1h4a1 1 0 100-2H2v-3a1 1 0 10-2 0v4zm15 1h-4a1 1 0 110-2h3v-3a1 1 0 112 0v4a1 1 0 01-1 1zm-7-5a3 3 0 100-6 3 3 0 000 6z',
]

export const AddClipIcon: IconComponent = memo(
  forwardRef(function AddClipIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="add-clip" {...props} />
  })
)
