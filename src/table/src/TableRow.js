import React, { memo, forwardRef, useRef, useCallback } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useClickable, useLatest, useMergedRef, useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import safeInvoke from '../../lib/safe-invoke'
import manageTableRowFocusInteraction from './manageTableRowFocusInteraction'

const noop = () => {}

export const pseudoSelectors = {
  _hover:
    '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):not(:focus):not(:active):hover',
  _focus:
    '&[data-isselectable="true"]:not([aria-checked="true"]):not([aria-current="true"]):focus, &[aria-selected="true"]',
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

      onClick,
      onKeyDown = noop,
      onSelect = noop,
      onDeselect = noop,

      isHighlighted,
      isSelectable,
      isSelected,
      ...rest
    } = props

    const mainRef = useRef()
    const onRef = useMergedRef(mainRef, forwardedRef)

    const onClickRef = useLatest(onClick)
    const onKeyDownRef = useLatest(onKeyDown)
    const onDeselectRef = useLatest(onDeselect)
    const onSelectRef = useLatest(onSelect)

    const handleClick = useCallback(
      event => {
        safeInvoke(onClickRef.current, event)

        if (isSelectable) {
          if (isSelected) {
            safeInvoke(onDeselectRef.current)
          } else {
            safeInvoke(onSelectRef.current)
          }
        }
      },
      // These "missing" deps are all refs
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [isSelected, isSelectable]
    )

    const handleKeyDown = useCallback(
      event => {
        safeInvoke(onKeyDownRef.current, event)

        if (isSelectable) {
          if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            try {
              manageTableRowFocusInteraction(event.key, mainRef.current)
            } catch (_) {}
          } else if (event.key === 'Escape') {
            if (mainRef.current && mainRef.current instanceof Node) mainRef.current.blur()
          }
        }
      },
      // These "missing" deps are all refs
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [isSelectable]
    )

    const clickable = useClickable({ onKeyDown: handleKeyDown, tabIndex })

    const { className: themedClassName, height: themeHeight, ...boxProps } = useStyleConfig(
      'TableRow',
      { appearance, intent },
      pseudoSelectors,
      internalStyles
    )

    const height = rest.height || themeHeight

    return (
      <Pane
        ref={onRef}
        className={cx(themedClassName, className)}
        aria-selected={isHighlighted}
        aria-current={isSelected}
        data-isselectable={isSelectable}
        tabIndex={isSelectable ? clickable.tabIndex : undefined}
        onClick={handleClick}
        onKeyDown={clickable.onKeyDown}
        borderBottom="muted"
        height={height}
        {...boxProps}
        {...rest}
      >
        {children}
      </Pane>
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
