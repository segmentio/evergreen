import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = ['M8 0a8 8 0 1 0 0 16A8 8 0 1 0 8 0z']
const svgPaths20 = ['M9.96 0a10 10 0 1 0 0 20 10 10 0 1 0 0-20z']

export default class FullCircleIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
