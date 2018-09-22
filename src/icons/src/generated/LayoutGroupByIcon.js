import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 1C.9 1 0 1.9 0 3s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
]
const svgPaths20 = [
  'M2 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM2 14a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM2 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM13 12a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM13 4a2 2 0 1 0 0 4 2 2 0 1 0 0-4z'
]

export default class LayoutGroupByIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
