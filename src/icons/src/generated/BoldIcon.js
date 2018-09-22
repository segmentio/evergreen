import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M11.7 7c.2-.4.3-1 .3-1.5v-.4V5c0-.1 0-.2-.1-.3v-.1C11.4 3.1 10.1 2 8.5 2H4c-.5 0-1 .4-1 1v10c0 .5.4 1 1 1h5c2.2 0 4-1.8 4-4 0-1.2-.5-2.3-1.3-3zM6 5h2c.6 0 1 .4 1 1s-.4 1-1 1H6V5zm3 6H6V9h3c.6 0 1 .4 1 1s-.4 1-1 1z'
]
const svgPaths20 = [
  'M14.3 9c.4-.8.7-1.6.7-2.5C15 4 13 2 10.5 2H5c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h6.5c2.5 0 4.5-2 4.5-4.5 0-1.4-.7-2.7-1.7-3.5zM7 5h3.5c.8 0 1.5.7 1.5 1.5S11.3 8 10.5 8H7V5zm4.5 9H7v-3h4.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z'
]

export default class BoldIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
