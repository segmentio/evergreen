import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M8 0c4.42 0 8 3.58 8 8 0 4.06-3.02 7.4-6.94 7.92-.02 0-.04.01-.06.01-.33.04-.66.07-1 .07-4.42 0-8-3.58-8-8 0-.55.45-1 1-1s1 .45 1 1c0 3.31 2.69 6 6 6 .71 0 1.37-.15 2-.38v.01c2.33-.82 4-3.02 4-5.63 0-3.31-2.69-6-6-6-1.78 0-3.36.78-4.46 2H5c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v1.74A7.95 7.95 0 0 1 8 0zm1 12H7v-2h2v2zm0-3H7V4h2v5z'
]
const svgPaths20 = [
  'M10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10c0-.55.45-1 1-1s1 .45 1 1c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8C7.47 2 5.22 3.17 3.76 5H5c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1s1 .45 1 1v2.05C3.82 1.6 6.71 0 10 0zm1 16H9v-2h2v2zm0-3H9V4h2v9z'
]

export default class OutdatedIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
