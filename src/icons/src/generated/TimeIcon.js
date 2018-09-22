import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1-6.41V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42L9 7.59z'
]
const svgPaths20 = [
  'M11 9.59V4c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L11 9.59zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
]

export default class TimeIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
