import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M8.71 4.29C8.53 4.11 8.28 4 8 4s-.53.11-.71.29l-3 3a1.003 1.003 0 0 0 1.42 1.42L7 7.41V11c0 .55.45 1 1 1s1-.45 1-1V7.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-3-3zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
]
const svgPaths20 = [
  'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.71-13.71C10.53 4.11 10.28 4 10 4s-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L9 7.41V15c0 .55.45 1 1 1s1-.45 1-1V7.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-4-4z'
]

export default class CircleArrowUpIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
