import * as React from 'react'
import * as PropTypes from 'prop-types'

import { Icon } from '../../icon'
import { Pane } from '../../layers'
import { PropsWithTheme, withTheme } from '../../theme'
import { AnyFunction } from '../../types/helper'
import { Text } from '../../typography'

interface IProps {
  // The id attribute of the menu option.
  id?: string

  // Function that is called on click and enter/space keypress.
  onSelect?: AnyFunction

  // The icon before the label.
  isSelected?: boolean

  // The children of the component.
  children?: React.ReactNode

  // Secondary text shown on the right.
  secondaryText?: React.ReactNode

  // The default theme only supports one default appearance.
  appearance?: string
}

class MenuOption extends React.PureComponent<PropsWithTheme<IProps>> {
  static propTypes = {
    id: PropTypes.string,
    onSelect: PropTypes.func,
    isSelected: PropTypes.bool,
    children: PropTypes.node,
    secondaryText: PropTypes.node,
    appearance: PropTypes.string.isRequired,
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

  handleKeyPress = (e: KeyboardEvent) => {
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
      ? { color: 'selected', fontWeight: 500, marginLeft: 16 }
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
