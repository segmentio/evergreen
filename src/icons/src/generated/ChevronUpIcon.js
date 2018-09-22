import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M12.71 9.29l-4-4C8.53 5.11 8.28 5 8 5s-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L8 7.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z'
]
const svgPaths20 = [
  'M16.71 12.29l-6-6C10.53 6.11 10.28 6 10 6s-.53.11-.71.29l-6 6a1.003 1.003 0 0 0 1.42 1.42L10 8.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z'
]

export default class ChevronUpIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
