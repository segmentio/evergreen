import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 0H1C.45 0 0 .45 0 1v10c0 .55.45 1 1 1h4.75l-.5 2H4c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-1.25l-.5-2H15c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 10H2V2h12v8z'
]
const svgPaths20 = [
  'M19 0H1C.45 0 0 .45 0 1v13c0 .55.45 1 1 1h5.67l-.5 3H5c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1h-1.17l-.5-3H19c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 13H2V2h16v11z'
]

export default class DesktopIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
