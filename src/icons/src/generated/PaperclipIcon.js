import React, { memo, forwardRef } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M14.68 2.31A4.54 4.54 0 0011.46.99c-1.15 0-2.31.44-3.19 1.32L.95 9.63c-.63.63-.95 1.46-.95 2.28a3.21 3.21 0 003.23 3.22c.83 0 1.66-.31 2.3-.95l7.31-7.32c.76-.77.76-1.98.01-2.73s-1.99-.76-2.75 0l-6.07 6.08c-.24.25-.24.65.01.9s.65.25.91.01l6.07-6.08c.25-.25.67-.25.91-.01.25.25.25.67 0 .92l-7.31 7.32c-.75.75-2.04.74-2.76.01-.75-.75-.73-2.02.01-2.76L9.2 3.21c1.24-1.24 3.35-1.26 4.58-.03 1.24 1.24 1.24 3.36 0 4.6l-7.12 7.13c-.24.25-.24.64.01.88.24.24.63.24.88.01v.01l7.13-7.13A4.41 4.41 0 0016 5.51c0-1.16-.44-2.32-1.32-3.2z'
]
const svgPaths20 = [
  'M18.35 2.67A5.664 5.664 0 0014.33 1c-1.44 0-2.89.56-3.99 1.67l-9.16 9.27C.4 12.73 0 13.78 0 14.83s.39 2.1 1.18 2.9c.78.79 1.82 1.18 2.85 1.18 1.04 0 2.07-.39 2.87-1.2l9.14-9.27c.96-.96.96-2.5.02-3.45-.94-.95-2.49-.96-3.44 0l-7.59 7.69c-.31.32-.3.83.01 1.14.31.31.81.31 1.13.02l7.59-7.69c.31-.31.84-.31 1.13-.02.31.31.31.85 0 1.16l-9.14 9.27c-.93.95-2.54.93-3.45.02-.94-.95-.92-2.55.02-3.49l9.16-9.25c1.55-1.56 4.18-1.59 5.72-.03 1.56 1.57 1.55 4.26 0 5.82l-8.89 9.02c-.3.31-.3.81.01 1.11.3.3.79.31 1.1.01v.01l8.91-9.02A5.645 5.645 0 0020 6.73c0-1.48-.55-2.94-1.65-4.06z'
]

export const PaperclipIcon = memo(
  forwardRef((props, ref) => (
    <Icon
      svgPaths16={svgPaths16}
      svgPaths20={svgPaths20}
      ref={ref}
      {...props}
    />
  ))
)
