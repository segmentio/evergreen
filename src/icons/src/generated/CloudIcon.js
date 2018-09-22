import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M12 6c-.03 0-.07 0-.1.01A5 5 0 0 0 2 7c0 .11.01.22.02.33A3.51 3.51 0 0 0 0 10.5C0 12.43 1.57 14 3.5 14H12c2.21 0 4-1.79 4-4s-1.79-4-4-4z'
]
const svgPaths20 = [
  'M15 7c-.12 0-.24.03-.36.04C13.83 4.69 11.62 3 9 3 5.69 3 3 5.69 3 9c0 .05.01.09.01.14A3.98 3.98 0 0 0 0 13c0 2.21 1.79 4 4 4h11c2.76 0 5-2.24 5-5s-2.24-5-5-5z'
]

export default class CloudIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
