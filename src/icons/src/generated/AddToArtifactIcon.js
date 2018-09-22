import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M14 4.01h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1 0-.56-.45-1-1-1zm-13 2h6c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm8 6H1c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1 0-.56-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1 0-.56-.45-1-1-1z'
]
const svgPaths20 = [
  'M13 12H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zM1 6h9c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm12 2H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm6-4h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1z'
]

export default class AddToArtifactIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
