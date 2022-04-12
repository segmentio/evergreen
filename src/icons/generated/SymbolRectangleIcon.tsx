import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = ['M13 4H3c-.5 0-1 .5-1 1v6c0 .5.5 1 1 1h10c.5 0 1-.5 1-1V5c0-.5-.5-1-1-1z']
const svgPaths20 = ['M16 5H4c-.5 0-1 .5-1 1v8c0 .5.5 1 1 1h12c.5 0 1-.5 1-1V6c0-.5-.5-1-1-1z']

export const SymbolRectangleIcon: IconComponent = memo(
  forwardRef(function SymbolRectangleIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="symbol-rectangle" {...props} />
  })
)
