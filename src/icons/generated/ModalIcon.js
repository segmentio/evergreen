import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15 1a1 1 0 011 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1h14zm-1 4H2v8h12V5zm-3-3H9v2h2V2zm3 0h-2v2h2V2z'
]
const svgPaths20 = [
  'M19 1a1 1 0 011 1v16a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1h18zm-1 4H2v12h16V5zm-3-3h-2v2h2V2zm3 0h-2v2h2V2z'
]

export const ModalIcon = memo(
  forwardRef(function ModalIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="modal" {...props} />
  })
)
