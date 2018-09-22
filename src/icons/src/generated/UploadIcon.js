import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 8c-.28 0-.53-.11-.71-.29L9 6.41V12c0 .55-.45 1-1 1s-1-.45-1-1V6.41l-1.29 1.3a1.003 1.003 0 0 1-1.42-1.42l3-3C7.47 3.11 7.72 3 8 3s.53.11.71.29l3 3A1.003 1.003 0 0 1 11 8z'
]
const svgPaths20 = [
  'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm4 10c-.28 0-.53-.11-.71-.29L11 7.41V15c0 .55-.45 1-1 1s-1-.45-1-1V7.41l-2.29 2.3a1.003 1.003 0 0 1-1.42-1.42l4-4c.18-.18.43-.29.71-.29s.53.11.71.29l4 4A1.003 1.003 0 0 1 14 10z'
]

export default class UploadIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
