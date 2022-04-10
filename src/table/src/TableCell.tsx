import React, { memo, forwardRef, useRef, useCallback } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useLatest, useMergedRef, useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import safeInvoke from '../../lib/safe-invoke'
import { toaster } from '../../toaster'
import manageTableCellFocusInteraction from './manageTableCellFocusInteraction'

function executeArrowKeyOverride(override: any) {
  if (!override) {
    return
  }

  if (typeof override === 'function') {
    override()
    return
  }

  if (typeof override === 'string') {
    // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
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
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...rest
    } = props

    const cellRef = useRef(null)
    const handleRef = useMergedRef(cellRef, forwardedRef)
    const onKeyDownRef = useLatest(onKeyDown)

    const handleKeyDown = useCallback(
      e => {
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'arrowKeysOverrides' does not exist on ty... Remove this comment to see the full error message
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
            // @ts-expect-error ts-migrate(2358) FIXME: The left-hand side of an 'instanceof' expression m... Remove this comment to see the full error message
            if (cellRef.current instanceof Node) cellRef.current.blur()
          }
        }

        safeInvoke(onKeyDownRef.current, e)
      },
      // onKeyDownRef.current is a ref
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'arrowKeysOverrides' does not exist on ty... Remove this comment to see the full error message
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [isSelectable, props.arrowKeysOverrides]
    )

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'TableCell',
      { appearance },
      pseudoSelectors,
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ boxSizing: string; flex: numbe... Remove this comment to see the full error message
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

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
TableCell.propTypes = {
  /**
   * Composes the Pane component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
