import React, { forwardRef, memo, useCallback } from 'react'
import cx from 'classnames'
import { PolymorphicBoxProps } from 'ui-box'
import { useClickable, useLatest, useStyleConfig } from '../../hooks'
import safeInvoke from '../../lib/safe-invoke'
import warning from '../../lib/warning'
import { ForwardedRef } from '../../types/forwarded-ref'
import { Text } from '../../typography'
import { TextOwnProps } from '../../typography/src/Text'

export interface TabOwnProps extends TextOwnProps {
  /**
   * When true, the tab is selected.
   */
  isSelected?: boolean
  disabled?: boolean
  /**
   * The appearance of the tab.
   * The default theme only comes with a default style.
   */
  appearance?: 'primary' | 'secondary'
  direction?: 'vertical' | 'horizontal'
  /**
   * Function triggered when tab is selected.
   */
  onSelect?(): void
}

export type TabProps<T extends React.ElementType<any> = 'span'> = PolymorphicBoxProps<T, TabOwnProps>

const noop = () => {}

const getInternalStyles = (direction: any) => ({
  alignItems: 'center',
  justifyContent: direction === 'horizontal' ? 'center' : 'flex-start',
  textDecoration: 'none',
  cursor: 'pointer',
  outline: 'none',
  WebkitFontSmoothing: 'antialiased',
  WebkitAppearance: 'none',
  MozAppearance: 'none',

  '&::-moz-focus-inner ': {
    border: 0,
  },

  display: direction === 'horizontal' ? 'inline-flex' : 'flex',
  width: direction === 'horizontal' ? 'auto' : '100%',
})

const pseudoSelectors = {
  _active: '&:active',
  _after: '&:after',
  _before: '&:before',
  _current: '&[aria-current="page"], &[aria-selected="true"]',
  _disabled: '&[aria-disabled="true"]',
  _focus: '&:focus',
  _hover: '&:hover',
}

const Tab = <T extends React.ElementType<any> = 'span'>(props: TabProps<T>, ref: ForwardedRef<T>) => {
  const {
    appearance = 'secondary',
    direction = 'horizontal',
    disabled = false,
    is = 'span',
    isSelected,
    onKeyDown = noop,
    onSelect = noop,
    height = 28,
    className,
    tabIndex,
    ...rest
  } = props

  const { className: themedClassName, ...boxProps } = useStyleConfig(
    'Tab',
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ appearance: "primary" | "secon... Remove this comment to see the full error message
    { appearance, direction },
    pseudoSelectors,
    getInternalStyles(direction)
  )

  const onClickRef = useLatest(props.onClick)
  const handleClick = useCallback(
    (event) => {
      safeInvoke(onClickRef.current, event)
      if (!disabled) {
        onSelect()
      }
    },
    // onClickRef is a ref, but eslint can't figure that out
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled, onSelect]
  )

  const clickableProps = useClickable({ disabled, onKeyDown, tabIndex })

  if (process.env.NODE_ENV !== 'production') {
    warning(typeof props.onClick === 'function', '<Tab> expects `onSelect` prop, but you passed `onClick`.')
  }

  let elementBasedProps
  if (disabled) {
    elementBasedProps = {
      'aria-disabled': true,
    }
  }

  if (is === 'a') {
    // Use aria-current when it's a link
    // https://tink.uk/using-the-aria-current-attribute/
    elementBasedProps = isSelected
      ? {
          ...elementBasedProps,
          'aria-current': 'page',
        }
      : {}
  } else {
    // Use a role="tablist" around the tabs
    // Also pass down a aria-controls="panelId"
    // https://www.stefanjudis.com/blog/aria-selected-and-when-to-use-it/
    elementBasedProps = {
      ...elementBasedProps,
      'aria-selected': isSelected,
      role: 'tab',
    }
  }

  return (
    <Text
      className={cx(className, themedClassName)}
      is={is}
      size={300}
      height={height}
      ref={ref}
      // @ts-expect-error ts-migrate(2783) FIXME: 'tabIndex' is specified more than once, so this us... Remove this comment to see the full error message
      tabIndex={0}
      {...boxProps}
      {...rest}
      onClick={handleClick}
      {...clickableProps}
      {...elementBasedProps}
    />
  )
}

export default memo(forwardRef(Tab))
