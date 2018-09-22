import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = ['M8 3a5 5 0 1 0 0 10A5 5 0 1 0 8 3z']
const svgPaths20 = ['M10 3a7 7 0 1 0 0 14 7 7 0 1 0 0-14z']

export default class RecordIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
