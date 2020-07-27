import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = ['M8 3.01a5 5 0 100 10 5 5 0 100-10z']
const svgPaths20 = ['M10 4.01a6 6 0 100 12 6 6 0 100-12z']

export const SymbolCircleIcon = memo(
  forwardRef(function SymbolCircleIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="symbol-circle"
        {...props}
      />
    )
  })
)
