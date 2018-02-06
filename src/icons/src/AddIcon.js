import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

export default class AddIcon extends PureComponent {
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
          <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
        </svg>
      </Icon>
    )
  }
}
