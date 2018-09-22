import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M11.2.01h-.15C11.03.01 11.02 0 11 0H5c-.02 0-.03.01-.05.01H4.8c-.44 0-.8.37-.8.82v14.75c0 .45.25.56.57.24l2.87-2.94c.31-.32.82-.32 1.13 0l2.87 2.94c.31.32.57.21.57-.24V.83C12 .38 11.64.01 11.2.01z'
]
const svgPaths20 = [
  'M6 0c-.55 0-1 .45-1 1v18c0 .55.32.68.71.29L9.3 15.7a.996.996 0 0 1 1.41 0l3.59 3.59c.38.39.7.26.7-.29v-8-4.5V1c0-.55-.45-1-1-1H6z'
]

export default class BookmarkIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
