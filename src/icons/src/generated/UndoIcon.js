import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M4 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H3.41L4.7 2.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-3 3C.11 4.47 0 4.72 0 5c0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L3.41 6H11c1.66 0 3 1.34 3 3s-1.34 3-3 3H7v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'
]
const svgPaths20 = [
  'M5 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9-9H3.41L5.7 2.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4C.11 5.47 0 5.72 0 6c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L3.41 7H14c2.21 0 4 1.79 4 4s-1.79 4-4 4H9v2h5c3.31 0 6-2.69 6-6s-2.69-6-6-6z'
]

export default class UndoIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
