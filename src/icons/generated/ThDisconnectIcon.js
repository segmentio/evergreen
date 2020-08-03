import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M12 1h3c.6 0 1 .5 1 1v12c0 .6-.4 1-1 1h-4.97l.286-2H14v-2h-3.398l.143-1H14V8h-2.97l.143-1H14V5h-2.541l.51-3.576C11.99 1.282 12 1.14 12 1zM5.97 1l-.572 4H2v2h3.112L4.97 8H2v2h2.684l-.143 1H2v2h2.255l-.225 1.576c-.02.142-.03.284-.03.424H1c-.6 0-1-.4-1-1V2c0-.5.4-1 1-1h4.97zM8.01.859a1 1 0 111.98.282l-2 14a1 1 0 11-1.98-.282l2-14z'
]
const svgPaths20 = [
  'M14.25 1H19c.5 0 1 .5 1 1v16c0 .5-.5 1-1 1h-7.221l.278-2H18v-3h-5.527l.14-1H18v-3h-4.971l.139-1H18V6h-4.416l.637-4.587c.02-.139.03-.277.03-.413zM8.221 1l-.694 5H2v3h5.11l-.139 1H2v3h4.555l-.14 1H2v3h3.999l-.22 1.587c-.02.139-.03.277-.03.413H1c-.6 0-1-.5-1-1V2c0-.5.4-1 1-1h7.221zM10.26.862a1 1 0 011.98.276l-2.5 18a1 1 0 01-1.98-.276l2.5-18z'
]

export const ThDisconnectIcon = memo(
  forwardRef(function ThDisconnectIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="th-disconnect"
        {...props}
      />
    )
  })
)
