import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../layers'

const PopoverStateless = memo(
  forwardRef(function PopoverStateless(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { children, ...rest } = props

    return (
      <Card role="dialog" elevation={3} overflow="hidden" minWidth={200} backgroundColor="white" ref={ref} {...rest}>
        {children}
      </Card>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
PopoverStateless.propTypes = {
  /**
   * Composes the Card as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...Card.propTypes,

  /**
   * The content of the Popover.
   */
  children: PropTypes.node
}

export default PopoverStateless
