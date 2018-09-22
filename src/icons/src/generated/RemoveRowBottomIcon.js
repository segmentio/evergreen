import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V6h12v8zm0-9H2V2h12v3zm-8 6h4c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1z'
]
const svgPaths20 = [
  'M7 14h6c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zM19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2V8h16v10zm0-11H2V2h16v5z'
]

export default class RemoveRowBottomIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
