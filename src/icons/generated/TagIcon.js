import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M1 3a2 2 0 012-2h4.584a2 2 0 011.414.586l5.413 5.412a2 2 0 010 2.829L9.827 14.41a2 2 0 01-2.829 0L1.586 8.998A2 2 0 011 7.584V3zm3.487-.007a1.494 1.494 0 100 2.988 1.494 1.494 0 000-2.988z'
]
const svgPaths20 = [
  'M2 4a2 2 0 012-2h4.588a2 2 0 011.414.586l7.41 7.41a2 2 0 010 2.828l-4.588 4.588a2 2 0 01-2.829 0l-7.41-7.41A2 2 0 012 8.588V4zm3.489-.006a1.495 1.495 0 100 2.99 1.495 1.495 0 000-2.99z'
]

export const TagIcon = memo(
  forwardRef(function TagIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="tag"
        {...props}
      />
    )
  })
)
