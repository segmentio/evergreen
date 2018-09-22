import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 9c.55 0 1-.45 1-1s-.45-1-1-1h-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1H9V1c0-.55-.45-1-1-1S7 .45 7 1v1H4V1c0-.55-.45-1-1-1S2 .45 2 1v1H1c-.55 0-1 .45-1 1s.45 1 1 1h1v3H1c-.55 0-1 .45-1 1s.45 1 1 1h1v3H1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V9h1zm-8 3H4V9h3v3zm0-5H4V4h3v3zm5 5H9V9h3v3zm0-5H9V4h3v3z'
]
const svgPaths20 = [
  'M19 11c.55 0 1-.45 1-1s-.45-1-1-1h-2V5h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-4V1c0-.55-.45-1-1-1S9 .45 9 1v2H5V1c0-.55-.45-1-1-1S3 .45 3 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v4H1c-.55 0-1 .45-1 1s.45 1 1 1h2v4H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-4h2zM9 15H5v-4h4v4zm0-6H5V5h4v4zm6 6h-4v-4h4v4zm0-6h-4V5h4v4z'
]

export default class GridIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
