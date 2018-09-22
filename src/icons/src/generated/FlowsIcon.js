import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13.5 6a2.5 2.5 0 0 0-2.45 2h-1.3L5.74 4l-.75.75L8.25 8h-3.3a2.5 2.5 0 1 0 0 1h3.3l-3.26 3.25.75.75 4.01-4h1.3a2.5 2.5 0 1 0 2.45-3z'
]
const svgPaths20 = [
  'M17.5 7.93a2.5 2.5 0 0 0-2.45 2h-2.3l-4.01-4-.75.75 3.26 3.25h-6.3a2.5 2.5 0 1 0 0 1h6.3l-3.26 3.25.75.75 4.01-4h2.3a2.5 2.5 0 1 0 2.45-3z'
]

export default class FlowsIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
