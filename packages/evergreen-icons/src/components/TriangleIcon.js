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
          <polygon points="13,11 8,5 3,11 " />
        </svg>
      </Icon>
    )
  }
}
