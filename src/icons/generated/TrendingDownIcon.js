import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15 7c-.55 0-1 .45-1 1v.59l-4.29-4.3A.997.997 0 009 4c-.16 0-.31.05-.44.11V4.1L5 5.88 1.45 4.11v.01C1.31 4.05 1.16 4 1 4c-.55 0-1 .45-1 1 0 .39.23.72.56.89v.01l4 2v-.01c.13.06.28.11.44.11s.31-.05.44-.11v.01L8.8 6.22 12.59 10H12c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M19 10c-.55 0-1 .45-1 1v1.37l-6.25-7.03-.01.01A.971.971 0 0011 5c-.23 0-.42.09-.59.21l-.01-.01-3.43 2.58-5.42-3.61-.01.01A.969.969 0 001 4c-.55 0-1 .45-1 1 0 .35.19.64.46.82l-.01.01 6 4 .01-.02c.15.11.33.19.54.19.23 0 .42-.09.59-.21l.01.01 3.26-2.45L16.77 14H15c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z'
]

export const TrendingDownIcon = memo(
  forwardRef(function TrendingDownIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="trending-down"
        {...props}
      />
    )
  })
)
