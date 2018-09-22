import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M5 2.66C5 4.14 8 8 8 8s3-3.86 3-5.34C10.99 1.2 9.66 0 8 0S5 1.2 5 2.66zM7 3c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zM10.5 10H8v5h1v-4h1v1H9v1h2v-3h-.5zM2 9h12c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1zm4 1v5h1v-5H6z'
]
const svgPaths20 = [
  'M6 3.66C6 5.69 10 11 10 11s4-5.31 4-7.34C13.99 1.64 12.21 0 10 0S6 1.64 6 3.66zM8 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM14 13.5V13h-4v1h3v2h-2v1h3v-3.5zM3 12h14c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1zm4 1v6h1v-6H7zm3 1v5h1v-5h-1z'
]

export default class IpAddressIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
