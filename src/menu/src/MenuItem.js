import React, { memo, forwardRef, useMemo, useCallback } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useClickable, useStyleConfig } from '../../hooks'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { Pane } from '../../layers'
import { Text } from '../../typography'

const noop = () => {}

const pseudoSelectors = {
  _hover:
    '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):not(:focus):not(:active):hover',
  _focus:
    '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):focus, &[aria-selected="true"]',
  _active: '&[aria-current="true"], &[data-isselectable="true"]:active',
  _current: '&[aria-current="true"], &[aria-checked="true"]',
  _isSelectable: '&[data-isselectable="true"]',
  _disabled: '&:disabled, &[aria-disabled="true"]'
}

const internalStyles = {
  display: 'flex',
  alignItems: 'center'
}

const MenuItem = memo(
  forwardRef(function MenuItem(props, ref) {
    const {
      is = 'div',
      children,
      className,
      appearance = 'default',
      disabled,
      secondaryText,
      intent = 'none',
      icon,
      onSelect = noop,
      ...passthroughProps
    } = props

    const handleClick = useCallback(
      event => {
        if (disabled) return
        onSelect(event)
      },
      [disabled, onSelect]
    )

    // Pass all props, so the hook can handled `disabled`, `onKeyDown`, `tabIndex`
    // and any other explicit props that are passed through to the underlying component
    const { onKeyDown, tabIndex } = useClickable(props)

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'MenuItem',
      { appearance },
      pseudoSelectors,
      internalStyles
    )

    let iconColor = intent === 'none' ? 'default' : intent

    if (disabled) {
      iconColor = 'disabled'
    }

    const textColor = disabled ? 'disabled' : intent

    const secondaryTextColor = disabled ? textColor : 'muted'

    const disabledProps = useMemo(() => {
      return disabled
        ? {
            backgroundColor: 'tint1',
            cursor: 'not-allowed',
            disabled: true,
            onClick: null,
            onKeyPress: null,
            tabIndex: -1,
            'aria-disabled': 'true',
            'data-isselectable': 'false'
          }
        : {}
    }, [disabled])

    return (
      <Pane
        is={is}
        role="menuitem"
        className={cx(themedClassName, className)}
        onClick={handleClick}
        data-isselectable={!disabled || undefined}
        aria-disabled={disabled}
        ref={ref}
        height={icon ? 40 : 32}
        {...boxProps}
        {...passthroughProps}
        {...disabledProps}
        tabIndex={tabIndex}
        onKeyDown={onKeyDown}
      >
        <IconWrapper
          icon={icon}
          color={disabled ? 'disabled' : iconColor}
          marginLeft={16}
          marginRight={-4}
          size={16}
          flexShrink={0}
        />
        <Text color={textColor} marginLeft={16} marginRight={16} flex={1}>
          {children}
        </Text>
        {secondaryText && (
          <Text marginRight={16} color={secondaryTextColor}>
            {secondaryText}
          </Text>
        )}
      </Pane>
    )
  })
)

MenuItem.propTypes = {
  /**
   * Element type to use for the menu item.
   * For example: `<MenuItem is={ReactRouterLink}>...</MenuItem>`
   */
  is: Box.propTypes.is,

  /**
   * Class name passed to the component.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * The Evergreen or custom icon before the label.
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * The children of the component.
   */
  children: PropTypes.node,

  /**
   * Secondary text shown on the right.
   */
  secondaryText: PropTypes.node,

  /**
   * The default theme only supports one default appearance.
   */
  appearance: PropTypes.string,

  /**
   * The intent of the menu item.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * Flag to indicate whether the menu item is disabled or not
   */
  disabled: PropTypes.bool
}

export default MenuItem
