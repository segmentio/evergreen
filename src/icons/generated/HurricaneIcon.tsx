import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M3.5 12c-.86 0-2.5-.5-3.5-1 1 3.5 4.506 4 7 4a7 7 0 007-7l-.006-.004a5.974 5.974 0 00-1.29-3.988c.896.066 2.37.53 3.296.992-1-3.5-4.506-4-7-4a6.998 6.998 0 00-6.14 3.635 5.972 5.972 0 00-.859 3.226L2 8l.006.005a5.98 5.98 0 001.771 3.99A7.469 7.469 0 013.5 12zM8 6a2 2 0 100 4 2 2 0 000-4z',
  'M0 0h16v16H0z'
]
const svgPaths20 = [
  'M0 14c1.648.775 3 1 4 1-1-1-2-3.112-2-5a5.098 5.098 0 000-.045C2 5.17 6.201 1 11.172 1c3.206 0 6.9.667 8.828 5-1.648-.775-3-1-4-1 1 1 2 3.112 2 5v.045C18 14.83 13.799 19 8.828 19c-3.206 0-6.9-.667-8.828-5zm10-7a3 3 0 100 6 3 3 0 000-6z'
]

export const HurricaneIcon = memo(
  forwardRef(function HurricaneIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="hurricane" {...props} />
  })
)
