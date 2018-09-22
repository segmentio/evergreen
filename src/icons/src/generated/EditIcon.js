import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M3.25 10.26l2.47 2.47 6.69-6.69-2.46-2.48-6.7 6.7zM.99 14.99l3.86-1.39-2.46-2.44-1.4 3.83zm12.25-14c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.44-1.44c.32-.32.51-.75.51-1.24.01-.95-.77-1.74-1.74-1.74z'
]
const svgPaths20 = [
  'M4.59 12.59l2.83 2.83 7.65-7.65-2.83-2.83-7.65 7.65zM2 18l4.41-1.59-2.81-2.79L2 18zM16 2c-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.83 1.65-1.65A2.006 2.006 0 0 0 16 2z'
]

export default class EditIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
