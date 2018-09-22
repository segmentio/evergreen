import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M10 3c-.55 0-1 .45-1 1v2.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42L7.59 8 4.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L9 9.41V12c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M13 3c-.55 0-1 .45-1 1v4.59l-5.29-5.3a1.003 1.003 0 0 0-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l5.29-5.3V16c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z'
]

export default class ChevronForwardIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
