import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 12H3.12l1.81-1.39c1.73 1.01 5.53-.03 9.08-2.61l-1.22-1.5C10.3 8.3 7.86 9.37 6.65 9.29L14.3 3.4l-.6-.8-7.83 6.03c-.01-1.07 1.8-3.19 4.47-5.13L9.12 2C5.38 4.7 3.34 8.1 4.25 9.87L2 11.6V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z'
]
const svgPaths20 = [
  'M19 16H3.02l2.14-1.74c2.25 1.7 7.33.46 11.83-2.99l-1.29-1.5c-3.56 2.74-7.31 4.03-8.93 3.19l10.55-8.57-.63-.78-10.59 8.6c-.64-1.64 1.46-4.91 5.09-7.7L9.9 3.01c-4.6 3.54-6.91 8.12-5.41 10.51L2 15.54V3c0-.55-.45-1-1-1s-1 .45-1 1v14a.998.998 0 0 0 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z'
]

export default class CurvedRangeChartIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
