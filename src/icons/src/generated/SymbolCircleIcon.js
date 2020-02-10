import React, { memo, forwardRef } from 'react'
import Icon from '../Icon'

const svgPaths16 = ['M8 3.01a5 5 0 100 10 5 5 0 100-10z']
const svgPaths20 = ['M10 4.01a6 6 0 100 12 6 6 0 100-12z']

function SymbolCircleIcon({ ...props }, ref) {
  return (
    <Icon
      svgPaths16={svgPaths16}
      svgPaths20={svgPaths20}
      ref={ref}
      {...props}
    />
  )
}

export default memo(forwardRef(SymbolCircleIcon))
