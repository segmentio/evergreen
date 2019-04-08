import { IconName } from '@blueprintjs/icons'
import * as PropTypes from 'prop-types'
import * as React from 'react'

import { Icon } from '../../icon'
import Text, { ITextProps } from './Text'

interface IProps extends ITextProps {
  // When passed, adds a icon before the list item. See Evergreen `Icon` for documentation.
  icon?: IconName

  // The color of the icon.
  iconColor?: string
}

export default class ListItem extends React.PureComponent<IProps> {
  static propTypes = {
    ...Text.propTypes,
    icon: PropTypes.string,
    iconColor: PropTypes.string
  }

  render() {
    const { children, size, icon, iconColor, ...props } = this.props

    let paddingLeft
    if (size === 300) paddingLeft = 4
    if (size === 400) paddingLeft = 8
    if (size === 500) paddingLeft = 8
    if (size === 600) paddingLeft = 12

    let iconTop
    if (size === 300) iconTop = 1
    if (size === 400) iconTop = 3
    if (size === 500) iconTop = 3
    if (size === 600) iconTop = 4

    let iconSize
    if (size === 300) iconSize = 12
    if (size === 400) iconSize = 14
    if (size === 500) iconSize = 14
    if (size === 600) iconSize = 16

    let iconLeft = -iconSize - 4
    if (size === 600) iconLeft = -iconSize

    return (
      <Text
        is="li"
        position="relative"
        marginY="0.5em"
        size={size}
        listStyleType={icon ? 'none' : null}
        paddingLeft={icon ? paddingLeft : null}
        {...props}
      >
        {icon && (
          <Icon
            icon={icon}
            color={iconColor}
            position="absolute"
            size={iconSize}
            left={iconLeft}
            top={iconTop}
          />
        )}
        {children}
      </Text>
    )
  }
}
