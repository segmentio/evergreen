import PropTypes from 'prop-types'
import React, { forwardRef, memo } from 'react'
import safeInvoke from '../../lib/safe-invoke'
import warning from '../../lib/warning'
import useTabApperance from '../../theme/src/hooks/useTabApperance'
import { Text } from '../../typography'

const noop = () => {}

const Tab = memo(
  forwardRef(function Tab(props, ref) {
    const {
      appearance = 'secondary',
      direction = 'horizontal',
      disabled = false,
      height = 28,
      is = 'span',
      isSelected,
      onKeyPress = noop,
      onSelect = noop,
      ...rest
    } = props

    const tabClassName = useTabApperance(appearance, direction)

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
        className={tabClassName}
        is={is}
        size={300}
        height={height}
        ref={ref}
        tabIndex={0}
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
  direction: PropTypes.oneOf(['horizontal', 'vertical'])
}

export default Tab
