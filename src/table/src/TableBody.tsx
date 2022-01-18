import React, { memo, forwardRef } from 'react'
import { Pane } from '../../layers'

const TableBody = memo(
  forwardRef(function TableBody(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { children, ...rest } = props

    return (
      <Pane ref={ref} data-evergreen-table-body flex="1" overflowY="auto" {...rest}>
        {children}
      </Pane>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
TableBody.propTypes = {
  /**
   * Composes the Pane component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...Pane.propTypes
}

export default TableBody
