import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M9 8c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1zm3-6c0-.55-.45-1-1-1H1a1.003 1.003 0 0 0-.71 1.71L4 6.41V12a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71V6.41l3.71-3.71c.18-.17.29-.42.29-.7zm3 8h-5c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm0 3h-5c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1z'
]
const svgPaths20 = [
  'M15 2c0-.55-.45-1-1-1H1a1.003 1.003 0 0 0-.71 1.71L5 7.41V16a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7zm-4 8c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1zm8 7h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0-4h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z'
]

export default class FilterListIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
