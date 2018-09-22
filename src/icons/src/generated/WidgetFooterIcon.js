import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M14 0H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H3v-3h10v3zm0-4H3V2h10v8z'
]
const svgPaths20 = [
  'M17 0H3c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H4v-4h12v4zm0-5H4V2h12v11z'
]

export default class WidgetFooterIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
