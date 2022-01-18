import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M.5 2a.5.5 0 01.5.5V4h7V3H2.5a.5.5 0 010-1h13a.5.5 0 010 1H10v1h1c2.26 0 4 1.79 4 4 0 1.87-1.247 3.44-3 3.878V13h.382l1.894-.947a.5.5 0 11.448.894L12.618 14H4.5a.5.5 0 010-1H7v-2.306C5.749 9.736 5 8.368 5 7L1 6v1.5a.5.5 0 01-1 0v-5A.5.5 0 01.5 2zM8 11.316V13h3v-1a6.73 6.73 0 01-3-.684zM11 5v3h3a3 3 0 00-3-3z'
]
const svgPaths20 = [
  'M10 3v2H1V3.5a.5.5 0 00-1 0v5a.5.5 0 001 0V7l5 2c0 1.54.824 3.575 3 4.835V16H5.5a.5.5 0 100 1H16.5a.5.5 0 00.224-.053l2-1a.5.5 0 10-.448-.894L16.382 16H15v-1.1A5.002 5.002 0 0014 5h-1V3h6.5a.5.5 0 000-1h-16a.5.5 0 000 1H10zm4 13v-1c-1.608 0-2.928-.258-4-.683V16h4zm0-6V6a4 4 0 014 4h-4z'
]

export const HelicopterIcon = memo(
  forwardRef(function HelicopterIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="helicopter" {...props} />
  })
)
