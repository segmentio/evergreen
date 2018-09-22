import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 15H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zM14 5H2v8h12V5zM4 6c.28 0 .53.11.71.29l2 2c.18.18.29.43.29.71s-.11.53-.29.71l-2 2a1.003 1.003 0 0 1-1.42-1.42L4.59 9l-1.3-1.29A1.003 1.003 0 0 1 4 6zm5 4h3c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z'
]
const svgPaths20 = [
  'M19 19H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1zM18 6H2v11h16V6zM4 8c.28 0 .53.11.71.29l2 2c.18.18.29.43.29.71s-.11.53-.29.71l-2 2a1.003 1.003 0 0 1-1.42-1.42L4.59 11l-1.3-1.29A1.003 1.003 0 0 1 4 8zm5 4h3c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z'
]

export default class ConsoleIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
