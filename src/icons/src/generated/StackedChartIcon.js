import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M10 2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3h3V2zm3 10h1c.55 0 1-.45 1-1V8h-3v3c0 .55.45 1 1 1zm2-7c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2h3V5zm-5 1H7v3h3V6zM5 7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1h3V7zm3 5h1c.55 0 1-.45 1-1v-1H7v1c0 .55.45 1 1 1zm7 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM3 12h1c.55 0 1-.45 1-1V9H2v2c0 .55.45 1 1 1z'
]
const svgPaths20 = [
  'M12 2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v4h4V2zm3 14h2c.55 0 1-.45 1-1v-5h-4v5c0 .55.45 1 1 1zm3-10c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v3h4V6zm-6 1H8v5h4V7zm-9 9h2c.55 0 1-.45 1-1v-3H2v3c0 .55.45 1 1 1zm16 1H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM6 9c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h4V9zm3 7h2c.55 0 1-.45 1-1v-2H8v2c0 .55.45 1 1 1z'
]

export default class StackedChartIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
