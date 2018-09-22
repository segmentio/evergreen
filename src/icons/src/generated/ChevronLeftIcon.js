import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M7.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4C5.11 7.47 5 7.72 5 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L7.41 8z'
]
const svgPaths20 = [
  'M8.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 0 0 1.42-1.42L8.41 10z'
]

export default class ChevronLeftIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
