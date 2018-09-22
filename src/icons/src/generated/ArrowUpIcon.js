import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13.7 6.3l-5-5C8.5 1.1 8.3 1 8 1s-.5.1-.7.3l-5 5c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3L7 4.4V14c0 .6.4 1 1 1s1-.4 1-1V4.4l3.3 3.3c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7z'
]
const svgPaths20 = [
  'M16.7 7.3l-6-6c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-6 6c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3L9 4.4V18c0 .5.4 1 1 1s1-.5 1-1V4.4l4.3 4.3c.2.2.4.3.7.3.5 0 1-.4 1-1 0-.3-.1-.5-.3-.7z'
]

export default class ArrowUpIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
