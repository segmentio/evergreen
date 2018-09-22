import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M-.01 14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7h-16v7zm15-10H7.41L5.7 2.3a.965.965 0 0 0-.71-.3h-4c-.55 0-1 .45-1 1v3h16V5c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M0 17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7H0v10zM19 4H9.41l-1.7-1.71A.997.997 0 0 0 7 2H1c-.55 0-1 .45-1 1v3h20V5c0-.55-.45-1-1-1z'
]

export default class FolderCloseIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
