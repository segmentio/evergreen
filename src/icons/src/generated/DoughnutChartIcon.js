import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M11.86 7h4.05C15.45 3.39 12.61.52 9 .07v4.07A4 4 0 0 1 11.86 7zM12 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4V0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8h-4z'
]
const svgPaths20 = [
  'M16 10c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6V0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10h-4zm-.09-1h4.04C19.48 4.28 15.72.52 11 .05V4.1A5.98 5.98 0 0 1 15.91 9z'
]

export default class DoughnutChartIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
