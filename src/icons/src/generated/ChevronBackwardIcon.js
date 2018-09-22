import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M7.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L6 6.59V4c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L7.41 8z'
]
const svgPaths20 = [
  'M8.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L7 8.59V4c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1v-4.59l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L8.41 10z'
]

export default class ChevronBackwardIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
