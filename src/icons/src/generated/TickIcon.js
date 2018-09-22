import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0 0 14 3z'
]
const svgPaths20 = [
  'M17 4c-.28 0-.53.11-.71.29L7 13.59 3.71 10.3A.965.965 0 0 0 3 10a1.003 1.003 0 0 0-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l10-10A1.003 1.003 0 0 0 17 4z'
]

export default class TickIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
