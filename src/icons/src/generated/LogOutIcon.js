import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M7 14H2V2h5c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm8.71-6.71l-3-3a1.003 1.003 0 0 0-1.42 1.42L12.59 7H6c-.55 0-1 .45-1 1s.45 1 1 1h6.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
]
const svgPaths20 = [
  'M19.71 9.29l-5-5a1.003 1.003 0 0 0-1.42 1.42L16.59 9H6c-.55 0-1 .45-1 1s.45 1 1 1h10.59l-3.29 3.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l5-5c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM9 18H2V2h7c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1z'
]

export default class LogOutIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
