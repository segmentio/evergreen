import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13.93 14.67L8.94.67h-.01C8.79.28 8.43 0 8 0s-.79.28-.93.67h-.01l-5 14h.01c-.04.1-.07.21-.07.33 0 .55.45 1 1 1 .43 0 .79-.28.93-.67h.01L5.49 11h5.02l1.55 4.34h.01c.14.38.5.66.93.66.55 0 1-.45 1-1 0-.12-.03-.23-.07-.33zM6.2 9L8 3.97 9.8 9H6.2z'
]
const svgPaths20 = [
  'M17.93 18.64l-7-18C10.78.27 10.42 0 10 0s-.78.27-.93.64l-7 18c-.04.11-.07.23-.07.36 0 .55.45 1 1 1 .42 0 .78-.27.93-.64L6.41 13h7.19l2.47 6.36c.15.37.51.64.93.64.55 0 1-.45 1-1 0-.13-.03-.25-.07-.36zM7.18 11L10 3.76 12.82 11H7.18z'
]

export default class FontIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
