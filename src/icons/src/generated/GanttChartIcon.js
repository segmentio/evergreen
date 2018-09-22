import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M10 10c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1zM6 7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1zm9 5H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM4 5h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z'
]
const svgPaths20 = [
  'M4 7h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm3 2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1zm12 3h-6c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0 4H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z'
]

export default class GanttChartIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
