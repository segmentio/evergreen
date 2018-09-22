import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M11.99-.01h-3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1zm-6 5c-.28 0-.53.11-.71.29l-2 2a1.014 1.014 0 0 0 0 1.42l2 2a1.003 1.003 0 0 0 1.71-.71v-4c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M14.94 0h-4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-8 6c-.28 0-.53.11-.71.29l-3 3c-.18.18-.29.43-.29.71s.11.53.29.71l3 3A1.003 1.003 0 0 0 7.94 13V7c0-.55-.45-1-1-1z'
]

export default class OneColumnIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
