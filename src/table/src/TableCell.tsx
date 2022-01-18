import React, { memo, forwardRef, useRef, useCallback } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useLatest, useMergedRef, useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import safeInvoke from '../../lib/safe-invoke'
import { toaster } from '../../toaster'
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

const pseudoSelectors = {
  _focus: '&[data-isselectable="true"]:focus, &[aria-expanded="true"][aria-haspopup="true"]'
}

const internalStyles = {
  boxSizing: 'border-box',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  overflow: 'hidden'
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

    const cellRef = useRef(null)
    const handleRef = useMergedRef(cellRef, forwardedRef)
    const onKeyDownRef = useLatest(onKeyDown)

    const handleKeyDown = useCallback(
      e => {
        const arrowKeysOverrides = props.arrowKeysOverrides || {}

        if (isSelectable) {
          const { key } = e
          if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
            e.preventDefault()
            try {
              // Support arrow key overrides.
              const override = arrowKeysOverrides[key.slice('Arrow'.length).toLowerCase()]
              if (override === false) return
              if (override) return executeArrowKeyOverride(override)

              manageTableCellFocusInteraction(key, cellRef.current)
            } catch (error) {
              toaster.danger('Keyboard interaction not possible')
              console.error('Keyboard interaction not possible', error)
            }
          } else if (key === 'Escape') {
            if (cellRef.current instanceof Node) cellRef.current.blur()
          }
        }

        safeInvoke(onKeyDownRef.current, e)
      },
      // onKeyDownRef.current is a ref
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [isSelectable, props.arrowKeysOverrides]
    )

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'TableCell',
      { appearance },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Pane
        ref={handleRef}
        className={cx(themedClassName, className)}
        tabIndex={isSelectable ? tabIndex : undefined}
        data-isselectable={isSelectable}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        {...boxProps}
        {...rest}
      >
        {children}
        {rightView || null}
      </Pane>
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
    up: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])]),
    down: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])])
  }),

  /**
   * Class name passed to the table cell.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

export default TableCell
