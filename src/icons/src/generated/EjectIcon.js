import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M4 9h8a1.003 1.003 0 0 0 .71-1.71l-4-4C8.53 3.11 8.28 3 8 3s-.53.11-.71.29l-4 4A1.003 1.003 0 0 0 4 9zm8 1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M4 12h12c.55 0 1-.45 1-1 0-.25-.1-.47-.25-.64l.01-.01-6-7-.01.01C10.57 3.14 10.3 3 10 3s-.57.14-.75.36l-.01-.01-6 7 .01.01c-.15.17-.25.39-.25.64 0 .55.45 1 1 1zm12 1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z'
]

export default class EjectIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
