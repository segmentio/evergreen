import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M14 3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1h12V3zm-2-3H4c-.55 0-1 .45-1 1h10c0-.55-.45-1-1-1zm3 5H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-3 6c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V9h1v2h6V9h1v2z'
]
const svgPaths20 = [
  'M18 4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h16V4zm-2-3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h12V1zm3 6H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-5 7c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2h1v2h6v-2h1v2z'
]

export default class ProjectsIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
