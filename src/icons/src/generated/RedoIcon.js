import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3.71-6.71l-3-3a1.003 1.003 0 0 0-1.42 1.42L12.59 4H5C2.24 4 0 6.24 0 9s2.24 5 5 5h4v-2H5c-1.66 0-3-1.34-3-3s1.34-3 3-3h7.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
]
const svgPaths20 = [
  'M19.71 5.29l-4-4a1.003 1.003 0 0 0-1.42 1.42L16.59 5H6c-3.31 0-6 2.69-6 6s2.69 6 6 6h5v-2H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h10.59L14.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM15 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
]

export default class RedoIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
