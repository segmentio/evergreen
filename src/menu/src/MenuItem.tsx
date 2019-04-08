import { IconName } from '@blueprintjs/icons'
import * as PropTypes from 'prop-types'
import * as React from 'react'

import { IntentType } from '../../constants'
import { Icon } from '../../icon'
import { Pane } from '../../layers'
import safeInvoke from '../../lib/safe-invoke'
import warning from '../../lib/warning'
import { PropsWithTheme, withTheme } from '../../theme'
import { AnyFunction } from '../../types/helper'
import { Text } from '../../typography'

interface IProps {
  // Element type to use for the menu item. Ex: `<MenuItem is={ReactRouterLink}>...</MenuItem>`
  is?: string | AnyFunction

  // Function that is called on click and enter/space keypress.
  onSelect?: AnyFunction

  // The icon before the label.
  icon?: IconName | JSX.Element

  // The children of the component.
  children: React.ReactNode

  // Secondary text shown on the right.
  secondaryText?: React.ReactNode

  // The default theme only supports one default appearance.
  appearance?: string

  // The intent of the menu item.
  intent?: IntentType
}

class MenuItem extends React.PureComponent<PropsWithTheme<IProps>> {
  static propTypes = {
    is: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    onSelect: PropTypes.func,
    icon: PropTypes.node as (
      | PropTypes.Validator<IconName>
      | PropTypes.Validator<JSX.Element>),
    children: PropTypes.node,
    secondaryText: PropTypes.node,
    appearance: PropTypes.string.isRequired,
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger'])
      .isRequired as PropTypes.Validator<IntentType>,
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    is: 'div',
    intent: 'none' as IntentType,
    appearance: 'default',
    onSelect: () => {}
  }

  handleClick = (event: React.SyntheticEvent) => {
    this.props.onSelect(event)

    safeInvoke((this.props as any).onClick, event)
  }

  handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      this.props.onSelect(event)
      event.preventDefault()
    }

    safeInvoke((this.props as any).onKeyPress, event)
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
        'onClick' in this.props,
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
