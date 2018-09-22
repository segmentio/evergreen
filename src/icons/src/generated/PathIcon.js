import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M14.5 0h-13C.67 0 0 .67 0 1.5S.67 3 1.5 3H7v3H3.5C2.67 6 2 6.67 2 7.5S2.67 9 3.5 9H7v3H5.5c-.83 0-1.5.67-1.5 1.5S4.67 15 5.5 15h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H9V9h3.5c.83 0 1.5-.67 1.5-1.5S13.33 6 12.5 6H9V3h5.5c.83 0 1.5-.67 1.5-1.5S15.33 0 14.5 0z'
]
const svgPaths20 = [
  'M18 0H2C.9 0 0 .9 0 2s.9 2 2 2h7v4H4c-1.1 0-2 .9-2 2s.9 2 2 2h5v4H6c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-3v-4h5c1.1 0 2-.9 2-2s-.9-2-2-2h-5V4h7c1.1 0 2-.9 2-2s-.9-2-2-2z'
]

export default class PathIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
