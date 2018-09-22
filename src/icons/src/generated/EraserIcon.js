import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M8.06 13.91l7.63-7.44c.41-.4.41-1.05 0-1.45L10.86.3c-.41-.4-1.08-.4-1.49 0L.31 9.13c-.41.4-.41 1.05 0 1.45l5.58 5.44h8.12v-.01c.55 0 1-.45 1-1s-.45-1-1-1H7.96l.1-.1zm-2.17.06L1.67 9.85l4.22-4.11 4.22 4.11-4.22 4.12z'
]
const svgPaths20 = [
  'M18.71 8.43c.39-.4.39-1.05 0-1.45l-5.53-5.72a.967.967 0 0 0-1.4 0L1.29 12.1c-.39.4-.39 1.05 0 1.45l4.25 4.39 2.13 2.05h9.27c.02 0 .03.01.05.01.55 0 1-.45 1-1s-.45-1-1-1H9.46l.05-.05h.01l.81-.84 8.38-8.68zM7.52 17.94l-4.95-5.12 4.46-4.61 4.95 5.12-4.46 4.61z'
]

export default class EraserIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
