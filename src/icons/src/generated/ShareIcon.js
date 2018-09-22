import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M10.99 13.99h-9v-9h4.76l2-2H.99c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V7.24l-2 2v4.75zm4-14h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L7.29 7.28a1 1 0 0 0-.3.71 1.003 1.003 0 0 0 1.71.71l5.29-5.29V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.56-.45-1.01-1-1.01z'
]
const svgPaths20 = [
  'M15 18H2V5h8.76l2-2H1c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V7.24l-2 2V18zm4-18h-7c-.55 0-1 .45-1 1s.45 1 1 1h4.59l-7.3 7.29a1.003 1.003 0 0 0 1.42 1.42L18 3.41V8c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z'
]

export default class ShareIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
