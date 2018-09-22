import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M10 14H2V2h4v4h1c0-.83.36-1.55.91-2.09l-.03-.03.9-.9C8.3 2.45 8 1.77 8 1L7 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V8.22c-.53.48-1.23.78-2 .78v5zm5-14h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.29a1.003 1.003 0 0 0 1.42 1.42L14 3.41V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M14.09 10.09c-.31.31-.67.57-1.09.72V18H2V2h6v5h1.18c.15-.42.39-.8.7-1.11v-.01l2.45-2.45c-.42-.29-.78-.65-1.01-1.11L9 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V9.24l-.88.88-.03-.03zM19 0h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L18 3.41V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z'
]

export default class DocumentShareIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
