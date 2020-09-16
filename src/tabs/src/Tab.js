import React, { forwardRef, memo } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import safeInvoke from '../../lib/safe-invoke'
import warning from '../../lib/warning'
import { Text } from '../../typography'

const noop = () => {}

const getInternalStyles = direction => ({
  alignItems: 'center',
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
  _hover: '&:hover',
  _current: '&[aria-current="page"], &[aria-selected="true"]',
  _focus: '&:focus',
  _active: '&:active',
  _before: '&:before',
  _after: '&:after'
}

const Tab = memo(
  forwardRef(function Tab(props, ref) {
    const {
      appearance = 'secondary',
      direction = 'horizontal',
      disabled = false,
      is = 'span',
      isSelected,
      onKeyPress = noop,
      onSelect = noop,
      height = 28,
      className,
      ...rest
    } = props

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Tab',
      { appearance },
      pseudoSelectors,
      getInternalStyles(direction)
    )

    const spacing =
      direction === 'horizontal'
        ? { marginRight: '8px' }
        : { marginBottom: '8px' }

    const handleClick = e => {
      safeInvoke(props.onClick, e)
      onSelect()
    }

    const handleKeyPress = e => {
      if (e.key === 'Enter' || e.key === ' ') {
        onSelect()
        e.preventDefault()
      }

      onKeyPress(e)
    }

    if (process.env.NODE_ENV !== 'production') {
      warning(
        typeof props.onClick === 'function',
        '<Tab> expects `onSelect` prop, but you passed `onClick`.'
      )
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
        {...spacing}
        {...boxProps}
        {...rest}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
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
