import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13 12h1c.55 0 1-.45 1-1V8h-3v3c0 .55.45 1 1 1zM10 2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3h3V2zm0 4H7v3h3V6zm5-4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2h3V2zm0 3h-3v2h3V5zM5 5H2v3h3V5zm-2 7h1c.55 0 1-.45 1-1V9H2v2c0 .55.45 1 1 1zm12 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM5 2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h3V2zm3 10h1c.55 0 1-.45 1-1v-1H7v1c0 .55.45 1 1 1z'
]
const svgPaths20 = [
  'M15 16h2c.55 0 1-.45 1-1v-5h-4v5c0 .55.45 1 1 1zM12 2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v4h4V2zm6 4h-4v3h4V6zm0-4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v3h4V2zm-6 5H8v5h4V7zm-9 9h2c.55 0 1-.45 1-1v-3H2v3c0 .55.45 1 1 1zm6 0h2c.55 0 1-.45 1-1v-2H8v2c0 .55.45 1 1 1zm10 1H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM6 2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v3h4V2zm0 4H2v5h4V6z'
]

export default class FullStackedChartIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
