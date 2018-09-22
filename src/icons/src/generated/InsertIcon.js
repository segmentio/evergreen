import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M5 9h2v2c0 .6.4 1 1 1s1-.4 1-1V9h2c.6 0 1-.4 1-1s-.4-1-1-1H9V5c0-.6-.4-1-1-1s-1 .4-1 1v2H5c-.6 0-1 .4-1 1s.4 1 1 1zm10-9H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-1 14H2V2h12v12z'
]
const svgPaths20 = [
  'M19 0H1C.4 0 0 .4 0 1v18c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V1c0-.6-.5-1-1-1zm-1 18H2V2h16v16zM5 11h4v4c0 .6.4 1 1 1s1-.4 1-1v-4h4c.6 0 1-.4 1-1s-.4-1-1-1h-4V5c0-.6-.4-1-1-1s-1 .4-1 1v4H5c-.6 0-1 .4-1 1s.4 1 1 1z'
]

export default class InsertIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
