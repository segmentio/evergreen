import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm1 4H0V3h16v2zm-3-2h-2V1h2v2z'
]
const svgPaths20 = ['M20 5v13a1 1 0 01-1 1H1a1 1 0 01-1-1V5h20zm-3-4h2a1 1 0 011 1v1h-3V1zm-2 2H0V2a1 1 0 011-1h14v2z']

export const ModalFilledIcon = memo(
  forwardRef(function ModalFilledIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="modal-filled" {...props} />
  })
)
