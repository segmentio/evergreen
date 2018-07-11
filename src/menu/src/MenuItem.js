import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import { Icon } from '../../icon'
import { withTheme } from '../../theme'

class MenuItem extends React.PureComponent {
  static propTypes = {
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
    intent: 'none',
    appearance: 'default',
    onClick: () => {},
    onSelect: () => {},
    onKeyPress: () => {}
  }

  handleClick = () => {
    this.props.onSelect()
  }

  handleKeyPress = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      this.props.onSelect()
      e.preventDefault()
    }
  }

  render() {
    const {
      children,
      theme,
      appearance,
      secondaryText,
      intent,
      icon
    } = this.props

    const themedClassName = theme.getMenuItemClassName(appearance, 'none')

    return (
      <Pane
        role="menuitem"
        className={themedClassName}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        height={icon ? 40 : 32}
        tabIndex={0}
        data-isselecteable="true"
        display="flex"
        alignItems="center"
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
