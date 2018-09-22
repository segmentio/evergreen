import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M12.71 5.29l-4-4C8.53 1.11 8.28 1 8 1s-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L8 3.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z'
]
const svgPaths20 = [
  'M16.71 7.29l-6-6C10.53 1.11 10.28 1 10 1s-.53.11-.71.29l-6 6a1.003 1.003 0 0 0 1.42 1.42L10 3.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z'
]

export default class KeyControlIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
