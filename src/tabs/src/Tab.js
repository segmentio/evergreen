import PropTypes from 'prop-types'
import React, { forwardRef, memo } from 'react'
import safeInvoke from '../../lib/safe-invoke'
import warning from '../../lib/warning'
import { useTheme } from '../../theme'
import { Text } from '../../typography'

const styles = {
  display: 'inline-flex',
  fontWeight: 500,
  paddingX: 8,
  marginX: 4,
  borderRadius: 3,
  lineHeight: '28px',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  tabIndex: 0
}

const Tab = memo(
  forwardRef((props, ref) => {
    const theme = useTheme()

    const {
      appearance,
      disabled = false,
      height = 28,
      is = 'span',
      isSelected,
      onKeyPress = () => {},
      onSelect = () => {},
      ...rest
    } = props

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

    const textSize = theme.getTextSizeForControlHeight(height)

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
        className={theme.getTabClassName(appearance)}
        is={is}
        size={textSize}
        height={height}
        ref={ref}
        {...styles}
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
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string
}

export default Tab
