import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13.71 7.29l-5-5C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-5 5A1.003 1.003 0 0 0 3 9h2v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V9h2a1.003 1.003 0 0 0 .71-1.71z'
]
const svgPaths20 = [
  'M17.74 10.35l-6.99-8.01-.01.01C10.56 2.14 10.3 2 10 2s-.56.14-.74.35l-.01-.01-7 8 .01.01A.95.95 0 0 0 2 11c0 .55.45 1 1 1h3v5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-5h3c.55 0 1-.45 1-1 0-.25-.1-.48-.26-.65z'
]

export default class KeyShiftIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
