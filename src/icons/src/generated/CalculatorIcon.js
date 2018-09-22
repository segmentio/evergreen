import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM6 14H4v-2h2v2zm0-3H4V9h2v2zm0-3H4V6h2v2zm3 6H7v-2h2v2zm0-3H7V9h2v2zm0-3H7V6h2v2zm3 6h-2V9h2v5zm0-6h-2V6h2v2zm0-3H4V2h8v3z'
]
const svgPaths20 = [
  'M16 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 18H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V8h2v2zm4 8H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V8h2v2zm4 8h-2v-6h2v6zm0-8h-2V8h2v2zm0-4H5V2h10v4z'
]

export default class CalculatorIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
