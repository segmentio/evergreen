import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

export default class ArrowIcon extends PureComponent {
  static propTypes = {
    iconWidth: PropTypes.number,
    iconHeight: PropTypes.number
  }
  static defaultProps = {
    iconWidth: 16,
    iconHeight: 16
  }

  render() {
    const { iconWidth, iconHeight, ...props } = this.props
    return (
      <Icon {...props}>
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 16 16"
          xmlSpace="preserve"
          width={iconWidth}
          height={iconHeight}
          fill="currentColor"
        >
          <polygon points="1.3,6.7 2.7,8.1 7,3.8 7,16 9,16 9,3.8 13.3,8.1 14.7,6.7 8,0 " />
        </svg>
      </Icon>
    )
  }
}
