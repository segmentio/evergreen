import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M4.41 8L7.7 4.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4C2.11 7.47 2 7.72 2 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L4.41 8zm5 0l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4C7.11 7.47 7 7.72 7 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L9.41 8z'
]
const svgPaths20 = [
  'M5.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 0 0 1.42-1.42L5.41 10zm6 0l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 0 0 1.42-1.42L11.41 10z'
]

export default class DoubleChevronLeftIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
