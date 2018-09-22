import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M3.5 5C1.57 5 0 6.57 0 8.5S1.57 12 3.5 12 7 10.43 7 8.5 5.43 5 3.5 5zm9 0C10.57 5 9 6.57 9 8.5s1.57 3.5 3.5 3.5S16 10.43 16 8.5 14.43 5 12.5 5z'
]
const svgPaths20 = [
  'M4.5 6C2.01 6 0 8.01 0 10.5S2.01 15 4.5 15 9 12.99 9 10.5 6.99 6 4.5 6zm11 0C13.01 6 11 8.01 11 10.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5S17.99 6 15.5 6z'
]

export default class UngroupObjectsIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
