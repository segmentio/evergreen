import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13 2H6c-.55 0-1 .45-1 1s.45 1 1 1h4.59L2.3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L12 5.41V10c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M17 2H7c-.55 0-1 .45-1 1s.45 1 1 1h7.59L2.29 16.29a1.003 1.003 0 0 0 1.42 1.42L16 5.41V13c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1z'
]

export default class ArrowTopRightIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
