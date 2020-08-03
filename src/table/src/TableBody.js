import React, { memo, forwardRef } from 'react'
import { Pane } from '../../layers'

const TableBody = memo(
  forwardRef(function TableBody(props, ref) {
    const { children, ...rest } = props

    return (
      <Pane
        ref={ref}
        data-evergreen-table-body
        flex="1"
        overflowY="auto"
        {...rest}
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
