import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M6 7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1zM2 9c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zm8-5c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1zm4-4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M8 7H7c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zM3 9H2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1zm10-5h-1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm5-4h-1c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
]

export default class VerticalBarChartAscIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
