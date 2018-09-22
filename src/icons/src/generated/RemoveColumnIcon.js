import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M14 0H4c-.55 0-1 .45-1 1v3h2V2h3v12H5v-2H3v3c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14h-3V2h3v12zm-8.71-3.29a1.003 1.003 0 0 0 1.42-1.42L4.41 8 5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L3 6.59l-1.29-1.3A1.003 1.003 0 0 0 .29 6.71L1.59 8 .29 9.29a1.003 1.003 0 0 0 1.42 1.42L3 9.41l1.29 1.3z'
]
const svgPaths20 = [
  'M19 0H5c-.55 0-1 .45-1 1v4h2V2h5v16H6v-3H4v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18h-5V2h5v16zM6.29 13.71a1.003 1.003 0 0 0 1.42-1.42L5.41 10 7.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L4 8.59l-2.29-2.3A1.003 1.003 0 0 0 .29 7.71L2.59 10 .3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L4 11.41l2.29 2.3z'
]

export default class RemoveColumnIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
