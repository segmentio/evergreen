import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M12.5 0a.5.5 0 01.5.5V9a1 1 0 011 1v2h.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H13v1a1 1 0 01-2 0v-1H5v1a1 1 0 01-2 0v-1H1.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H2v-2a1 1 0 011-1V.5a.5.5 0 011 0V3a2 2 0 012-2h4a2 2 0 012 2V.5a.5.5 0 01.5-.5zM9 8H7a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1zm3.5 3h-1a.5.5 0 100 1h1a.5.5 0 100-1zm-8 0h-1a.5.5 0 100 1h1a.5.5 0 100-1zM9 9a.5.5 0 01.5.5v1l-.008.09A.5.5 0 019 11H7l-.09-.008a.5.5 0 01-.41-.492v-1l.008-.09A.5.5 0 017 9zm2-5H5v2h6V4z'
]
const svgPaths20 = [
  'M16 0a1 1 0 011 1v11a1 1 0 011 1v3h.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H17v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1H1.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H2v-3a1 1 0 011-1V1a1 1 0 112 0v3a2 2 0 012-2h6a2 2 0 012 2V1a1 1 0 011-1zm-4 10H8a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zm-7 4H4a1 1 0 000 2h1a1 1 0 000-2zm11 0h-1a1 1 0 000 2h1a1 1 0 000-2zm-4.5 0a.5.5 0 110 1h-3l-.09-.008A.5.5 0 018.5 14zm0-1.5a.5.5 0 110 1h-3l-.09-.008a.5.5 0 01.09-.992zm0-1.5a.5.5 0 110 1h-3l-.09-.008A.5.5 0 018.5 11zM14 5H6v3h8V5z'
]

export const TruckIcon = memo(
  forwardRef(function TruckIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="truck"
        {...props}
      />
    )
  })
)
