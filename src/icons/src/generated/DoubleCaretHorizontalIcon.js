import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13.71 7.29l-3-3A1.003 1.003 0 0 0 9 5v6a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM6 4c-.28 0-.53.11-.71.29l-3 3C2.11 7.47 2 7.72 2 8c0 .28.11.53.29.71l3 3A1.003 1.003 0 0 0 7 11V5c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M8 4c-.24 0-.46.1-.63.24l-.01-.01-6 5 .01.01c-.22.19-.37.45-.37.76s.15.57.37.76l-.01.01 6 5 .01-.01c.17.14.39.24.63.24.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm11 6c0-.31-.15-.57-.37-.76l.01-.01-6-5-.01.01C12.46 4.1 12.24 4 12 4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1 .24 0 .46-.1.63-.24l.01.01 6-5-.01-.01c.22-.19.37-.45.37-.76z'
]

export default class DoubleCaretHorizontalIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
