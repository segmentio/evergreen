import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13.99.99h-12a1.003 1.003 0 0 0-.71 1.71l4.71 4.71V14a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71V7.41L14.7 2.7a1.003 1.003 0 0 0-.71-1.71z'
]
const svgPaths20 = [
  'M18 1H2a1.003 1.003 0 0 0-.71 1.71L7 8.41V18a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71V8.41l5.71-5.71c.18-.17.29-.42.29-.7 0-.55-.45-1-1-1z'
]

export default class FilterIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
