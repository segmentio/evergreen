import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M5 9H4v1h1V9zm10-9H1C.45 0 0 .45 0 1v13c0 .55.45 1 1 1h3v1l2-1 2 1v-1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM4 13H2v-1h2v1zm10 0H8v-1h6v1zm0-2H3V2h11v9zM5 3H4v1h1V3zm0 4H4v1h1V7zm0-2H4v1h1V5z'
]
const svgPaths20 = [
  'M7 3H5v2h2V3zm0 6H5v2h2V9zm0-3H5v2h2V6zm12-6H1C.45 0 0 .45 0 1v16c0 .55.45 1 1 1h4v2l2-1 2 1v-2h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 16H9v-1H5v1H2v-2h16v2zm0-3H4V2h14v11z'
]

export default class GitRepoIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
