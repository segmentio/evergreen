import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M9 9H5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zM1 0C.45 0 0 .45 0 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm13 2H5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M1 0C.45 0 0 .45 0 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm11 11H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm7-8H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
]

export default class AlignmentLeftIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
