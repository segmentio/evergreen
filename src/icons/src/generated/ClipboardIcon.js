import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M11 2c0-.55-.45-1-1-1h.22C9.88.4 9.24 0 8.5 0S7.12.4 6.78 1H7c-.55 0-1 .45-1 1v1h5V2zm2 0h-1v2H5V2H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M13 2c0-.55-.45-1-1-1h-.78a1.98 1.98 0 0 0-3.44 0H7c-.55 0-1 .45-1 1v2h7V2z',
  'M16 2h-2v3H5V2H3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z'
]

export default class ClipboardIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
