import React, { memo, useState } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
// @ts-expect-error ts-migrate(1192) FIXME: Module '"/Users/brandon.scott/oss/fork/evergreen/s... Remove this comment to see the full error message
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
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'accountForScrollbar' does not exist on t... Remove this comment to see the full error message
  const { accountForScrollbar = true, children, className, ...rest } = props
  const [scrollbarWidth, setScrollBarWidth] = useState(0)

  const { className: themedClassName, height: themeHeight, ...boxProps } = useStyleConfig(
    'TableHead',
    emptyObject,
    pseudoSelectors,
    internalStyles
  )

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'height' does not exist on type '{}'.
  const height = rest.height || themeHeight

  return (
    // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
    <Pane
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
      paddingRight={scrollbarWidth}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      className={cx(themedClassName, className)}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      height={height}
      {...boxProps}
      {...rest}
    >
      {children} {accountForScrollbar && <ScrollbarSize handleScrollbarSize={setScrollBarWidth} />}
    </Pane>
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
TableHead.propTypes = {
  /**
   * Composes the Pane component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
