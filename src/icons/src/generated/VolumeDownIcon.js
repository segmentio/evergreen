import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M9 2c-.28 0-.53.11-.71.29L5.59 5H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm3.57 1.44l-1.59 1.22C11.62 5.61 12 6.76 12 8s-.38 2.39-1.02 3.34l1.59 1.22C13.47 11.27 14 9.7 14 8c0-1.7-.53-3.27-1.43-4.56z'
]
const svgPaths20 = [
  'M15.92 3.93l-1.6 1.18A7.948 7.948 0 0 1 16 10c0 1.84-.63 3.54-1.68 4.89l1.6 1.18A9.878 9.878 0 0 0 18 10c0-2.29-.78-4.39-2.08-6.07zM11 3c-.28 0-.53.11-.71.29L7.59 6H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
]

export default class VolumeDownIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
