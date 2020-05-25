import React, { memo, forwardRef } from 'react'
import { Pane } from '../../layers'

const TableBody = memo(
  forwardRef(({ children, ...props }, ref) => {
    return (
      <Pane
        data-evergreen-table-body
        flex="1"
        overflowY="auto"
        ref={ref}
        {...props}
      >
        {children}
      </Pane>
    )
  })
)

TableBody.propTypes = {
  /**
   * Composes the Pane component as the base.
   */
  ...Pane.propTypes
}

export default TableBody
