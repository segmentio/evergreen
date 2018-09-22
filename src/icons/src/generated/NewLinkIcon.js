import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3.5 6a2.5 2.5 0 0 0-2.45 2h-4.1a2.5 2.5 0 1 0 0 1h4.1a2.5 2.5 0 1 0 2.45-3z'
]
const svgPaths20 = [
  'M14.5 12a2.5 2.5 0 0 0-2.45 2h-7.1a2.5 2.5 0 1 0 0 1h7.1a2.5 2.5 0 1 0 2.45-3zM19 5h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1z'
]

export default class NewLinkIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
