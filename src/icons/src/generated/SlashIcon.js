import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M10 2a.99.99 0 0 0-.96.73l-2.99 9.96A1.003 1.003 0 0 0 7 14c.46 0 .85-.31.96-.73l2.99-9.96A1.003 1.003 0 0 0 10 2z'
]
const svgPaths20 = [
  'M12 2c-.46 0-.85.32-.97.74L7.04 16.7c-.02.1-.04.2-.04.3 0 .55.45 1 1 1 .46 0 .85-.32.97-.74L12.96 3.3c.02-.1.04-.2.04-.3 0-.55-.45-1-1-1z'
]

export default class SlashIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
