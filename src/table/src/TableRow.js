import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Pane } from '../../layers'
import { useTheme } from '../../theme'
import safeInvoke from '../../lib/safe-invoke'
import { TableRowProvider } from './TableRowContext'
import manageTableRowFocusInteraction from './manageTableRowFocusInteraction'

const TableRow = memo(props => {
  const {
    innerRef,
    className,
    height = 48,
    children,
    intent = 'none',
    appearance = 'default',
    tabIndex = -1,

    // Filter out
    onClick,
    onKeyPress = () => {},
    onSelect = () => {},
    onDeselect = () => {},

    isHighlighted,
    isSelectable,
    isSelected,
    ...rest
  } = props

  const theme = useTheme()
  let mainRef

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
        if (mainRef) mainRef.blur()
      }
    }

    onKeyPress(e)
  }

  const onRef = ref => {
    mainRef = ref
    safeInvoke(innerRef, ref)
  }

  const themedClassName = theme.getRowClassName(appearance, intent)

  return (
    <TableRowProvider height={height}>
      <Pane
        innerRef={onRef}
        className={cx(themedClassName, className)}
        display="flex"
        aria-selected={isHighlighted}
        aria-current={isSelected}
        data-isselectable={isSelectable}
        tabIndex={isSelectable ? tabIndex : undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        height={height}
        borderBottom="muted"
        {...rest}
      >
        {children}
      </Pane>
    </TableRowProvider>
  )
})

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
