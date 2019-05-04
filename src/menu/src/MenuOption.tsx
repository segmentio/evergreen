import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import { Icon } from '../../icon'
import { withTheme } from '../../theme'

class MenuOption extends React.PureComponent {
  static propTypes = {
    /**
     * The id attribute of the menu option.
     */
    id: PropTypes.string,

    /**
     * Function that is called on click and enter/space keypress.
     */
    onSelect: PropTypes.func,

    /**
     * The icon before the label.
     */
    isSelected: PropTypes.bool,

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
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    appearance: 'default',
    isSelected: false,
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
      id,
      children,
      theme,
      appearance,
      secondaryText,
      isSelected
    } = this.props

    const themedClassName = theme.getMenuItemClassName(appearance, 'none')

    const textProps = isSelected
      ? {
          color: 'selected',
          fontWeight: 500,
          marginLeft: 16
        }
      : { marginLeft: 44 }

    return (
      <Pane
        id={id}
        role="menuitemradio"
        tabIndex={0}
        className={themedClassName}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        data-isselectable="true"
        aria-checked={isSelected}
        height={40}
        display="flex"
        alignItems="center"
      >
        {isSelected && (
          <Icon
            aria-hidden
            color="selected"
            icon="tick"
            marginLeft={16}
            marginRight={-4}
            size={16}
            flexShrink={0}
          />
        )}
        <Text {...textProps} marginRight={16} flex={1}>
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

export default withTheme(MenuOption)
