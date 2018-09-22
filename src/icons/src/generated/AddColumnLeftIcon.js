import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 14H2V2h8v12zm4 0h-3V2h3v12zM4 9h1v1c0 .55.45 1 1 1s1-.45 1-1V9h1c.55 0 1-.45 1-1s-.45-1-1-1H7V6c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-.55 0-1 .45-1 1s.45 1 1 1z'
]
const svgPaths20 = [
  'M4 11h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1H8V7c0-.55-.45-1-1-1s-1 .45-1 1v2H4c-.55 0-1 .45-1 1s.45 1 1 1zM19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-7 18H2V2h10v16zm6 0h-5V2h5v16z'
]

export default class AddColumnLeftIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
