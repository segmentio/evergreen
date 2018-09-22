import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 4c-.28 0-.53.11-.71.29L12 6.59V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V9.41l2.29 2.29c.18.19.43.3.71.3.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M19 5c-.28 0-.53.11-.71.29L15 8.59V5c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-3.59l3.29 3.29c.18.19.43.3.71.3.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z'
]

export default class MobileVideoIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
