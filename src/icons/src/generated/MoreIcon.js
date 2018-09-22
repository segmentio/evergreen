import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M2 6.03a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM14 6.03a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM8 6.03a2 2 0 1 0 0 4 2 2 0 1 0 0-4z'
]
const svgPaths20 = [
  'M3.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5zM17.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5zM10.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5z'
]

export default class MoreIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
