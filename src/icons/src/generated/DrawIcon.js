import React, { memo, forwardRef } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M14.9 11c-.3 0-.5.1-.7.3l-3 3c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1zm-1-1v-.2l-1-5c-.1-.3-.3-.6-.6-.7l-11-4-.3.3 5.8 5.8c.2-.1.4-.2.6-.2.8 0 1.5.7 1.5 1.5S8.3 9 7.4 9s-1.5-.7-1.5-1.5c0-.2.1-.4.2-.6L.3 1.1l-.3.3 4 11c.1.3.4.6.7.6l5 1h.2c.3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7z'
]
const svgPaths20 = [
  'M17.7 12.7c0-.1 0-.2-.1-.3l-2-7c-.1-.3-.3-.6-.6-.7L1.8 0l-.6.5L7.7 7c.3-.2.6-.3 1-.3 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-.4.1-.7.3-1L.5 1.2l-.5.6L4.7 15c.1.3.4.5.7.6l7 2c.1 0 .2.1.3.1.3 0 .5-.1.7-.3l4-4c.2-.2.3-.5.3-.7zm1 1c-.3 0-.5.1-.7.3l-4 4c-.2.2-.3.4-.3.7 0 .5.4 1 1 1 .3 0 .5-.1.7-.3l4-4c.2-.2.3-.4.3-.7 0-.6-.5-1-1-1z'
]

export const DrawIcon = memo(
  forwardRef((props, ref) => (
    <Icon
      svgPaths16={svgPaths16}
      svgPaths20={svgPaths20}
      ref={ref}
      {...props}
    />
  ))
)
