import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M4 5h7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zM1 1c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zm14 6H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-6 5H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M1 1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zm3 5h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm8 8H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm7-6H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z'
]

export default class HorizontalBarChartIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
