import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13.71 4.29l-4-4A.997.997 0 0 0 9 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.28-.11-.53-.29-.71zM7 6h2v2H7V6zM4 6h2v2H4V6zm2 8H4v-2h2v2zm3 0H7v-2h2v2zm3 0h-2v-2h2v2zm0-3H4V9h8v2zm0-3h-2V6h2v2z'
]
const svgPaths20 = [
  'M16.71 5.29l-5-5A.997.997 0 0 0 11 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.28-.11-.53-.29-.71zM9 7h2v3H9V7zM6 7h2v3H6V7zm2 11H6v-3h2v3zm3 0H9v-3h2v3zm3 0h-2v-3h2v3zm0-4H6v-3h8v3zm0-4h-2V7h2v3z'
]

export default class SimCardIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
