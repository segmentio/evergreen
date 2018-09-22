import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 .95H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-12c0-.55-.45-1-1-1zm-9 12H2v-6h4v6zm8 0H7v-6h7v6zm0-7H2v-3h12v3z'
]
const svgPaths20 = [
  'M19 1H1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM7 17H2V8h5v9zm11 0H8V8h10v9zm0-10H2V3h16v4z'
]

export default class PageLayoutIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
