import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { IconMap, IconAim } from 'evergreen-icons'
import { getIconSizeForControlHeight } from 'evergreen-shared-styles'
import Button from './Button'

export default class IconButton extends PureComponent {
  static propTypes = {
    ...Button.propTypes,
    iconAim: PropTypes.oneOf(Object.keys(IconAim)).isRequired,
    icon: PropTypes.oneOf(Object.keys(IconMap))
  }

  static defaultProps = {
    appearance: 'default',
    height: 32,
    paddingLeft: 0,
    paddingRight: 0,
    iconAim: 'none'
  }

  render() {
    const { iconAim, icon: iconKey, height, ...props } = this.props
    const icon = IconMap[iconKey]
    const iconSize = getIconSizeForControlHeight({ height })

    return (
      <Button height={height} {...props}>
        {icon &&
          React.createElement(icon, {
            aim: iconAim,
            iconSize,
            color: 'inherit',
            size: height
          })}
      </Button>
    )
  }
}
