import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm1-2H7v-2h2v2zm0-3H7V4h2v5z'
]
const svgPaths20 = [
  'M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-2H9v-2h2v2zm0-3H9V4h2v9z'
]

export default class IssueIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
