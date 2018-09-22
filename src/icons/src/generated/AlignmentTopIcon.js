import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 0H1C.45 0 0 .45 0 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM6 4H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm7 0h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M8 4H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm11-4H1C.45 0 0 .45 0 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm-3 4h-4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z'
]

export default class AlignmentTopIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
