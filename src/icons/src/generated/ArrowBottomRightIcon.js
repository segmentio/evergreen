import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13 5c-.55 0-1 .45-1 1v4.59l-8.29-8.3a1.003 1.003 0 0 0-1.42 1.42l8.3 8.29H6c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M17 6c-.55 0-1 .45-1 1v7.59L3.71 2.29a1.003 1.003 0 0 0-1.42 1.42L14.59 16H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z'
]

export default class ArrowBottomRightIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
