import React, { PureComponent } from 'react'
import Icon from './Icon'

export default class CogIcon extends PureComponent {
  render() {
    const { iconWidth, iconHeight, ...props } = this.props
    return (
      <Icon {...props}>
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 16 16"
          xmlSpace="preserve"
          width={iconWidth || 16}
          height={iconHeight || 16}
          fill="currentColor"
        >
          <path d="M13.3,5.2l1.1-2.1l-1.4-1.4l-2.1,1.1c-0.3-0.2-0.7-0.3-1.1-0.4L9,0H7L6.2,2.3C5.9,2.4,5.5,2.5,5.2,2.7 L3.1,1.6L1.6,3.1l1.1,2.1C2.5,5.5,2.4,5.9,2.3,6.2L0,7v2l2.3,0.8c0.1,0.4,0.3,0.7,0.4,1.1l-1.1,2.1l1.4,1.4l2.1-1.1 c0.3,0.2,0.7,0.3,1.1,0.4L7,16h2l0.8-2.3c0.4-0.1,0.7-0.3,1.1-0.4l2.1,1.1l1.4-1.4l-1.1-2.1c0.2-0.3,0.3-0.7,0.4-1.1L16,9V7 l-2.3-0.8C13.6,5.9,13.5,5.5,13.3,5.2z M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S9.7,11,8,11z" />
        </svg>
      </Icon>
    )
  }
}
