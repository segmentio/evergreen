import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M14 3c-.24 0-.44.09-.62.23l-.01-.01L9 6.72V4c0-.55-.45-1-1-1-.24 0-.44.09-.62.23v-.01l-5 4 .01.01C2.16 7.41 2 7.68 2 8s.16.59.38.77v.01l5 4 .01-.01c.17.14.37.23.61.23.55 0 1-.45 1-1V9.28l4.38 3.5.01-.01c.17.14.37.23.61.23.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M18 3c-.23 0-.42.09-.59.21l-.01-.01L11 8V4c0-.55-.45-1-1-1-.23 0-.42.09-.59.21L9.4 3.2l-8 6 .01.01C1.17 9.4 1 9.67 1 10s.17.6.41.79l-.01.01 8 6 .01-.01c.17.12.36.21.59.21.55 0 1-.45 1-1v-4l6.4 4.8.01-.01c.17.12.36.21.59.21.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
]

export default class FastBackwardIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
