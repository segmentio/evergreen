import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M8 4c3.31 0 6-.9 6-2s-2.69-2-6-2C4.68 0 2 .9 2 2s2.68 2 6 2zm-6-.48V8c0 1.1 2.69 2 6 2s6-.9 6-2V3.52C12.78 4.4 10.56 5 8 5s-4.78-.6-6-1.48zm0 6V14c0 1.1 2.69 2 6 2s6-.9 6-2V9.52C12.78 10.4 10.56 11 8 11s-4.78-.6-6-1.48z'
]
const svgPaths20 = [
  'M2.01 5.1v5.4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5.1c-1.49 1.13-4.51 1.9-8 1.9-3.48 0-6.5-.77-8-1.9zm8 .9c4.42 0 8-1.12 8-2.5s-3.58-2.5-8-2.5-8 1.12-8 2.5S5.6 6 10.01 6zm-8 6.1v5.4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5.4c-1.49 1.13-4.51 1.9-8 1.9-3.48 0-6.5-.77-8-1.9z'
]

export default class DatabaseIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
