import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M5.92 8.139c.44-.282 1.006-.121 1.264.358l2.689 4.988c.083.155.127.33.127.51C10 14.55 9.587 15 9.077 15H3.924a.864.864 0 01-.438-.12c-.449-.263-.617-.873-.376-1.362l2.465-4.989c.08-.162.2-.297.346-.39zM12 4a3 3 0 110 6 3 3 0 010-6zM6 1a1 1 0 011 1v4a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h4z'
]
const svgPaths20 = [
  'M7.88 11.12a.958.958 0 011.277.33l3.719 6.207c.081.136.124.29.124.447 0 .495-.419.896-.936.896H4.936a.969.969 0 01-.436-.103.878.878 0 01-.392-1.21l3.409-6.208a.915.915 0 01.362-.36zM15 5a4 4 0 110 8 4 4 0 010-8zM8 1a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h6z'
]

export const ShapesIcon = memo(
  forwardRef(function ShapesIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="shapes" {...props} />
  })
)
