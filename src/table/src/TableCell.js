import React, { memo, forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { toaster } from '../../toaster'
import { useTheme } from '../../theme'
import { Pane } from '../../layers'
import safeInvoke from '../../lib/safe-invoke'
import { useMergedRef } from '../../hooks'
import { TableRowConsumer } from './TableRowContext'
import manageTableCellFocusInteraction from './manageTableCellFocusInteraction'

function executeArrowKeyOverride(override) {
  if (!override) {
    return
  }

  if (typeof override === 'function') {
    override()
    return
  }

  if (typeof override === 'string') {
    document.querySelector(override).focus()
    return
  }

  // This needs to be the node, not a React ref.
  override.focus()
}

const TableCell = memo(
  forwardRef(function TableCell(props, forwardedRef) {
    const {
      children,
      appearance = 'default',
      onClick,
      onKeyPress,
      onKeyDown,
      isSelectable,
      tabIndex = -1,
      className,
      rightView,
      arrowKeysOverrides,
      ...rest
    } = props
    const theme = useTheme()
    const [cellRef, setCellRef] = useState(null)
    const handleRef = useMergedRef(setCellRef, forwardedRef)

    const styles = {
      paddingX: 12,
      boxSizing: 'border-box',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      overflow: 'hidden'
    }

    const handleKeyDown = e => {
      const { arrowKeysOverrides = {} } = props

      if (isSelectable) {
        const { key } = e
        if (
          key === 'ArrowUp' ||
          key === 'ArrowDown' ||
          key === 'ArrowLeft' ||
          key === 'ArrowRight'
        ) {
          e.preventDefault()
          try {
            // Support arrow key overrides.
            const override =
              arrowKeysOverrides[key.slice('Arrow'.length).toLowerCase()]
            if (override === false) return
            if (override) return executeArrowKeyOverride(override)

            manageTableCellFocusInteraction(key, cellRef)
          } catch (error) {
            toaster.danger('Keyboard interaction not possible')
            console.error('Keyboard interaction not possible', error)
          }
        } else if (key === 'Escape') {
          if (cellRef && cellRef instanceof Node) cellRef.blur()
        }
      }

      safeInvoke(onKeyDown, e)
    }

    const themedClassName = theme.getTableCellClassName(appearance)

    return (
      <TableRowConsumer>
        {height => {
          return (
            <Pane
              ref={handleRef}
              height={height}
              className={cx(themedClassName, className)}
              tabIndex={isSelectable ? tabIndex : undefined}
              data-isselectable={isSelectable}
              onClick={onClick}
              onKeyDown={handleKeyDown}
              {...styles}
              {...rest}
            >
              {children}
              {rightView ? rightView : null}
            </Pane>
          )
        }}
      </TableRowConsumer>
    )
  })
)

TableCell.propTypes = {
  /**
   * Composes the Pane component as the base.
   */
  ...Pane.propTypes,

  /*
   * Makes the TableCell focusable. Used by EditableCell.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: PropTypes.bool,

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: PropTypes.string,

  /**
   * Optional node to be placed on the right side of the table cell.
   * Useful for icons and icon buttons.
   */
  rightView: PropTypes.node,

  /**
   * Advanced arrow keys overrides for selectable cells.
   * A string will be used as a selector.
   */
  arrowKeysOverrides: PropTypes.shape({
    up: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.element,
      PropTypes.oneOf([false])
    ]),
    down: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.element,
      PropTypes.oneOf([false])
    ]),
    left: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.element,
      PropTypes.oneOf([false])
    ]),
    right: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.element,
      PropTypes.oneOf([false])
    ])
  }),

  /**
   * Class name passed to the table cell.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

export default TableCell
