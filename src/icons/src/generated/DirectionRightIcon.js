import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = ['M16 7.99l-16-6 4 6-4 6z']
const svgPaths20 = ['M20 10.02l-20-7 5 7-5 7z']

export default class DirectionRightIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
