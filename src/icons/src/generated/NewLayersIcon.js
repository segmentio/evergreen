import React, { memo, forwardRef } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13 3h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V5H9a1 1 0 110-2h2V1a1 1 0 012 0v2zm-3-1.983V2H9a2 2 0 100 4h1v1c0 .279.057.544.16.785l-1.71.855c-.14.07-.29.11-.45.11-.16 0-.31-.04-.45-.11l-7-3.5a.992.992 0 01.07-1.81l6.99-3a1.006 1.006 0 01.79 0l1.6.687zm.91 7.66a2 2 0 003.085-1.54l.555-.277c.14-.07.29-.11.45-.11.55 0 1 .45 1 1 0 .39-.23.73-.55.89l-7 3.5c-.14.07-.29.11-.45.11-.16 0-.31-.04-.45-.11l-7-3.5C.23 8.48 0 8.14 0 7.75c0-.55.45-1 1-1 .16 0 .31.04.45.11L8 10.13l2.91-1.453zM15 10.25c.55 0 1 .45 1 1 0 .39-.23.73-.55.89l-7 3.5c-.14.07-.29.11-.45.11-.16 0-.31-.04-.45-.11l-7-3.5c-.32-.16-.55-.5-.55-.89 0-.55.45-1 1-1 .16 0 .31.04.45.1L8 13.63l6.55-3.27c.14-.07.29-.11.45-.11z'
]
const svgPaths20 = [
  'M17 3h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V5h-2a1 1 0 010-2h2V1a1 1 0 012 0v2zm-1.252 5.984L10.5 11.9c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5C.2 6.7 0 6.4 0 6s.2-.7.5-.9l9-5c.2-.1.3-.1.5-.1s.3 0 .5.1L13.92 2H13a2 2 0 100 4h1v1a2 2 0 001.748 1.984zm2.07-1.15C17.935 7.58 18 7.298 18 7V6h1c.353 0 .684-.091.972-.251.018.078.028.162.028.251 0 .4-.2.7-.5.9l-1.682.934zM19 9c.6 0 1 .4 1 1 0 .4-.2.7-.5.9l-9 5c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5c-.3-.2-.5-.5-.5-.9 0-.6.4-1 1-1 .2 0 .3 0 .5.1l8.5 4.8 8.5-4.8c.2-.1.3-.1.5-.1zm0 4c.6 0 1 .4 1 1 0 .4-.2.7-.5.9l-9 5c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5c-.3-.2-.5-.5-.5-.9 0-.6.4-1 1-1 .2 0 .3 0 .5.2l8.5 4.7 8.5-4.8c.2-.1.3-.1.5-.1z'
]

export const NewLayersIcon = memo(
  forwardRef((props, ref) => (
    <Icon
      svgPaths16={svgPaths16}
      svgPaths20={svgPaths20}
      ref={ref}
      name="new-layers"
      {...props}
    />
  ))
)
