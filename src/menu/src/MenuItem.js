import React, { memo, forwardRef, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import { useTheme } from '../../theme'
import safeInvoke from '../../lib/safe-invoke'

const noop = () => {}

const MenuItem = memo(
  forwardRef(function MenuItem(props, ref) {
    const {
      is = 'div',
      children,
      appearance = 'default',
      secondaryText,
      intent = 'none',
      icon,
      onSelect = noop,
      onKeyPress,
      disabled,
      ...passthroughProps
    } = props

    const theme = useTheme()

    const handleClick = useCallback(
      event => {
        onSelect(event)
      },
      [onSelect]
    )

    const handleKeyPress = useCallback(
      event => {
        if (event.key === 'Enter' || event.key === ' ') {
          onSelect(event)
          event.preventDefault()
        }

        safeInvoke(onKeyPress, event)
      },
      [onSelect, onKeyPress]
    )

    const themedClassName = theme.getMenuItemClassName(appearance, 'none')

    let iconColor = intent === 'none' ? 'default' : intent

    if(disabled) {
      iconColor = 'disabled'
    }

    const textColor = disabled ? theme.colors.icon.disabled : intent

    const secondaryTextColor = disabled ? textColor : 'muted'

    const disabledProps = useMemo(() => {
      return disabled ? {
        backgroundColor: theme.colors.background.tint1,
        cursor: 'not-allowed',
        disabled: true,
        onClick: null,
        onKeyPress: null,
        tabIndex: -1,
        'aria-disabled': 'true',
        'data-isselectable': 'false'
      } : {}
    }, [disabled])

    return (
      <Pane
        is={is}
        role="menuitem"
        className={themedClassName}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        height={icon ? 40 : 32}
        tabIndex={0}
        data-isselectable="true"
        display="flex"
        alignItems="center"
        ref={ref}
        {...disabledProps}
        {...passthroughProps}
      >
        <IconWrapper
          icon={icon}
          color={iconColor}
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
   * Callback to invoke onkeypress
   */
  onKeyPress: PropTypes.func,

  /**
   * Flag to indicate whether the menu item is disabled or not
   */
  disabled: PropTypes.bool
}

export default MenuItem
