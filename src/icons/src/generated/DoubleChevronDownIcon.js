import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M7.29 8.71c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 0 0-1.42-1.42L8 6.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4zM12 8c-.28 0-.53.11-.71.29L8 11.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0 0 12 8z'
]
const svgPaths20 = [
  'M9.29 10.71c.18.18.43.29.71.29s.53-.11.71-.29l6-6a1.003 1.003 0 0 0-1.42-1.42L10 8.59l-5.29-5.3a1.003 1.003 0 0 0-1.42 1.42l6 6zM16 9c-.28 0-.53.11-.71.29L10 14.59l-5.29-5.3a1.003 1.003 0 0 0-1.42 1.42l6 6c.18.18.43.29.71.29s.53-.11.71-.29l6-6A1.003 1.003 0 0 0 16 9z'
]

export default class DoubleChevronDownIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
