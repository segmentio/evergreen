import React, { memo, useState } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import ScrollbarSize from './ScrollbarSize'

const emptyObject = {}

const internalStyles = {
  display: 'flex',
  flexShrink: 0
}

const TableHead = memo(function TableHead(props) {
  const { accountForScrollbar = true, children, className, ...rest } = props
  const [scrollbarWidth, setScrollBarWidth] = useState(0)

  const { className: themedClassName, height: themeHeight, ...boxProps } = useStyleConfig(
    'TableHead',
    emptyObject,
    emptyObject,
    internalStyles
  )

  const height = rest.height || themeHeight

  return (
    <Pane
      paddingRight={scrollbarWidth}
      className={cx(themedClassName, className)}
      height={height}
      {...boxProps}
      {...rest}
    >
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
