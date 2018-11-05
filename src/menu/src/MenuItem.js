import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import { Icon } from '../../icon'
import { withTheme } from '../../theme'
import safeInvoke from '../../lib/safe-invoke'
import warning from '../../lib/warning'

class MenuItem extends React.PureComponent {
  static propTypes = {
    /**
     * Element type to use for the menu item.
     * For example: `<MenuItem is={ReactRouterLink}>...</MenuItem>`
     */
    is: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,

    /**
     * Function that is called on click and enter/space keypress.
     */
    onSelect: PropTypes.func,

    /**
     * The icon before the label.
     */
    icon: PropTypes.node,

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
    appearance: PropTypes.string.isRequired,

    /**
     * The intent of the menu item.
     */
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger'])
      .isRequired,

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    is: 'div',
    intent: 'none',
    appearance: 'default',
    onSelect: () => {}
  }

  handleClick = event => {
    this.props.onSelect(event)

    /* eslint-disable react/prop-types */
    safeInvoke(this.props.onClick, event)
    /* eslint-enable react/prop-types */
  }

  handleKeyPress = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      this.props.onSelect(event)
      event.preventDefault()
    }

    /* eslint-disable react/prop-types */
    safeInvoke(this.props.onKeyPress, event)
    /* eslint-enable react/prop-types */
  }

  render() {
    const {
      is,
      children,
      theme,
      appearance,
      secondaryText,
      intent,
      icon,
      ...passthroughProps
    } = this.props

    if (process.env.NODE_ENV !== 'production') {
      warning(
        typeof this.props.onClick === 'function',
        '<Menu.Item> expects `onSelect` prop, but you passed `onClick`.'
      )
    }

    const themedClassName = theme.getMenuItemClassName(appearance, 'none')

    return (
      <Pane
        is={is}
        role="menuitem"
        className={themedClassName}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        height={icon ? 40 : 32}
        tabIndex={0}
        data-isselectable="true"
        display="flex"
        alignItems="center"
        {...passthroughProps}
      >
        {icon && (
          <Icon
            color={intent === 'none' ? 'default' : intent}
            icon={icon}
            marginLeft={16}
            marginRight={-4}
            size={16}
            flexShrink={0}
          />
        )}
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
  }
}

export default withTheme(MenuItem)
