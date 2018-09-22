import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = ['M8 0L0 16h16L8 0zM7 5l5 10H2L7 5z']
const svgPaths20 = ['M10 0L0 20h20L10 0zM9 6l6 12H3L9 6z']

export default class DeltaIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
