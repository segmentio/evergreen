import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = ['M8 3.01a5 5 0 1 0 0 10 5 5 0 1 0 0-10z']
const svgPaths20 = ['M10 4.01a6 6 0 1 0 0 12 6 6 0 1 0 0-12z']

export default class SymbolCircleIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
