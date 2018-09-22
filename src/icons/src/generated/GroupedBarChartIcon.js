import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M10 12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1zm3 0c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm2 1H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-9-1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1zm-3 0c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v9c0 .55.45 1 1 1z'
]
const svgPaths20 = [
  'M12 16h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1zm7 1H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm-3-1h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1zm-9 0h1c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1zm-4 0h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1z'
]

export default class GroupedBarChartIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
