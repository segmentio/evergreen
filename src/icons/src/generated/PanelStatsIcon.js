import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M10 4h3v1h-3zM10 6h3v1h-3zM10 8h3v1h-3zM10 10h3v1h-3z',
  'M15 1H1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM8 12H2V3h6v9zm6 0H9V3h5v9z'
]
const svgPaths20 = [
  'M1 1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm1 2v13h16V3H2zm9 0h1v13h-1V3zm2 7h3.952v1H13v-1zm0 2h3.952v1H13v-1zm0 2h3.952v1H13v-1zm0-6h3.952v1H13V8zm0-2h3.952v1H13V6zm0-2h3.952v1H13V4z'
]

export default class PanelStatsIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
