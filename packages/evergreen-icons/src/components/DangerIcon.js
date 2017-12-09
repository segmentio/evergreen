import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

export default class DangerIcon extends PureComponent {
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
          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
        </svg>
      </Icon>
    )
  }
}
