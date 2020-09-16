import React, { memo, forwardRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { Pane } from '../../layers'
import safeInvoke from '../../lib/safe-invoke'
import { pseudoSelectors } from '../../table/src/TableRow'
import { Text } from '../../typography'

const noop = () => {}

const internalStyles = {
  display: 'flex',
  alignItems: 'center'
}

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
      ...passthroughProps
    } = props

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

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'MenuItem',
      { appearance },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Pane
        is={is}
        role="menuitem"
        className={themedClassName}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        tabIndex={0}
        data-isselectable="true"
        ref={ref}
        height={icon ? 40 : 32}
        {...boxProps}
        {...passthroughProps}
      >
        <IconWrapper
          icon={icon}
          color={intent === 'none' ? 'default' : intent}
          marginLeft={16}
          marginRight={-4}
          size={16}
          flexShrink={0}
        />
        <Text color={intent} marginLeft={16} marginRight={16} flex={1}>
          {children}
        </Text>
        {secondaryText && (
          <Text marginRight={16} color="muted">
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
  onKeyPress: PropTypes.func
}

export default MenuItem
