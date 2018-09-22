import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 3.98h-3v-2c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v4h3v-1h2v1h6v-1h2v1h3v-4c0-.55-.45-1-1-1zm-5 0H6v-1h4v1zm3 7h-2v-1H5v1H3v-1H0v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-4h-3v1z'
]
const svgPaths20 = [
  'M19 5h-4V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v3H1c-.55 0-1 .45-1 1v5h4v-1h2v1h8v-1h2v1h4V6c0-.55-.45-1-1-1zm-6 0H7V3h6v2zm3 8h-2v-1H6v1H4v-1H0v6c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-6h-4v1z'
]

export default class BriefcaseIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
