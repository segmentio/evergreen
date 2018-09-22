import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = ['M8 5a3 3 0 1 0 0 6 3 3 0 1 0 0-6z']
const svgPaths20 = ['M10 6a4 4 0 1 0 0 8 4 4 0 1 0 0-8z']

export default class DotIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
