import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M1 2h14c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1s.45 1 1 1zm14 11H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM3 5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H3z'
]
const svgPaths20 = [
  'M1 2h18c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1s.45 1 1 1zm2 5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H3zm16 11H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z'
]

export default class VerticalDistributionIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
