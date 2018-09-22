import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M3 1c0-.55-.45-1-1-1S1 .45 1 1v3h2V1zm0 4H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm12-4c0-.55-.45-1-1-1s-1 .45-1 1v2h2V1zM9 1c0-.55-.45-1-1-1S7 .45 7 1v6h2V1zM1 15c0 .55.45 1 1 1s1-.45 1-1v-5H1v5zM15 4h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-2 11c0 .55.45 1 1 1s1-.45 1-1V9h-2v6zM9 8H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-2 7c0 .55.45 1 1 1s1-.45 1-1v-2H7v2z'
]
const svgPaths20 = [
  'M4 1c0-.55-.45-1-1-1S2 .45 2 1v5h2V1zM2 19c0 .55.45 1 1 1s1-.45 1-1v-6H2v6zm9-18c0-.55-.45-1-1-1S9 .45 9 1v8h2V1zm7 0c0-.55-.45-1-1-1s-1 .45-1 1v3h2V1zM9 19c0 .55.45 1 1 1s1-.45 1-1v-3H9v3zm9-14h-2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-2 14c0 .55.45 1 1 1s1-.45 1-1v-8h-2v8zM4 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm7 3H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z'
]

export default class SettingsIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
