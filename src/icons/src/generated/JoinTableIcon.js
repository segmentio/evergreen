import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 5h-3V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h3v3c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-5-1v2H6V4h4zm0 6H6V7h4v3zM2 4h3v2H2V4zm0 5V7h3v2H2zm4 4v-2h4v2H6zm8 0h-3v-2h3v2zm0-3h-3V8h3v2z'
]
const svgPaths20 = [
  'M19 6h-4V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h4v4c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM6 12H2V9h4v3zm0-4H2V5h4v3zm7 9H7v-3h6v3zm0-4H7V9h6v4zm0-5H7V5h6v3zm5 9h-4v-3h4v3zm0-4h-4v-3h4v3z'
]

export default class JoinTableIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
