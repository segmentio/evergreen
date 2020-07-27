import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M12 3.01H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.56-.45-1-1-1z'
]
const svgPaths20 = [
  'M15 4.01H5c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10c0-.56-.45-1-1-1z'
]

export const SymbolSquareIcon = memo(
  forwardRef(function SymbolSquareIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="symbol-square"
        {...props}
      />
    )
  })
)
