import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M8 16c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm6-5c-.55 0-1-.45-1-1V6c0-2.43-1.73-4.45-4.02-4.9 0-.04.02-.06.02-.1 0-.55-.45-1-1-1S7 .45 7 1c0 .04.02.06.02.1A4.992 4.992 0 0 0 3 6v4c0 .55-.45 1-1 1s-1 .45-1 1 .45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z'
]
const svgPaths20 = [
  'M10 20c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2zm7-5c-.55 0-1-.45-1-1V8c0-2.61-1.67-4.81-4-5.63V2c0-1.1-.9-2-2-2S8 .9 8 2v.37C5.67 3.19 4 5.39 4 8v6c0 .55-.45 1-1 1s-1 .45-1 1 .45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z'
]

export default class NotificationsIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
