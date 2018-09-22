import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M8 11H7v1h1v-1zm-4 0H3v1h1v-1zm7-8c.6 0 1-.5 1-1V1c0-.5-.4-1-1-1s-1 .5-1 1v1c0 .5.5 1 1 1zM4 3c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1S3 .5 3 1v1c0 .5.5 1 1 1zm10-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.5 0-1 .5-1 1v12c0 .5.5 1 1 1h13c.6 0 1-.5 1-1V2c0-.5-.4-1-1-1zM5 13H2v-3h3v3zm0-4H2V6h3v3zm4 4H6v-3h3v3zm0-4H6V6h3v3zm4 4h-3v-3h3v3zm0-4h-3V6h3v3zm-1-2h-1v1h1V7z'
]
const svgPaths20 = [
  'M5 5c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zm10 0c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zm-9 9H4v2h2v-2zM17 3v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H7v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H2c-.5 0-1 .5-1 1v14c0 .5.5 1 1 1h16c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1h-1zM7 17H3v-4h4v4zm0-5H3V8h4v4zm5 5H8v-4h4v4zm0-5H8V8h4v4zm5 5h-4v-4h4v4zm0-5h-4V8h4v4zm-6 2H9v2h2v-2zm5-5h-2v2h2V9z'
]

export default class TimelineEventsIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
