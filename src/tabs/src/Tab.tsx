import React, { forwardRef, memo, useCallback } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useClickable, useLatest, useStyleConfig } from '../../hooks'
import safeInvoke from '../../lib/safe-invoke'
import warning from '../../lib/warning'
import { Text } from '../../typography'

const noop = () => {}

const getInternalStyles = direction => ({
  alignItems: 'center',
  justifyContent: direction === 'horizontal' ? 'center' : 'flex-start',
  textDecoration: 'none',
  cursor: 'pointer',
  outline: 'none',
  WebkitFontSmoothing: 'antialiased',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  '&::-moz-focus-inner ': {
    border: 0
  },
  display: direction === 'horizontal' ? 'inline-flex' : 'flex',
  width: direction === 'horizontal' ? 'auto' : '100%'
})

const pseudoSelectors = {
  _active: '&:active',
  _after: '&:after',
  _before: '&:before',
  _current: '&[aria-current="page"], &[aria-selected="true"]',
  _disabled: '&[aria-disabled="true"]',
  _focus: '&:focus',
  _hover: '&:hover'
}

const Tab = memo(
  forwardRef(function Tab(props, ref) {
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
      { appearance, direction },
      pseudoSelectors,
      getInternalStyles(direction)
    )

    const onClickRef = useLatest(props.onClick)
    const handleClick = useCallback(
      event => {
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
        'aria-disabled': true
      }
    }

    if (is === 'a') {
      // Use aria-current when it's a link
      // https://tink.uk/using-the-aria-current-attribute/
      elementBasedProps = isSelected
        ? {
            ...elementBasedProps,
            'aria-current': 'page'
          }
        : {}
    } else {
      // Use a role="tablist" around the tabs
      // Also pass down a aria-controls="panelId"
      // https://www.stefanjudis.com/blog/aria-selected-and-when-to-use-it/
      elementBasedProps = {
        ...elementBasedProps,
        'aria-selected': isSelected,
        role: 'tab'
      }
    }

    return (
      <Text
        className={cx(className, themedClassName)}
        is={is}
        size={300}
        height={height}
        ref={ref}
        tabIndex={0}
        {...boxProps}
        {...rest}
        onClick={handleClick}
        {...clickableProps}
        {...elementBasedProps}
      />
    )
  })
)

Tab.propTypes = {
  /**
   * Composes the Text component as the base.
   */
  ...Text.propTypes,

  /**
   * Function triggered when tab is selected.
   */
  onSelect: PropTypes.func,

  /**
   * When true, the tab is selected.
   */
  isSelected: PropTypes.bool,

  /**
   * The appearance of the tab.
   * The default theme has primary, and secondary. The default is secondary
   */
  appearance: PropTypes.string,

  /**
   * The directionality of the tab.
   * If the tab is apart of a vertical or horizontal list
   */
  direction: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * Class name passed to the Tab.
   * Only use this if you know what you are doing.
   */
  className: PropTypes.string
}

export default Tab
