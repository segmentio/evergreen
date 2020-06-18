import React, { memo } from 'react'
import { Pane } from '../../layers'

const TableBody = memo(props => {
  const {children, ...rest} = props

  return (
    <Pane data-evergreen-table-body flex="1" overflowY="auto" {...rest}>
      {children}
    </Pane>
  )
})

TableBody.propTypes = {
  /**
   * Composes the Pane component as the base.
   */
  ...Pane.propTypes
}

export default TableBody
