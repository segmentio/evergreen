import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M7.29 6.71c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 0 0-1.42-1.42L8 4.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4zm1.42 2.58C8.53 9.11 8.28 9 8 9s-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L8 11.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-4-4z'
]
const svgPaths20 = [
  'M9.29 8.71c.18.18.43.29.71.29s.53-.11.71-.29l6-6a1.003 1.003 0 0 0-1.42-1.42L10 6.59l-5.29-5.3a1.003 1.003 0 0 0-1.42 1.42l6 6zm1.42 2.58c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29l-6 6a1.003 1.003 0 0 0 1.42 1.42l5.29-5.3 5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-6-6z'
]

export default class CollapseAllIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
