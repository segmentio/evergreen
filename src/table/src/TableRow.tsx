import React, { memo, forwardRef, useRef, useCallback } from 'react'
import cx from 'classnames'
import { PolymorphicBoxProps } from 'ui-box'
import { useClickable, useLatest, useMergedRef, useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import { PaneOwnProps } from '../../layers/src/Pane'
import safeInvoke from '../../lib/safe-invoke'
import { DefaultAppearance } from '../../types'
import { IntentTypes } from '../../types/theme/intent-types'
import { Theme } from '../../types/theme/theme'
import manageTableRowFocusInteraction from './manageTableRowFocusInteraction'

export interface TableRowOwnProps extends PaneOwnProps {
  /**
   * The height of the row. Remember to add paddings when using "auto".
   */
  height?: number | string
  /**
   * Makes the TableRow selectable.
   */
  isSelectable?: boolean
  /**
   * Makes the TableRow selected.
   */
  isSelected?: boolean
  /**
   * Manually set the TableRow to be highlighted.
   */
  isHighlighted?: boolean
  /**
   * The intent of the alert.
   */
  intent?: IntentTypes
  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance?: DefaultAppearance
  /**
   * Theme provided by ThemeProvider.
   */
  theme?: Theme
  /**
   * Class name passed to the table row.
   * Only use if you know what you are doing.
   */
  className?: string
  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect?(): void
  /**
   * Function that is called on click and enter/space keypress.
   */
  onDeselect?(): void
}

export type TableRowProps = PolymorphicBoxProps<'div', TableRowOwnProps>

const noop = () => {}

export const pseudoSelectors = {
  _hover:
    '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):not(:focus):not(:active):hover',
  _focus:
    '&[data-isselectable="true"]:not([aria-checked="true"]):not([aria-current="true"]):focus, &[aria-selected="true"]',
  _active: '&[aria-current="true"], &[data-isselectable="true"]:active',
  _current: '&[aria-current="true"], &[aria-checked="true"]',
  _lastOfType: '&:last-of-type',
  _isSelectable: '&[data-isselectable="true"]'
}

const internalStyles = {
  display: 'flex'
}

const TableRow: React.FC<TableRowProps> = memo(
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
            // @ts-expect-error ts-migrate(2358) FIXME: The left-hand side of an 'instanceof' expression m... Remove this comment to see the full error message
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

export default TableRow
