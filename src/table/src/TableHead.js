import React, { memo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import useStyleConfig from '../../hooks/use-style-config'
import { Pane } from '../../layers'
import ScrollbarSize from './ScrollbarSize'

const emptyObject = {}

const internalStyles = {
  display: 'flex',
  flexShrink: 0
}

const TableHead = memo(function TableHead(props) {
  const { accountForScrollbar = true, children, height = 32, ...rest } = props
  const [scrollbarWidth, setScrollBarWidth] = useState(0)

  const handleScrollbarSize = useCallback(width => {
    setScrollBarWidth(width)
  })

  const styles = useStyleConfig(
    'TableHead',
    emptyObject,
    emptyObject,
    internalStyles
  )

  return (
    <Pane paddingRight={scrollbarWidth} height={height} {...styles} {...rest}>
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
