import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M10.568.421c-.01.04-.018.08-.026.121-.837.156-1.53.73-1.85 1.497a6 6 0 1 0 5.27 5.273 2.51 2.51 0 0 0 1.496-1.854c.04-.008.081-.016.121-.026A8 8 0 1 1 10.568.421zM9 12H7v-2h2v2zm0-3H7V4h2v5zm1-6c0-.55.45-1 1-1h1V1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v1.005c0 .55-.45 1-1 1s-1-.45-1-1V4h-1c-.55 0-1-.45-1-1z'
]
const svgPaths20 = [
  'M13.167.512a2.98 2.98 0 0 0-.131.524c-.74.115-1.39.5-1.848 1.052a8 8 0 1 0 6.724 6.724 2.997 2.997 0 0 0 1.052-1.848 2.98 2.98 0 0 0 .524-.13A9.99 9.99 0 0 1 20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0a9.99 9.99 0 0 1 3.167.512zM11 16H9v-2h2v2zm0-3H9V4h2v9zm6-10h1.5a1 1 0 0 1 0 2H17v1.5a1 1 0 0 1-2 0V5h-1.5a1 1 0 0 1 0-2H15V1.5a1 1 0 0 1 2 0V3z'
]

export default class IssueNewIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
