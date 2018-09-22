import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M7 1.08c-3.37.5-5.97 3.4-5.97 6.92 0 3.87 3.13 7 6.98 7 3.52 0 6.42-2.61 6.91-6H7V1.08z',
  'M8 0v8h8c0-4.42-3.58-8-8-8z'
]
const svgPaths20 = [
  'M9 .98c-4.5.5-8 4.31-8 8.94 0 4.97 4.03 9.04 9 9.04 4.63 0 8.44-3.96 8.94-7.96H9V.98z',
  'M10-.08V10h10C20 4 15.52-.08 10-.08z'
]

export default class PieChartIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
