import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 11.38A7.835 7.835 0 0 1 7.85 16C3.51 16 0 12.49 0 8.15 0 4.97 1.89 2.23 4.62 1c-.45.99-.7 2.08-.7 3.23a7.85 7.85 0 0 0 7.85 7.85c1.15 0 2.24-.25 3.23-.7z'
]
const svgPaths20 = [
  'M19 14.15A9.94 9.94 0 0 1 9.94 20C4.45 20 0 15.55 0 10.06 0 6.03 2.4 2.56 5.85 1a9.811 9.811 0 0 0-.88 4.09c0 5.49 4.45 9.94 9.94 9.94 1.46 0 2.84-.31 4.09-.88z'
]

export default class MoonIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
