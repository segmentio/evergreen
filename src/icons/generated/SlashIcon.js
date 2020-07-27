import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M10 2a.99.99 0 00-.96.73l-2.99 9.96A1.003 1.003 0 007 14c.46 0 .85-.31.96-.73l2.99-9.96A1.003 1.003 0 0010 2z'
]
const svgPaths20 = [
  'M12 2c-.46 0-.85.32-.97.74L7.04 16.7c-.02.1-.04.2-.04.3 0 .55.45 1 1 1 .46 0 .85-.32.97-.74L12.96 3.3c.02-.1.04-.2.04-.3 0-.55-.45-1-1-1z'
]

export const SlashIcon = memo(
  forwardRef(function SlashIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="slash"
        {...props}
      />
    )
  })
)
