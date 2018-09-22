import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M4 8c.28 0 .53-.11.71-.29L8 4.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-4-4C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-4 4A1.003 1.003 0 0 0 4 8zm4.71-.71C8.53 7.11 8.28 7 8 7s-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-4-4z'
]
const svgPaths20 = [
  'M4 11c.28 0 .53-.11.71-.29L10 5.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-6-6A.997.997 0 0 0 10 3c-.28 0-.53.11-.71.29l-6 6A1.003 1.003 0 0 0 4 11zm6.71-1.71A.997.997 0 0 0 10 9c-.28 0-.53.11-.71.29l-6 6a1.003 1.003 0 0 0 1.42 1.42l5.29-5.3 5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-6-6z'
]

export default class DoubleChevronUpIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
