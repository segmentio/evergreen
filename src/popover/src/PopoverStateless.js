import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../layers'

const PopoverStateless = memo(
  forwardRef(({ children, ...props }, ref) => (
    <Card
      ref={ref}
      role="dialog"
      elevation={3}
      overflow="hidden"
      minWidth={200}
      backgroundColor="white"
      {...props}
    >
      {children}
    </Card>
  ))
)

PopoverStateless.propTypes = {
  /**
   * Composes the Card as the base.
   */
  ...Card.propTypes,

  /**
   * The content of the Popover.
   */
  children: PropTypes.node
}

export default PopoverStateless
