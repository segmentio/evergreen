import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import ScrollbarSize from './ScrollbarSize'

const emptyObject = {}

const pseudoSelectors = {
  _firstOfType: '&:first-of-type'
}

const internalStyles = {
  display: 'flex',
  flexShrink: 0
}

const TableHead = memo(function TableHead(props) {
  const { accountForScrollbar = true, children, className, ...rest } = props
  const [scrollbarWidth, setScrollBarWidth] = useState(0)

  const { height: themeHeight, ...themedProps } = useStyleConfig(
    'TableHead',
    emptyObject,
    pseudoSelectors,
    internalStyles
  )

  const height = rest.height || themeHeight

  return (
    <Pane paddingRight={scrollbarWidth} className={className} height={height} {...themedProps} {...rest}>
      {children} {accountForScrollbar && <ScrollbarSize handleScrollbarSize={setScrollBarWidth} />}
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
