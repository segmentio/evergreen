import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13.99 6.99H4.41L7.7 3.7a1.003 1.003 0 0 0-1.42-1.42l-5 5a1.014 1.014 0 0 0 0 1.42l5 5a1.003 1.003 0 0 0 1.42-1.42L4.41 8.99H14c.55 0 1-.45 1-1s-.46-1-1.01-1z'
]
const svgPaths20 = [
  'M18 9H4.41L8.7 4.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 0 0 1.42-1.42L4.41 11H18c.55 0 1-.45 1-1s-.45-1-1-1z'
]

export default class ArrowLeftIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
