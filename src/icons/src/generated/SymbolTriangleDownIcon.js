import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13 4.01c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 .16.05.31.11.44H3.1l4 8h.01c.16.33.49.56.89.56s.72-.23.89-.56h.01l4-8h-.01c.06-.14.11-.28.11-.44z'
]
const svgPaths20 = [
  'M16 5c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .16.05.31.11.44H4.1l5 10h.01c.17.33.5.56.89.56s.72-.23.89-.56h.01l5-10h-.01c.06-.13.11-.28.11-.44z'
]

export default class SymbolTriangleDownIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
