import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M2 0v4c0 2.97 2.16 5.43 5 5.91V14H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9V9.91c2.84-.48 5-2.94 5-5.91V0H2z'
]
const svgPaths20 = [
  'M17 6V0H3v6c0 3.53 2.61 6.43 6 6.92V18H6c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-3v-5.08c3.39-.49 6-3.39 6-6.92z'
]

export default class GlassIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
