import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M4 9h4c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm11-9H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 14H2V2h8v12zm4 0h-3V2h3v12z'
]
const svgPaths20 = [
  'M4 11h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-7 18H2V2h10v16zm6 0h-5V2h5v16z'
]

export default class RemoveColumnLeftIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
