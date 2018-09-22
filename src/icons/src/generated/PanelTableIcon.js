import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M15 1H1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM8 9H6V7h2v2zm0-3H6V4h2v2zm-6 6V3h3v9H2zm4 0v-2h2v2H6zm8 0H9v-2h5v2zm0-3H9V7h5v2zm0-3H9V4h5v2z'
]
const svgPaths20 = [
  'M19 1H1c-.6 0-1 .4-1 1v15c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm-9 11H7V9h3v3zm0-4H7V5h3v3zm-8 8V3h4v13H2zm5 0v-3h3v3H7zm11 0h-7v-3h7v3zm0-4h-7V9h7v3zm0-4h-7V5h7v3z'
]

export default class PanelTableIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
