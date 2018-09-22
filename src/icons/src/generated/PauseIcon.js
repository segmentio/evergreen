import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M6 3H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm6 0h-2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M7 3H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm9 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
]

export default class PauseIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
