import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M1 8h3.76l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm14.49-4.01c.31-.32.51-.76.51-1.24C16 1.78 15.22 1 14.25 1c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.45-1.43zM1 4h7.76l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm0 6c-.55 0-1 .45-1 1 0 .48.35.86.8.96L2.76 10H1zm9.95-6.43l-6.69 6.69 2.47 2.47 6.69-6.69-2.47-2.47zm4.25 2.47L13.24 8H15c.55 0 1-.45 1-1 0-.48-.35-.86-.8-.96zM2 15l3.86-1.39-2.46-2.44L2 15zm13-5h-3.76l-2 2H15c.55 0 1-.45 1-1s-.45-1-1-1z'
]
const svgPaths20 = [
  'M1 12h4.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm16.77-3.94l1.65-1.65c.36-.36.58-.86.58-1.41 0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.82zM1 4h12.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zM0 15c0 .55.45 1 1 1h.34l2-2H1c-.55 0-1 .45-1 1zm1-7h8.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 2h-.34l-2 2H19c.55 0 1-.45 1-1s-.45-1-1-1zm0 4h-4.34l-2 2H19c.55 0 1-.45 1-1s-.45-1-1-1zM4 19l4.41-1.59-2.81-2.79L4 19zM14.23 5.94l-7.65 7.65 2.83 2.83 7.65-7.65-2.83-2.83z'
]

export const ManuallyEnteredDataIcon = memo(
  forwardRef(function ManuallyEnteredDataIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="manually-entered-data"
        {...props}
      />
    )
  })
)
