import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M8.1 2a5.023 5.023 0 000 2H3.66L1.95 8H4c.55 0 1 .45 1 1v1h6V9c0-.55.45-1 1-1h2.05c.708 0 1.352-.241 1.905-.645L16 7.46V13c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7.46l2.08-4.85C2.23 2.25 2.59 2 3 2h5.1zM13 6a3 3 0 110-6 3 3 0 010 6z'
]
const svgPaths20 = [
  'M10.083 3a6.04 6.04 0 00.001 2.009H4.65l-2.67 5.996H5c.55 0 1 .45 1 .999v1h8v-1c0-.55.45-1 1-1h3.02l-.53-1.19a5.97 5.97 0 001.824-.811L20 10.545v6.456c0 .55-.45.999-1 .999H1c-.55 0-1-.45-1-1v-6.455L3.08 3.62l.01-.02c.15-.35.5-.6.91-.6h6.083zM16 8a4 4 0 110-8 4 4 0 010 8z'
]

export const InboxUpdateIcon = memo(
  forwardRef(function InboxUpdateIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="inbox-update"
        {...props}
      />
    )
  })
)
