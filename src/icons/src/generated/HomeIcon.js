import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M2 10v5c0 .55.45 1 1 1h3v-5h4v5h3c.55 0 1-.45 1-1v-5L8 4l-6 6zm13.71-2.71L14 5.59V2c0-.55-.45-1-1-1s-1 .45-1 1v1.59L8.71.29C8.53.11 8.28 0 8 0s-.53.11-.71.29l-7 7a1.003 1.003 0 0 0 1.42 1.42L8 2.41l6.29 6.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z'
]
const svgPaths20 = [
  'M2 12v7c0 .55.45 1 1 1h5v-7h4v7h5c.55 0 1-.45 1-1v-7l-8-8-8 8zm17.71-2.71L17 6.59V3c0-.55-.45-1-1-1s-1 .45-1 1v1.59L10.71.3C10.53.11 10.28 0 10 0s-.53.11-.71.29l-9 9a1.003 1.003 0 0 0 1.42 1.42L10 2.41l8.29 8.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z'
]

export default class HomeIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
