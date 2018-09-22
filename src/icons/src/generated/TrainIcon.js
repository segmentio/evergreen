import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13 14h-1l1 2H3l1-2H3c-1.1 0-2-.9-2-2V2C1 .9 4.13 0 8 0s7 .9 7 2v10c0 1.1-.9 2-2 2zm-2-2h2v-2h-2v2zM9 7h4V3H9v4zm-6 5h2v-2H3v2zm0-5h4V3H3v4z'
]
const svgPaths20 = [
  'M16 18h-2l2 2H4l.12-.12L6 18H4c-1.1 0-2-.9-2-2V2c0-1.1 3.58-2 8-2s8 .9 8 2v14c0 1.1-.9 2-2 2zM5.5 15c.83 0 1.5-.67 1.5-1.5S6.33 12 5.5 12 4 12.67 4 13.5 4.67 15 5.5 15zM9 3H4v6h5V3zm7 0h-5v6h5V3zm-1.5 9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z'
]

export default class TrainIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
