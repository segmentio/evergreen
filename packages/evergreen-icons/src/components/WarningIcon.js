import React, { PureComponent } from 'react'
import Icon from './Icon'

export default class WarningIcon extends PureComponent {
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
          <path d="M15.216 13.529L8.882 1.654a1 1 0 0 0-1.765 0L.784 13.529A1 1 0 0 0 1.667 15h12.667a1 1 0 0 0 .882-1.471zM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3H7V6h2v4z" />
        </svg>
      </Icon>
    )
  }
}
