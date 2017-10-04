import React, { PureComponent } from 'react'
import Icon from './Icon'

export default class SearchIcon extends PureComponent {
  render() {
    const { ...props } = this.props
    return (
      <Icon {...props}>
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 16 16"
          xmlSpace="preserve"
          width={16}
          height={16}
          fill="currentColor"
        >
          <path d="M12.7,11.3c0.9-1.2,1.4-2.6,1.4-4.2C14.1,3.2,11,0,7.1,0S0,3.2,0,7.1c0,3.9,3.2,7.1,7.1,7.1 c1.6,0,3.1-0.5,4.2-1.4l3,3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L12.7,11.3z M7.1,12.1 C4.3,12.1,2,9.9,2,7.1S4.3,2,7.1,2s5.1,2.3,5.1,5.1S9.9,12.1,7.1,12.1z" />
        </svg>
      </Icon>
    )
  }
}
