import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13 1c-.55 0-1 .45-1 1v5H4V2c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1V9h8v5c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M16 1c-.55 0-1 .45-1 1v7H5V2c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-7h10v7c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z'
]

export default class HeaderIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
