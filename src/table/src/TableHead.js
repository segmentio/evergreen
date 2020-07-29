import React, { memo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import ScrollbarSize from './ScrollbarSize'

const TableHead = memo(function TableHead(props) {
  const { children, height = 32, accountForScrollbar = true, ...rest } = props
  const [scrollbarWidth, setScrollBarWidth] = useState(0)

  const handleScrollbarSize = useCallback(width => {
    setScrollBarWidth(width)
  })

  return (
    <Pane
      display="flex"
      flexShrink={0}
      paddingRight={scrollbarWidth}
      borderBottom="default"
      background="tint2"
      height={height}
      {...rest}
    >
      {children}{' '}
      {accountForScrollbar && (
        <ScrollbarSize handleScrollbarSize={handleScrollbarSize} />
      )}
    </Pane>
  )
})

TableHead.propTypes = {
  /**
   * Composes the Pane component as the base.
   */
  ...Pane.propTypes,

  /**
   * The height of the table head.
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * This should always be true if you are using TableHead together with a TableBody.
   * Because TableBody has `overflowY: scroll` by default.
   */
  accountForScrollbar: PropTypes.bool
}

export default TableHead
