import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M16 8c0-.37-.21-.68-.51-.85l.01-.01-7-4-.01.01C8.34 3.06 8.18 3 8 3s-.34.06-.49.15l-.01-.02-7 4 .01.01C.21 7.32 0 7.63 0 8s.21.68.51.85l-.01.01 7 4 .01-.01c.15.09.31.15.49.15s.34-.06.49-.15l.01.01 7-4-.01-.01c.3-.17.51-.48.51-.85z'
]
const svgPaths20 = [
  'M19.5 9.1l-9-5c-.2-.1-.3-.1-.5-.1s-.3 0-.5.1l-9 5c-.3.2-.5.5-.5.9s.2.7.5.9l9 5c.2.1.3.1.5.1s.3 0 .5-.1l9-5c.3-.2.5-.5.5-.9s-.2-.7-.5-.9z'
]

export default class LayerIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
