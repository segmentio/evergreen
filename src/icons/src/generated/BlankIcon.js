import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = ['']
const svgPaths20 = ['']

export default class BlankIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
