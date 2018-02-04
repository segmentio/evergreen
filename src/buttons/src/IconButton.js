import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { IconMap, IconAim } from '../../icons'
import { getIconSizeForControlHeight } from '../../shared-styles'
import Button from './Button'

export default class IconButton extends PureComponent {
  static propTypes = {
    /**
     * Composes the Button component as the base.
     */
    ...Button.propTypes,

    /**
     * The icon to be used. Can be any icon from `evergreen-icons`.
     */
    icon: PropTypes.oneOf(Object.keys(IconMap)),

    /**
     * The aim of the icon.
     */
    iconAim: PropTypes.oneOf(Object.keys(IconAim)).isRequired
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
