import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15.71 2.29l-2-2A.997.997 0 0013 0h-1v6H4V0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.28-.11-.53-.29-.71zM14 15H2V9c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v6zM11 1H9v4h2V1z'
]
const svgPaths20 = [
  'M14 1h-3v5h3V1zm5.71 2.29l-3-3A.997.997 0 0016 0h-1v7H5V0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V4c0-.28-.11-.53-.29-.71zM17 19H3v-8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8z'
]

export const FloppyDiskIcon = memo(
  forwardRef(function FloppyDiskIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="floppy-disk"
        {...props}
      />
    )
  })
)
