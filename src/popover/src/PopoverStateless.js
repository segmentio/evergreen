import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../layers'

const PopoverStateless = memo(
  forwardRef(function PopoverStateless(props, ref) {
    const { children, ...rest } = props

    return (
      <Card
        role="dialog"
        elevation={3}
        overflow="hidden"
        minWidth={200}
        backgroundColor="white"
        ref={ref}
        {...rest}
      >
        {children}
      </Card>
    )
  })
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
