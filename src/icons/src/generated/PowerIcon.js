import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M8 8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S7 .45 7 1v6c0 .55.45 1 1 1zm3-5.32v2.34c1.21.91 2 2.35 2 3.98 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-1.63.79-3.06 2-3.98V2.68C2.64 3.81 1 6.21 1 9c0 3.87 3.13 7 7 7s7-3.13 7-7c0-2.79-1.64-5.19-4-6.32z'
]
const svgPaths20 = [
  'M10 10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S9 .45 9 1v8c0 .55.45 1 1 1zm3-7.45v2.16c2.36 1.12 4 3.5 4 6.29 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.79 1.64-5.17 4-6.29V2.55C3.51 3.79 1 7.09 1 11a9 9 0 0 0 18 0c0-3.91-2.51-7.21-6-8.45z'
]

export default class PowerIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
