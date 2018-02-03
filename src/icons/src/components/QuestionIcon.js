import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

export default class QuestionIcon extends PureComponent {
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
          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1.5-4.6c-.5.3-.5.4-.5.6v1H7V9c0-1.3.8-1.9 1.4-2.3.5-.3.6-.4.6-.7 0-.6-.4-1-1-1-.4 0-.7.2-.9.5l-.5.9-1.7-1 .5-.9C5.9 3.6 6.9 3 8 3c1.7 0 3 1.3 3 3 0 1.4-.9 2-1.5 2.4z" />
        </svg>
      </Icon>
    )
  }
}
