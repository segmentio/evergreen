import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M8 14c2.8 0 5-2.2 5-5V3c0-.6-.4-1-1-1s-1 .4-1 1v6c0 1.7-1.3 3-3 3s-3-1.3-3-3V3c0-.6-.4-1-1-1s-1 .4-1 1v6c0 2.8 2.2 5 5 5zM13.5 15h-11c-.3 0-.5.2-.5.5s.2.5.5.5h11c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z'
]
const svgPaths20 = [
  'M10 17c3.3 0 6-2.7 6-6V3.5c0-.8-.7-1.5-1.5-1.5S13 2.7 13 3.5V11c0 1.7-1.3 3-3 3s-3-1.3-3-3V3.5C7 2.7 6.3 2 5.5 2S4 2.7 4 3.5V11c0 3.3 2.7 6 6 6zM16.5 19h-13c-.3 0-.5.2-.5.5s.2.5.5.5h13c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z'
]

export default class UnderlineIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
