import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M9.01 14h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.44-1-1-1zm1-3h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.44-1-1-1zm-2-11C5.26 0 3.03 1.95 3.03 4.35c0 2.37 1.63 2.64 1.94 5.22 0 .24.22.44.5.44h5.09c.28 0 .5-.19.5-.44C11.37 6.99 13 6.72 13 4.35 13 1.95 10.77 0 8.01 0z'
]
const svgPaths20 = [
  'M6.33 13.39c0 .34.27.61.6.61h6.13c.33 0 .6-.27.6-.61C14.03 9.78 16 9.4 16 6.09 16 2.72 13.31 0 10 0S4 2.72 4 6.09c0 3.31 1.97 3.69 2.33 7.3zM13 15H7c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm-1 3H8c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1z'
]

export default class LightbulbIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
