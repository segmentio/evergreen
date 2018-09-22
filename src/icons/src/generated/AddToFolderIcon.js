import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M.01 7V5H16v7c0 .55-.45 1-1 1H9.005v-2.99C8.974 8.332 7.644 7 5.996 7H.01zM15 2H7.416L5.706.29a.996.996 0 0 0-.71-.29H1C.45 0 0 .45 0 1v3h15.99V3c.01-.55-.44-1-.99-1zM5.997 9H2c-.55 0-1 .45-1 1s.45 1 1 1h1.589L.3 14.29a1.003 1.003 0 0 0 1.42 1.42l3.287-3.29v1.59c0 .55.45 1 1 1 .549 0 .999-.45.999-1v-4A1.02 1.02 0 0 0 5.996 9z'
]
const svgPaths20 = [
  'M.01 10V6H20v10c0 .55-.45 1-1 1H9.995v-3.99C9.965 11.332 8.635 10 6.987 10H.01zM19 3c.55 0 1 .45.99 1v1H0V2c0-.55.45-1 1-1h5.997c.28 0 .53.11.71.29L9.414 3H19zM6.987 12c.55 0 .999.45 1.009 1.01v5c0 .55-.45 1-1 1s-.999-.45-.999-1v-2.59l-4.288 4.29a1.003 1.003 0 0 1-1.42-1.42L4.579 14H1.989c-.55 0-1-.45-1-1s.45-1 1-1h4.998z'
]

export default class AddToFolderIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
