import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M7.29 11.71c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 0 0-1.42-1.42L9 8.59V1c0-.55-.45-1-1-1S7 .45 7 1v7.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l4 4zM15 11c-.55 0-1 .45-1 1v2H2v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M9.29 15.71c.18.18.43.29.71.29s.53-.11.71-.29l5-5a1.003 1.003 0 0 0-1.42-1.42L11 12.59V1c0-.55-.45-1-1-1S9 .45 9 1v11.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l5 5zM19 14c-.55 0-1 .45-1 1v3H2v-3c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z'
]

export default class ImportIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
