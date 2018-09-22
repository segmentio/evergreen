import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M2 6l3 2 3-4 3 4 3-2-1 6H3L2 6zm6-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM1 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm14 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM3 13h10v2H3v-2z'
]
const svgPaths20 = [
  'M2 8l4 2 4-5 4 5 4-2-1 7H3L2 8zm8-6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM1 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm18 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM3 16h14v2H3v-2z'
]

export default class CrownIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
