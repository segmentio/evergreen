import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M11 8c0-.15-.07-.28-.17-.37l-4-3.5A.495.495 0 0 0 6 4.5v7a.495.495 0 0 0 .83.37l4-3.5c.1-.09.17-.22.17-.37z'
]
const svgPaths20 = [
  'M14 10c0-.31-.15-.57-.37-.76l.01-.01-6-5-.01.01C7.46 4.1 7.24 4 7 4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1 .24 0 .46-.1.63-.24l.01.01 6-5-.01-.01c.22-.19.37-.45.37-.76z'
]

export default class CaretRightIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
