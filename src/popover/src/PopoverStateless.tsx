import React, { memo, forwardRef } from 'react'
import { Card } from '../../layers'
import { CardProps } from '../../layers/src/Card'

export type PopoverStatelessProps = CardProps

const PopoverStateless: React.FC<PopoverStatelessProps> = memo(
  forwardRef(function PopoverStateless(props, ref) {
    const { children, ...rest } = props

    return (
      <Card role="dialog" elevation={3} overflow="hidden" minWidth={200} backgroundColor="white" ref={ref} {...rest}>
        {children}
      </Card>
    )
  })
)

export default PopoverStateless
