import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M3.99-.01h-3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1zm11.71 7.3l-2-2a1.003 1.003 0 0 0-1.71.71v4a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71s-.11-.53-.29-.71zM9.99-.01h-3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M5 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm14.71 9.29l-3-3A1.003 1.003 0 0 0 15 7v6a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM12 0H8c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
]

export default class TwoColumnsIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
