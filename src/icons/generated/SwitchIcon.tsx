import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M9.293 2.293l1.414 1.414-4.999 5a3 3 0 11-1.415-1.415l5-5zM13 7a3 3 0 110 6 3 3 0 010-6zM3 9a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z'
]
const svgPaths20 = [
  'M12.293 2.293l1.414 1.414-7.127 7.129a3.5 3.5 0 11-1.415-1.415l7.128-7.128zM16.5 9a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm-13 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm13 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'
]

export const SwitchIcon = memo(
  forwardRef(function SwitchIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="switch" {...props} />
  })
)
