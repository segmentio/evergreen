import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 0C6.9 0 6 .9 6 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
]
const svgPaths20 = [
  'M2 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM10 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM10 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM2 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM2 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM10 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4z'
]

export default class LayoutGridIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
