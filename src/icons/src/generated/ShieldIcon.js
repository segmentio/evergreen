import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M8 16c4.667-3.048 7-7.238 7-12.571-1.556 0-3.889-1.143-7-3.429-3.111 2.286-5.444 3.429-7 3.429C1 8.762 3.333 12.952 8 16zM8 2.121c2.005 1.388 3.715 2.304 5.186 2.735-.342 3.702-2.05 6.683-5.186 9.038V2.121z'
]
const svgPaths20 = [
  'M10 20c6-3.81 9-9.048 9-15.714-2 0-5-1.429-9-4.286-4 2.857-7 4.286-9 4.286C1 10.952 4 16.19 10 20zm0-17.348c2.577 1.734 4.776 2.88 6.667 3.419-.44 4.627-2.636 8.353-6.667 11.297V2.652z'
]

export default class ShieldIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
