import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M5.99 8.99c-.28 0-.53.11-.71.29l-3.29 3.29v-1.59c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.41L6.7 10.7a1.003 1.003 0 0 0-.71-1.71zm9-9h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.3a.99.99 0 0 0-.29.7 1.003 1.003 0 0 0 1.71.71l3.29-3.29V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.56-.45-1.01-1-1.01z'
]
const svgPaths20 = [
  'M19 0h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L18 3.41V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zM8 11c-.28 0-.53.11-.71.29L2 16.59V14c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1H3.41l5.29-5.29c.19-.18.3-.43.3-.71 0-.55-.45-1-1-1z'
]

export default class MaximizeIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
