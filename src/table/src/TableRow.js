import React, { memo, forwardRef, useState } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useMergedRef } from '../../hooks'
import useStyleConfig from '../../hooks/use-style-config'
import { Pane } from '../../layers'
import manageTableRowFocusInteraction from './manageTableRowFocusInteraction'
import { TableRowProvider } from './TableRowContext'

const noop = () => {}

export const pseudoSelectors = {
  _hover: '&[data-isselectable="true"]:not(:active):not([aria-current="true"]):not([aria-checked="true"]):not(:focus):not(:active):hover',
  _focus: '&[data-isselectable="true"]:not([aria-checked="true"]):not([aria-current="true"]):focus, &[aria-selected="true"]',
  _active: '&[aria-current="true"], &[data-isselectable="true"]:active',
  _current: '&[aria-current="true"], &[aria-checked="true"]',
  _isSelectable: '&[data-isselectable="true"]'
}

const internalStyles = {
  display: 'flex'
}

const TableRow = memo(
  forwardRef(function TableRow(props, forwardedRef) {
    const {
      className,
      children,
      intent = 'none',
      appearance = 'default',
      tabIndex = -1,

      // Filter out
      onClick,
      onKeyPress = noop,
      onSelect = noop,
      onDeselect = noop,

      isHighlighted,
      isSelectable,
      isSelected,
      ...rest
    } = props

    const [mainRef, setMainRef] = useState()
    const onRef = useMergedRef(setMainRef, forwardedRef)

    const handleClick = e => {
      if (typeof onClick === 'function') {
        onClick(e)
      }

      if (isSelectable) {
        if (isSelected) {
          onDeselect()
        } else {
          onSelect()
        }
      }
    }

    const handleKeyDown = e => {
      if (isSelectable) {
        const { key } = e
        if (key === 'Enter' || key === ' ') {
          onSelect()
          e.preventDefault()
        } else if (key === 'ArrowUp' || key === 'ArrowDown') {
          try {
            manageTableRowFocusInteraction(key, mainRef)
          } catch (_) {}
        } else if (key === 'Escape') {
          if (mainRef && mainRef instanceof Node) mainRef.blur()
        }
      }

      onKeyPress(e)
    }

    const { className: themedClassName, height: themeHeight, ...boxProps } = useStyleConfig(
      'TableRow',
      { appearance, intent },
      pseudoSelectors,
      internalStyles
    )

    const height = rest.height || themeHeight

    return (
      <TableRowProvider height={height}>
        <Pane
          ref={onRef}
          className={cx(themedClassName, className)}
          aria-selected={isHighlighted}
          aria-current={isSelected}
          data-isselectable={isSelectable}
          tabIndex={isSelectable ? tabIndex : undefined}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          borderBottom="muted"
          height={height}
          {...boxProps}
          {...rest}
        >
          {children}
        </Pane>
      </TableRowProvider>
    )
  })
)

TableRow.propTypes = {
  /**
   * Composes the Pane component as the base.
   */
  ...Pane.propTypes,

  /**
   * The height of the row. Remember to add paddings when using "auto".
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onDeselect: PropTypes.func,

  /**
   * Makes the TableRow selectable.
   */
  isSelectable: PropTypes.bool,

  /**
   * Makes the TableRow selected.
   */
  isSelected: PropTypes.bool,

  /**
   * Manually set the TableRow to be highlighted.
   */
  isHighlighted: PropTypes.bool,

  /**
   * The intent of the alert.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: PropTypes.string,

  /**
   * Class name passed to the table row.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

export default TableRow
